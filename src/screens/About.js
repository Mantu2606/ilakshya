import { Image, ScrollView, StyleSheet,Text,View } from 'react-native'
import React from 'react'
import Navbar from '../components/Navbar';
import Headers from '../components/Header';
import {content, content2 } from '../constant/AboutCont';
import { SafeAreaView } from 'react-native-safe-area-context';

const About = () => {
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
    backgroundColor:"#FFFDD0"
  },
  logo:{
    width:"100%" ,
    height:"`100%",
    aspectRatio:1,
 },
  navHeader:{ 
     fontSize:40,
     color:"white",
     textAlign:"left",
     marginTop:10,
     backgroundColor:"#4b5320"
  },
  textType:{
    fontSize:25,
    marginTop:20,
    color:"#FFFFFF",
    backgroundColor:"#4b5320"
  }
}
);

export default About;