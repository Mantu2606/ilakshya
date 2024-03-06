import { Image, ScrollView, StyleSheet,Text,View } from 'react-native'
import React from 'react'
import Navbar from '../components/Navbar';
import Headers from '../components/Header';
import {stgth1, stgth2, stgth3, stgth4, stgth5, stgth6 } from '../constant/AboutCont';
import { SafeAreaView } from 'react-native-safe-area-context';

const OurStrength = () => {
    return(
      <SafeAreaView>
        <ScrollView>
         <View style={styles.navcontainer}>
          <Headers />
          <Navbar />
           <Image
            source = {require("../../assets/hospital.jpg")}
            logo = {styles.logo}
           />
          <Text style={styles.navHeader}>Our Strength</Text>
          <Text style={{fontSize:25,marginTop:20,color:"black",fontWeight:"bold"}}>MISSION</Text>
          <Text style={{fontSize:15,margin:7}}>{stgth1}</Text>
          <Text style={{fontSize:25,marginTop:20,color:"black",fontWeight:"bold"}}>VISION</Text>
          <Text style={{fontSize:15,margin:7}}>{stgth2}</Text>
          <Text style={{fontSize:25,marginTop:20,color:"black",fontWeight:"bold"}}>OBJECTIVE</Text>
          <Text style={{fontSize:15,margin:7}}>{stgth3}</Text>
          <Text style={{fontSize:25,marginTop:20,color:"black",fontWeight:"bold"}}>BUSINESS OUTLOOK</Text>
          <Text style={{fontSize:15,margin:7}}>{stgth4}</Text>
          <Text style={{fontSize:25,marginTop:20,color:"black",fontWeight:"bold"}}>STRATEGY</Text>
          <Text style={{fontSize:15,margin:7}}>{stgth5}</Text>
           <Text style={{fontSize:25,marginTop:20,color:"black",fontWeight:"bold"}}>LONG TERM</Text>
          <Text style={{fontSize:15,margin:7}}>{stgth6}</Text>
          </View>
        </ScrollView> 
        </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  navcontainer:{
    alignItems: 'centers',
    justifyContent: 'left',
    height: "100%", // Adjust the height as per your requirement
    borderBottomWidth: 1,
    backgroundColor:"#FFFDD0"
  },
  logo:{
    alignItems:"center",
    height:100,
    width:200,
 },
  navHeader:{ 
     fontSize:40,
     color:"#FFFFFF",
     textAlign:"left",
     marginTop:10,
     backgroundColor:"#4b5320"
  },
  st1:{
    
  }
}
);

export default OurStrength;