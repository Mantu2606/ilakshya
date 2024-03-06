import { Image, ScrollView, StyleSheet,Text,View } from 'react-native'
import React from 'react'
import Navbar from '../components/Navbar';
import Headers from '../components/Header';
import {content, content2, soft, soft1, soft2, soft3, soft4, soft5, soft6, soft7, soft8 } from '../constant/AboutCont';
import { SafeAreaView } from 'react-native-safe-area-context';

const Software = () => {
    return(
      <SafeAreaView>
        <ScrollView>
         <View style={styles.navcontainer}>
          <Headers />
          <Navbar />
           <View style={styles.container}>
           <Image
            source = {require("../../assets/software.jpg")}
            logo = {styles.image}
            resizeMode="contain" 
           />
           </View>
          <Text style={styles.navHeader}>Software Solutions</Text>
          <Text style={{margin:5}}>{soft}</Text>
          <Text style={{fontSize:15, color:"#FFFFFF",backgroundColor:"#4b5320"}}>Give your business an Edge with picture perfect solutions.</Text>
          <Text style={{margin:10}}>{soft1}</Text>
          <Text style={{fontSize:25, color:"#FFFFFF",
     backgroundColor:"#4b5320"}}>SPECIALIZATION</Text>
          <Text style={{margin:10}}>{soft2}</Text>  
          <Text style={{fontSize:20, color:"#FFFFFF",
     backgroundColor:"#4b5320"}}>ERP PACKAGE</Text>
          <Text style={{margin:10}}>{soft3}</Text>
          <Text style={{fontSize:23, color:"#FFFFFF",
     backgroundColor:"#4b5320"}}>FINANCIAL ACCOUNTING</Text>
          <Text style={{margin:10}}>{soft4}</Text>
          <Text style={{fontSize:20, color:"#FFFFFF",
     backgroundColor:"#4b5320"}}>INVENTORY MANAGEMENT SYSTEM</Text>
          <Text style={{margin:10}}>{soft5}</Text>   
          <Text style={{fontSize:20, color:"#FFFFFF",
     backgroundColor:"#4b5320"}}>SALES MANAGEMENT SYSTEM</Text>
           <Text style={{margin:10}}>{soft6}</Text>
           <Text style={{fontSize:20, color:"#FFFFFF",
     backgroundColor:"#4b5320"}}>JOB MANAGEMENT SYSTEM</Text>
           <Text style={{margin:10}}>{soft7}</Text>
           <Text style={{fontSize:20, color:"#FFFFFF",
     backgroundColor:"#4b5320"}}>TECHNOLOGIES SPECILAZATION</Text>
           <Text style={{margin:10}}>{soft8}</Text>
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
    width: 200, // Specify the width of the image
    height: 200, // Specify the height of the image
  },
  navHeader:{ 
     fontSize:40,
     textAlign:"left",
     marginTop:10,
     borderBottomWidth: 1,
     color:"#FFFFFF",
     backgroundColor:"#4b5320"
  },
  textType:{
    fontSize:25,
    marginTop:20,
   
  }
}
);

export default Software;