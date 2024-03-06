import { Image, ScrollView, StyleSheet,Text,View } from 'react-native'
import React from 'react'
import Navbar from '../components/Navbar';
import Headers from '../components/Header';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Hospita2, Hospital1 } from '../constant/AboutCont';
import { IndustSe3 } from '../constant/IndusServ';

const Hospital = () => {
    return(
      <SafeAreaView>
        <ScrollView>
         <View style={styles.navcontainer}>
          <Headers />
          <Navbar />
           <View style={styles.container}>
           <Image
            source = {require("../../assets/hospital.jpg")}
            logo = {styles.image}
            resizeMode="contain"
           />
           </View>
          <Text style={styles.navHeader}>Hospital Services</Text>
          <Text>{Hospital1}</Text>   
          <Text style={{fontSize:19,color:"black",marginTop:10,backgroundColor:"#176B87"}}>BENEFITS FOR HOSPITALS</Text> 
          <Text style={{marginLeft:19}}>{Hospita2}</Text>
          <Text style={{fontSize:18,color:"black",backgroundColor:"#747264"}}>OUR SERVICES FOR HOSPITALS</Text>
          
          <View style={{height:"100%",borderBottomWidth:1,margin:20}}>
          {
            IndustSe3.map((item,index) => (
              <View key={item.ID} style={styles.courseContainer}>
              <View>
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
     borderBottomWidth: 1,
     backgroundColor:"#4b5320"
  },
  textType:{
    fontSize:25,
    marginTop:20,
   
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

export default Hospital;