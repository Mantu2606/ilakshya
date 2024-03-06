import { Image, ScrollView, StyleSheet,Text,View } from 'react-native'
import React from 'react'
import Navbar from '../components/Navbar';
import Headers from '../components/Header';
import { request } from '../constant/AboutCont';
import { SafeAreaView } from 'react-native-safe-area-context';

const RequestQuoate = () => {
    return(
      <SafeAreaView>
        <ScrollView>
         <View style={styles.navcontainer}>
          <Headers />
          <Navbar />
          <View style = {styles.container}>
           <Image
            source = {require("../../assets/requestquote.jpg")}
            logo = {styles.image}
            resizeMode="contain" 
           />
           </View>
          <Text style={styles.navHeader}>Request a Quoate</Text>
          
          <Text style={styles.textType}>{request}</Text>
         
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
     color:"#FFFFFF",
     textAlign:"left",
     marginTop:10,
     backgroundColor:"#4b5320"
  },
  textType:{
    fontSize:15,
    margin:15
   
  }
}
);

export default RequestQuoate;