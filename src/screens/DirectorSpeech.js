import React from 'react'
import { View,Text, ScrollView, Image, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Headers from '../components/Header'
import Navbar from '../components/Navbar'
import { doctor } from '../constant/AboutCont'

function DirectorSpeech() {
  return (
    <SafeAreaView>
    <ScrollView>
       <View style={styles.navCont}>
        <Headers />
        <Navbar />
         <Image 
          source={require("../../assets/direct.jpg")}
         style={styles.logo}
         />
         <Text style={styles.navHeader}>Director's Speech</Text>
         <Text style={{marginTop:10,textAlign:"center",marginBottom:20}}>{doctor}</Text>
    </View>
    </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    navCont:{
        alignContent:"center",
        height:"100%",
        width:"100%",
        justifyContent:"center",
        borderBottomWidth:2,
        backgroundColor:"#FFFDD0"
    },
    logo:{
      height:250,
      width:400,
      alignItems:"center"
    },
      navHeader:{ 
        fontSize:40,
        color:"white",
        textAlign:"left",
        backgroundColor:"#4b5320" // Green 
     }
})
export default DirectorSpeech
