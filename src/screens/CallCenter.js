import { Image, ScrollView, StyleSheet,Text,View } from 'react-native'
import React from 'react'
import Navbar from '../components/Navbar';
import Headers from '../components/Header';

import { SafeAreaView } from 'react-native-safe-area-context';
import { call1, call2 } from '../constant/CallCen';

const CallCenter = () => {
    return(
      <SafeAreaView>
        <ScrollView>
         <View style={styles.navcontainer}>
          <Headers />
          <Navbar />
       
           <Image
            source = {require("../../assets/call.jpg")}
            logo = {styles.logo}
           />
          <Text style={styles.navHeader}>Call Center Services</Text>
          <Text>{call1}</Text>
          <View>
            {
             call2.map((item) => (
                <View>
                <Text style={{fontSize:18,color:"black",margin:5}}>{item.title}</Text>
                <Text style={{margin:10}}>{item.description}</Text>
                </View>
             )
             )
            }
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
    backgroundColor:"#FFFDD0"
  },
  logo:{
    width:"100%" ,
    height:"`100%",
    aspectRatio:1,
 },
  navHeader:{ 
     fontSize:40,
     color:"#FFFFFF",
     textAlign:"left",
     marginTop:10,
     backgroundColor:"#4b5320"
  },
  textType:{
    fontSize:25,
    marginTop:20,
   
  }
}
);

export default CallCenter;