import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: []
    },

    reducers: {
        addfood: (state, action) => {
            // console.log(action.payload._id)
            const food = action.payload
            //  console.log(food._id);
            // console.log(state.cart);
            const finds = state.cart.find(item => item._id === food._id)
            //  console.log(finds);
            if (finds) {
                state.cart = state.cart.map((item) => {
                    if (item._id === food._id) {
                        console.log('exist: ')
                        return {
                            ...item,
                            quantity: item.quantity += 1
                        }
                    } else {
                        return item
                    }
                })
            } else {
                state.cart = [
                    ...state.cart,
                    {
                        ...food,
                        quantity: 1
                    }
                ]
            }
            

        },
        increment(state,  action ) {
            const food = action.payload
            return state.cart.map((item) =>
              item._id === food.payload
                ? {
                    ...item,
                    quantity: item.quantity + 1,
                  }
                : item
            );
            
          },
        }
    })
    export const{addfood,increment}=cartSlice.actions;
    export default cartSlice.reducer