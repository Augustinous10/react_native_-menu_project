import * as React from 'react';
import { View, Text,TextInput, StyleSheet, TouchableOpacity, SafeAreaView, Image,ImageBackground, Keyboard } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import image from "../../assets/image.png";
import Home from "../../assets/Home.jpg";


export default function HomeScreen() {
    const navigation=useNavigation();
    return (
        <SafeAreaView style={{flex:1,backgroundColor:'white',zIndex:1}}>
          
        <Image source={image} style={styles.logo}/>
        

            <View>
                <Text style={styles.welcome}>Welcome to Our Menu system , Make your choice </Text>
                <Text style={styles.fine}>"Refresh your life!!" </Text>
            </View> 
            {/* <View style={styles.searchContainer}>
                <TextInput placeholder=" Make Search on our Menu!!" style={styles.textinput}/>
                <FontAwesome5  name="search" size={28} color="#12bbc7" style={styles.search} onPress={()=>Keyboard.dismiss} />
        </View> */}


        {/* <View style={styles.box}>
        
            <View>
            <Text style={{textAlign:'center',fontSize:20,fontWeight:'bold',marginBottom:20,}}>Working Hours</Text>
            </View>
            <Text style={{textAlign:'center',fontSize:20,fontWeight:'bold'}}>Monday-Saturday!</Text>
            <Text style={{textAlign:'center',fontSize:20,fontWeight:'bold',marginBottom:20}}>8:00-22:00</Text>
            <Text style={{textAlign:'center',fontSize:20,fontWeight:'bold'}}>Sunday!</Text>
            <Text style={{textAlign:'center',fontSize:20,fontWeight:'bold'}}>10:00-20:00</Text>
            <ImageBackground source={image} resizeMode="contain"/>




        </View>
        */}
        <View style={styles.box}>

        <Image source={Home} style={styles.Home}/>


        </View>
        </SafeAreaView>
    );
}
const styles=StyleSheet.create({
textinput:{
borderWidth:1,
borderColor:'#12bbc7',
fontSize: 18,
 fontWeight: 'bold',
 borderRadius:50,
 width:300,
 textAlign:'center',
 height:50,
 zIndex:1
},
welcome:{
    fontSize:28,fontWeight:'bold',
    marginLeft:20,
    marginTop:20,
    textAlign:'center',
    position:"absolute"
},
fine:{
    fontSize:20,
    marginLeft:90,
    marginTop:120,
    textAlign:'center',
    position:"absolute"
},
box1:{
position:'absolute',
width:300,
flex:1,
height:180,
bottom:170,
borderColor:'050505',
borderWidth:2,
marginLeft:50,
borderRadius:10,
backgroundColor:'lightgrey',
shadowOffset: {width: -6, height: 8},  
       shadowColor: '#171717',  
       shadowOpacity: 0.2,  
       shadowRadius: 3,
       alignItems:'center',
},
text:{
    textAlign:'center',
},
Home:{
    width:350,
    height:350,
    marginLeft:4.5,
  marginRight:50,
  borderRadius:30,
  
  marginTop:150,
 
},
logo:{
    width:100,
    height:100,
    marginTop:15,
    marginLeft:10,
    zIndex:1,
    
}

})