import React from 'react';
import { StyleSheet, TextInput, View,Text, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { StripeProvider } from '@stripe/stripe-react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import image1 from '../../assets/airtel-money.png'
import image2 from '../../assets/mtn.png'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../navigation/screens/HomeScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const homeName = "Home";
const menuName = "Menu";
const settingsName = "Cart";
const loginName= "Login";



export default function Payment(){
    const Tab= createBottomTabNavigator();

    return(
      
        <View style={styles.container}>
          
            <Text style={styles.title}>Use Bellow Payment Methods</Text>
            {/* <Text style={styles.title1}>-----------Cards-----------</Text> */}
            <View style={styles.card}>
            <FontAwesome5 name="cc-visa" size={34} color="black" />
            {/* <FontAwesome name="credit-card-alt" size={32} color="black" /> */}
            {/* <FontAwesome name="cc-mastercard" size={34} color="black" /> */}
            {/* <FontAwesome5 name="wallet" size={34} color="black" /> */}
            {/* <FontAwesome5 name="sim-card" size={34} color="black" /> */}

            </View>
            <TextInput style={styles.textinput} placeholder='Name of account'/>
            <TextInput style={styles.textinput} placeholder='Number of account'/>
            <View style={styles.year}>
            <TextInput style={styles.year1} placeholder='MM/YYYY'/>
            <TextInput style={styles.cvc} placeholder='CVC'/>
            </View>
            <View>
                <TouchableOpacity style={styles.pay}>
                    <Text style={styles.text}>Confirm Payment </Text>
                </TouchableOpacity>
                
            </View>
            {/* <Text style={styles.title2}>---------Sim-cards--------</Text> */}
            <View style={styles.payimage}>
            <TouchableOpacity onPress={()=>alert('upcoming services')}>
            {/* <Image source={image1} style={styles.image1} /> */}
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>alert('upcoming services')}>
            {/* <Image source={image2} style={styles.image1} /> */}
            </TouchableOpacity>
            </View>

        </View>
        
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        // alignItems:'center',
        marginLeft:0,
        
      
    },

    textinput:{
        borderWidth:3,
        borderColor:'#0f0f0f',
        width:350,
        margin:10,
        height:50,
        textAlign:'center',
        borderRadius:10
    },
   year:{
    display:'flex',
    flexDirection:'row',
   },
   year1:{
    borderWidth:3,
        borderColor:'#0f0f0f',
        width:230,
        margin:10,
        height:50,
        textAlign:'center',
        borderRadius:10,
    

   },
   cvc:{
    borderWidth:3,
        borderColor:'#0f0f0f',
        width:100,
        margin:10,
        height:50,
        textAlign:'center',
        borderRadius:10,
   },
   card:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-evenly',
    
   },
   title:{
    fontWeight:'800',
    fontSize:34,
  
    textAlign:'center',
   color:"#493d8a",
   marginTop:-30,

},
title1:{
    fontWeight:'800',
    fontSize:24,
    marginBottom:40,
    textAlign:'center',
   color:"#493d8a",

},
title2:{
    fontWeight:'800',
    fontSize:24,
    marginTop:20,
    textAlign:'center',
   color:"#493d8a",

},
pay:{
    borderColor:"#493d8a",
    borderRadius:10,
    borderWidth:3,
    width:300,
    height:40,
    backgroundColor:"#493d8a",
    marginLeft:30,
    
},
text:{
    color:'white',
    fontSize:20,
    textAlign:'center',
    marginTop:5,
    fontWeight:'800',
},
payimage:{
display:'flex',
flexDirection:'row',
justifyContent:'space-evenly'
},
image1:{
    width:100,
    height:60,
    marginTop:15,
    marginLeft:10,
    zIndex:1,
    resizeMode:'contain',
    
}

})