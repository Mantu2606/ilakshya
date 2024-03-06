import { Image, ScrollView, StyleSheet,Text,View } from 'react-native'
import React from 'react'
import Navbar from '../components/Navbar';
import Headers from '../components/Header';
import {barcode, content, content2 } from '../constant/AboutCont';
import { SafeAreaView } from 'react-native-safe-area-context';

const BarcodeRead = () => {
    return(
      <SafeAreaView>
        <ScrollView>
         <View style={styles.navcontainer}>
          <Headers />
          <Navbar />
         
           <Image
            source = {require("../../assets/barcode.jpg")}
            logo = {styles.logo}
           />
          <Text style={styles.navHeader}>Bar Code Reader</Text>
          <Text style={{margin:10}}>{barcode}</Text>
          
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
    backgroundColor:"#FFFDD0"
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
    fontSize:25,
    marginTop:20,
  }
}
);
export default BarcodeRead;