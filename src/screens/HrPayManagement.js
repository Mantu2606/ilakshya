import { Image, ScrollView, StyleSheet,Text,View } from 'react-native'
import React from 'react'
import Navbar from '../components/Navbar';
import Headers from '../components/Header';
import {content, content2 } from '../constant/AboutCont';
import { SafeAreaView } from 'react-native-safe-area-context';

const HrPayManagement = () => {
    return(
      <SafeAreaView>
        <ScrollView>
         <View style={styles.navcontainer}>
          <Headers />
          <Navbar />
         
           <Image
            source = {require("../../assets/About.jpg")}
            logo = {styles.logo}
           />
          <Text style={styles.navHeader}>About Us</Text>
          <Text>{content}</Text>
          <Text style={styles.textType}>PRESENT ACTIVITIES</Text>
          <Text>{content2}</Text>
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
  logo:{
    height:100,
    width:200,
 },
  navHeader:{ 
     fontSize:40,
     color:"blue",
     textAlign:"left",
     marginTop:10,
  },
  textType:{
    fontSize:25,
    marginTop:20,
   
  }
}
);

export default HrPayManagement;