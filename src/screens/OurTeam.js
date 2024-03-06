import React from 'react'
import { Image, ScrollView,StyleSheet,Text, View } from 'react-native'
import Navbar from '../components/Navbar'
import Headers from '../components/Header'
import { SafeAreaView } from 'react-native-safe-area-context'
import { contain1 } from '../constant/AboutCont'

function OutTeam() {
  return (
    <SafeAreaView>
      <ScrollView>
    <View style={style.navcontainer}> 
    <Headers />
    <Navbar />
      <Image 
       source = {require("../../assets/ourteam.jpg")} 
       logo = {style.logo}
      />
      <Text style={{fontSize:50,color:"#FFFFFF",backgroundColor:"#4b5320"}}>Our Team</Text>
      <Text style={{margin:7}}>{contain1}</Text>
      <Text style={{fontSize:20,color:"#1F2544"}}>Account Manager</Text>
      <Text style={{margin:7}}>Responsible for managing clients account and customer relations</Text>
      <Text style={{fontSize:20,color:"#1F2544"}}>Project Manager</Text>
      <Text style={{margin:7}}>Responsible for managing the projects tasks,timelines and budgets.</Text>
      <Text style={{fontSize:20,color:"#1F2544"}}>Web Architecture</Text>
      <Text style={{margin:7}}>Responsible for creating the architecture ,design templates and proto types.</Text>
      <Text style={{fontSize:20,color:"#1F2544"}}>Web Developer</Text>
      <Text style={{margin:7}}>Responsible for implementing the creative,programming the systems and web applications.</Text>
      <Text style={{fontSize:20,color:"#1F2544",margin:7}}>Quality Control</Text>
      <Text>
      Responsible for website quality control,unit testing and project release tasks.
      
      If the project requires content management system solutions or site globalization deployment,ilakshya will assign an application analyst to assist in the site architecture and planning stages throughout the project.
      </Text>
    </View>
    </ScrollView> 
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  navcontainer:{
    alignItems: 'centers',
    justifyContent: 'left',
    height:"100%", // Adjust the height as per your requirement
    borderBottomWidth: 1,
    backgroundColor:"#FFFDD0"
  },
  image:{
    height:300,
    width:300,
  }
})

export default OutTeam
