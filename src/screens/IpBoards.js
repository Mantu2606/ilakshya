import { Image, ScrollView, StyleSheet,Text,View } from 'react-native'
import React from 'react'
import Navbar from '../components/Navbar';
import Headers from '../components/Header';
import { ipboard1, ipboard2, ipboard3, ipboard4, ipbord } from '../constant/AboutCont';
import { SafeAreaView } from 'react-native-safe-area-context';

const IpBoards = () => {
    return(
      <SafeAreaView>
        <ScrollView>
         <View style={styles.navcontainer}>
          <Headers />
          <Navbar />
           <Image
            source = {require("../../assets/ipboard.jpg")}
            logo = {styles.logo}
           />
          <Text style={styles.navHeader}>IP Boards</Text>
          <Text style={{marginTop:10}}>{ipbord}</Text>
          <Text style={{fontSize:21, color:"#FFFFFF",backgroundColor:"#4b5320"}}>Providing solutions at your School</Text>
          <Text style={{marginTop:5}}>{ipboard1}</Text>
          <Text style={{fontSize:19, color:"#FFFFFF",
     backgroundColor:"#4b5320",marginTop:5}}>Functioning of iLakshya Classroom</Text>
          <Text style={{marginTop:5}}>{ipboard2}</Text>
          <Text style={{fontSize:18, color:"#FFFFFF",
     backgroundColor:"#4b5320",marginTop:10}}>Enabled syllabus specific course Content - Digitaliy</Text>
          <Text>{ipboard3}</Text>
          <Text style={{fontSize:18, color:"#FFFFFF",
     backgroundColor:"#4b5320",marginTop:5}}>Benefits of the Program</Text> 
          <Text>{ipboard4}</Text>
         </View>
         </ScrollView> 
         </SafeAreaView>
  )
};
const styles = StyleSheet.create({
  navcontainer:{
    alignItems: 'centers',
    justifyContent: 'left',
    height: "500", // Adjust the height as per your requirement
    borderBottomWidth: 1,
    backgroundColor:"#FFFDD0"
  },
  logo:{
    height:100,
    width:200,
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

export default IpBoards;