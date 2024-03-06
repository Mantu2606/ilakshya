import { Image, ScrollView, StyleSheet,Text,View } from 'react-native'
import React from 'react'
import Navbar from '../components/Navbar';
import Headers from '../components/Header';
import {attan1, attan2, attan3, attan4, attan5, content, content2 } from '../constant/AboutCont';
import { SafeAreaView } from 'react-native-safe-area-context';

const Attendance = () => {
    return(
      <SafeAreaView>
        <ScrollView>
         <View style={styles.navcontainer}>
          <Headers />
          <Navbar />
         
           <Image
            source = {require("../../assets/attendance.jpg")}
            logo = {styles.logo}
           />
          <Text style={styles.navHeader}>Attendance Machines</Text>
          <Text style={{margin:10}}>{attan1}</Text>
          <Text style={{fontSize:30,color:"white",backgroundColor:"#4b5320"}}>SPECIAL FEATURES</Text>
          <Text style={{fontSize:20,margin:10}}>Biometric Finger Print Verification</Text>
          <Text style={{margin:10,backgroundColor:"#FFFDD0"}}>{attan2}</Text>
          <Text style={{fontSize:15,color:"#363062"}}>LAN/WAN with TCP/IP Protocol</Text>
          <Text style={{margin:10,backgroundColor:"#FFFDD0"}}>{attan3}</Text>
          <Text style={{fontSize:15,color:"black"}}>Types Of Reports</Text>
          <Text style={{margin:10,backgroundColor:"#FFFDD0"}}>{attan4}</Text>
          <Text style={{fontSize:15,color:"black"}}>Most of Other features</Text>
          <Text style={{margin:10}}>{attan5}</Text>
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
     backgroundColor:"#4b5320",
     color:"#FFFFFF",
  },
  textType:{
    fontSize:25,
    marginTop:20,
    
  }
}
);

export default Attendance;