import { Image, ScrollView, StyleSheet,Text,View } from 'react-native'
import React from 'react'
import Navbar from '../components/Navbar';
import Headers from '../components/Header';
import {content, content2 } from '../constant/AboutCont';
import { SafeAreaView } from 'react-native-safe-area-context';

import { IndustSe3, IndustSer1, IndustSer2 } from '../constant/IndusServ';

const IndustServ = () => {
    return(
      <SafeAreaView>
        <ScrollView>
         <View style={styles.navcontainer}>
          <Headers />
          <Navbar />
       
           <Image
            source = {require("../../assets/indstr/industries.jpg")}
            logo = {styles.logo}
           />
      
          <Text style={styles.navHeader}>Industries Services</Text>
          <Text style={{margin:7}}>{IndustSer1}</Text>
          <Text style={{fontSize:27,color:"black",backgroundColor:"#638889"}}>BENEFITS FOR INDUSTRIES</Text>
          <Text>{IndustSer2}</Text>
          <Text style={{fontSize:20,color:"black",backgroundColor:"#0D9276"}}>OUR OFFERS FOR INDUSTRIES</Text>
          <View style={{height:"100%",borderBottomWidth:1,margin:20}}>
          {
            IndustSe3.map((item,index) => (
                <View key={item.ID} style={styles.courseContainer}>
                <View >
                  <Image 
                     source={item.image}
                     style={styles.cardImage}
                     resizeMode="contain"
                     />
                     </View>
                     <View>
                <Text style={{fontSize:18,padding:3,backgroundColor:"pink"}}>{item.title}</Text>
                <Text>{item.description}</Text>
           </View>
           </View>
            ))}
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
    // Adjust the height as per your requirement
    borderBottomWidth: 1,
    backgroundColor:"#FFFDD0"
  },
  logo:{
    width:"100%" ,
    height:"`100%",
    aspectRatio:1,
 },
   navHeader:{
    fontSize:35,
    color:"#FFFFFF",
    backgroundColor:"#4b5320",
   },
  textType:{
    fontSize:25,
  },
  courseContainer:{
    height:290,
    width:"100%",
    margin:10,
    
  },
  cardImage:{
    width:"100%",
    height:200
  }
}
);

export default IndustServ;