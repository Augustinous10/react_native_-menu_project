import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
  Image,
  TextInput,
  FlatList,
  Alert,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import image from "../../assets/cheeseBugger.jpeg";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "./cartredux";

export default function SettingsScreen() {
  const [quantity, setQuantity] = useState(1);
  const [amount, setAmount] = useState(5000);
  const navigation = useNavigation();
  const[isLoading,setLoading]=useState(false)
  const cart = useSelector((state) => state.cart);
  // console.log(cart.cart);
  const dispatch = useDispatch();
  // const amount=calctotal(cart.cart)
const remove=()=>{
Alert.alert(
  "Warning",
  "you want to remove this product?",
  [
    {
      text: 'Ok',
      onPress: () =>{
        setQuantity(0)
    }
    },
    {
      text:'cancel',
      
    }
  ],
  { cancelable: true}
  )
}
  return (
    <SafeAreaView style={{ flex: 1 }}>
      
      <Text
        style={{
          fontSize: 20,
          position: "absolute",
          right: 170,
          fontWeight: "800",
          marginTop: 30,
        }}
      >
        Your Cart
      </Text>

      <FlatList
        data={cart.cart}
        keyExtractor={(item, index) => item._id}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <MaterialIcons
              name="cancel"
              size={24}
              color="red"
              onPress={() => remove()}
            />
            <View style={styles.image}>
              <Image source={{ uri: item.thumb }}  style={styles.image} />
            </View>
            <View>
              <Text style={styles.name}>---------{item.name}-------</Text>
              <Text style={styles.ingredients}>{item.desc}</Text>
              <Text style={styles.price}>
                UP:{item.cost} rwf Amount: {item.cost * quantity} rwf
              </Text>

              <View style={styles.quantity_container}>
                <Text>QTY:</Text>
                <View>
                  <Entypo name="circle-with-minus" size={24} color="#12bbc7"onPress={()=>quantity>0?setQuantity(quantity-1):0} />
                </View>
                <View>
                  <Text>{quantity}</Text>
                </View>
                <View>
                  <Entypo name="circle-with-plus" size={24} color="#12bbc7" onPress={()=>setQuantity(quantity+1)} />
                </View>
              </View>
            </View>
          </View>
        )}
      />
      <View style={styles.location}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "800",
            textAlign: "center",
            marginLeft: 30,
          }}
        >
          Your Location
        </Text>
        <View style={styles.location_container}>
          <Entypo
            name="location"
            size={30}
            color="#12bbc7"
            style={{ marginTop: 10 }}
          />
          <TextInput placeholder="Address" style={styles.location_text} />
        </View>
        <View style={styles.location_container}>
          <Entypo
            name="address"
            size={30}
            color="#12bbc7"
            style={{ marginTop: 10 }}
          />
          <TextInput placeholder="Room-number" style={styles.location_text} />
        </View>
        <View style={styles.location_container}>
          <Entypo
            name="home"
            size={30}
            color="#12bbc7"
            style={{ marginTop: 10 }}
          />
          <TextInput placeholder="Number on Table" style={styles.location_text} />
        </View>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("payment")}
      >
        <Text style={{ fontSize: 18, fontWeight: "800", textAlign: "center" }}>
          Confirm Order
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    display: "flex",
    marginTop: 100,
    marginLeft: 10,
    flexDirection: "row",
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: "cover",
    borderRadius: 50,
  },
  name: {
    fontWeight: "800",
    fontSize: 16,
  },
  ingredients: {
    textAlign: "center",
  },
  price: {
    marginTop: 10,
    marginLeft: 10,
    fontWeight: "600",
  },
  searchContainer: {
    marginTop: 50,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  textinput: {
    borderWidth: 1,
    borderColor: "#0f0f0f",
    fontSize: 18,
    fontWeight: "bold",
    borderRadius: 50,
    width: 300,
    textAlign: "center",
    height: 50,
  },
  quantity_container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  location: {
    flex: 3,
    alignItems: "center",
  },
  location_container: {
    display: "flex",
    flexDirection: "row",
  },
  location_text: {
    marginLeft: 10,
    borderWidth: 1,
    borderColor: "#0f0f0f",
    fontSize: 18,
    fontWeight: "bold",
    borderRadius: 50,
    width: 300,
    textAlign: "center",
    height: 30,
    marginTop: 10,
  },
  button: {
    marginBottom: 40,
    width: 150,
    height: 30,
    borderWidth: 3,
    borderRadius: 10,
    marginLeft: 140,
    borderColor: "#12bbc7",
    backgroundColor: "#12bbc7",
  },
});
