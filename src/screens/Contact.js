import { Image, ScrollView, StyleSheet,Text,View } from 'react-native'
import React from 'react'
import Navbar from '../components/Navbar';
import Headers from '../components/Header';
import {contain1, content, content2 } from '../constant/AboutCont';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Contact1, contact1 } from '../constant/ContactConst';

const Contact = () => {
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
          <Text style={styles.navHeader}>Contact us</Text>
          <Text style={{fontSize:20,margin:5}}>HEAD OFFICE</Text>
          <Text style={{marginLeft:10}}>1st Floor, Office 4 & 6 ,Opp. Indra Bal Vihar,SSP Banglow Road,Golghar,Gorakhpur ,Uttar Pradesh - 273001,INDIA
         </Text>
          <Text style={{fontSize:20,margin:5}}>CANADA BRANCH OFFICE</Text>
         <Text style={{marginLeft:10}}> Canada Branch Office Burlington,Ontario ,Canada - L5A 3R6</Text>
          <Text style={{fontSize:20,margin:5}}>USA BRANCH OFFICE</Text>
          <Text style={{marginLeft:10}}> 
          USA Branch Office
1431 Opus Pl,
Downers Grove,
IL-60515
          </Text>
          <Text style={{fontSize:20,margin:5}}>
          NEPAL BRANCH OFFICE
          </Text>
          <Text style={{marginLeft:10}}>Delta Communication Pvt.Ltd.
Shop No - 21, Tamrakar Complex,
Pako, New Road,
Kathmandu,
NEPAL</Text>
     <Text style={{fontSize:20,margin:5}}>DEORIA BRANCH OFFICE</Text>
     <Text style={{marginLeft:10}}>Crazy Computers,
Surati Hata Road,
Deoria
</Text>
<Text style={{fontSize:20,margin:5}}>VOICE CONTACTS</Text>
<Text style={{marginLeft:10}}>+91 - 9415693900
+91 - 8853130822
</Text>
<Text style={{fontSize:20,margin:5}}>EMAIL ADDRESS</Text>
<Text style={{marginLeft:10}}>admin@ilakshya.in
office@ilakshya.in</Text>
          <View>
            
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

export default Contact;