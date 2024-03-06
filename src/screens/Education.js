import { FlatList, Image, ScrollView, StyleSheet,Text,View } from 'react-native'
import React from 'react'
import Navbar from '../components/Navbar';
import Headers from '../components/Header';
import {conten, ecu1 } from '../constant/AboutCont';
import { SafeAreaView } from 'react-native-safe-area-context';
import { EduService } from '../constant/EduService';

const Eduaction = () => {
    return(
      <SafeAreaView>
        <ScrollView>
         <View style={styles.navcontainer}>
          <Headers />
          <Navbar />
           <View>
           <Image
            source = {require("../../assets/education.jpg")}
            logo = {styles.logo}
            resizeMode="contain"
           />
           </View>
          <Text style={styles.navHeader}>Education Services</Text>
          <Text>{ecu1}</Text>
           <View style={{height:"100%",borderBottomWidth:1,margin:20}}>
             {
             EduService.map((item,index) => (
              <View key={item.ID} style={styles.courseContainer}>
                <View>
                  <Image 
                     source={item.image}
                     style={styles.cardImage}
                     resizeMode="contain"
                     />
                     <View>
                <Text style={styles.titt}>{item.title}</Text>
                <Text style={styles.des}>{item.description}</Text>
               </View>
               </View>
               </View>
             )
             )}
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
    height: "100%", // Adjust the height as per your requirement
    borderBottomWidth: 1,
    backgroundColor:"#FFFDD0"
  },
  logo:{
    width:"100%" ,
    height:undefined,
    aspectRatio:1
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
  },
  titt:{
    fontSize:18,
    padding:3,
    backgroundColor:"pink"
  },
  img:{
     height:100,
     width:200
  },
  des:{
    
  }
  
}
);

export default Eduaction;