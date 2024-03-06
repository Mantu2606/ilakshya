import { Image, ScrollView, StyleSheet,Text,View } from 'react-native'
import React from 'react'
import Navbar from '../components/Navbar';
import Headers from '../components/Header';
import {content, content2, proximity1, proximity2 } from '../constant/AboutCont';
import { SafeAreaView } from 'react-native-safe-area-context';

const Proximity = () => {
    return(
      <SafeAreaView>
        <ScrollView>
         <View style={styles.navcontainer}>
          <Headers />
          <Navbar />
          <View style={styles.container}>
           <Image
            source = {require("../../assets/idcard.jpg")}
            logo = {styles.image}
            resizeMode="contain"
           />
           </View>
          <Text style={styles.navHeader}>Proximity Cards / Electronic Cards
</Text>
          <Text style={{margin:10}}>{proximity1}</Text>
          <Text style={styles.textType}>WHAT PROXIMITY CARDS ?</Text>
          <Text style={{margin:10}}>{proximity2}</Text>
          
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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:10
  },
  image: {
    width: 300, // Specify the width of the image
    height: 300, // Specify the height of the image
    
  },
  navHeader:{ 
     fontSize:40,
     backgroundColor:"#4b5320",
     color:"#FFFFFF",
     textAlign:"left",
     marginTop:10,
  },
  textType:{
    fontSize:25,
    marginTop:20,
    backgroundColor:"#4b5320",
     color:"#FFFFFF",
  }
}
);

export default Proximity;