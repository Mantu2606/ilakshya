import { StyleSheet,Image, Text, View } from 'react-native'
import React from 'react'

const Bottom = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.textstyle}>A       DRIVING FORCE     IN YOUR    BUSINESS</Text>
      <Image 
         source = {require("../../assets/whatweoffer.jpg")}
         style = {styles.logo} 
         resizeMode='contain'
      />
      <Text style={{fontSize:40,backgroundColor:"#4b5320",
        color:"#FFFFFF"}}>Welcome !</Text>
      <Text style={{color:"green",fontSize:20}}>OUR COMPANY GIVES YOU AN ACCESS TO THE WORLD OF IDEAL SOLUTIONS, REAL PROFESSIONALS, AND UNIQUE POSSIBILITIES.   </Text>

      <Text style={{textAlign:"center",marginHorizontal:15}}>We at iLakshya Total Solution occupy a unique place in the dynamic, rapidly growing world computerised solution. We are the Largest user and supplier of proximity card in east Uttar Pradesh for more than 06 years. iLakshya Was founded in 2006. Over the years, the promoter Directors have been involved in various business such as call centre services, attendance manangement systems, office automation, OMR and Camera Provider, school management, HR & Payroll management and website development.  </Text>
     
    </View>
  )
}
const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFDD0', // Adjust background color as per your design
        borderBottomWidth: 1,
        borderBottomColor: '#ccc', // Adjust border color as per your design
    },
    textstyle:{
        fontSize:55,
        marginTop:30,
        backgroundColor:"#4b5320",
        color:"#FFFFFF"

    },
     logo:{
       height:300,
       width:500
     },
    textit :{
        fontSize:40,
        textAlign:"left"
    },
    textMid:{
        textAlign:"center",
        fontSize:30,
        color:"red"
    }
})
export default Bottom
