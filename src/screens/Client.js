import { Image, ScrollView, StyleSheet,Text,TouchableOpacity,View } from 'react-native'
import React from 'react'
import Navbar from '../components/Navbar';
import Headers from '../components/Header';
import {content, content2 } from '../constant/AboutCont';
import { SafeAreaView } from 'react-native-safe-area-context';
import { clint } from '../constant/ClientRow';
import { useNavigation, useRoute } from '@react-navigation/native';

import AutomobilesClient from '../ClientScreen/AutomobilesClient';

const Client = () => {
  const router = useRoute(); 
  const nav = useNavigation(); 
  const gotoPage = (item) => {
    nav.navigate(item); 
  }; 
    return(
      <SafeAreaView>
        <ScrollView>
         <View style={styles.navcontainer}>
          <Headers />
          <Navbar />
         
           <Image
            source = {require("../../assets/clients.jpg")}
            logo = {styles.logo}
           />
           
          <Text style={styles.navHeader}>Clientele</Text>
          
       <View style={styles.container}>
       <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <AutomobilesClient />
        </ScrollView>
           </View>
          </View>
        </ScrollView> 
        </SafeAreaView>
  )
}
const styles = StyleSheet.create({

  navcontainer:{
    alignItems: 'centers',
    justifyContent: 'left',
    height: "500", // Adjust the height as per your requirement
    borderBottomWidth: 1,
  },
  container: {
    height: 70, // Adjust as needed
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    
  },
  button: {
    backgroundColor: 'blue', // Example background color
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
   
    marginHorizontal: 5,
  },

  container: {
    flex: 1,
    flexDirection: 'row', // Ensures items are laid out horizontally
  },
  logo:{
    height:100,
    width:200,
 },
  navHeader:{ 
     fontSize:40,
     textAlign:"left",
     marginTop:10,
     color:"#FFFFFF",
     backgroundColor:"#4b5320"
  },
  
  textType:{
    fontSize:10,
    marginTop:20,
   
  },
  
}
);

export default Client;