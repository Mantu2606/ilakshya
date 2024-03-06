import React from 'react'
import { View,Text,StyleSheet,Image,SafeAreaView,ScrollView} from 'react-native'
import Headers from '../components/Header';
import Navbar from '../components/Navbar';
import { Success1, Success2 } from '../constant/AboutCont';

function OurScreen() {
  return (
        <SafeAreaView>
          <ScrollView>
           <View style={styles.navcontainer}>
            <Headers />
            <Navbar />
            <View style={styles.container}>
             <Image
              source = {require("../../assets/OurSuccessStory.jpg")}
              logo = {styles.logo} 
              />
              </View>
            <Text style={styles.navHeader}>Our Success Story</Text>
            <Text style={styles.conten1}>{Success1}</Text>
            <Text style={styles.cont2}>{Success2}</Text>
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
      height:100,
      width:200,
   },
    navHeader:{ 
       fontSize:40,
       color:"white",
       textAlign:"left",
      
       backgroundColor:"#B67352"
    },
    textType:{
      fontSize:25,
      marginTop:20,
    },
    conten1:{
      textAlign:"center"
    },
    cont2:{
        textAlign:"center",
        color:"blue",
        marginBottom:20
    }
  }
  );
export default OurScreen
