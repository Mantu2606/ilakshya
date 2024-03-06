import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { LOWER } from '../constant/Feature'
import { useNavigation, useRoute } from '@react-navigation/native'

const LowerBottom = () => { // It is uses in 1-school management, Hr manage, atten etc 
   const router = useRoute(); 
   const nav = useNavigation(); 
   const gotoPage = (item) => {
      nav.navigate(item); 
   }; 
  return (
    <>
      <Text style={{ fontSize: 20, color: "black", marginTop: 10 }}>Feature Products</Text>
      {
        LOWER.map((item, index) =>  // iT is in Constant folder in Feature.js name files 
         (
          <TouchableOpacity onPress={() => gotoPage(item.ScreenName)} key={index} >
         <View style={styles.container}>
         <View style={styles.homecontainer} key = { item.Id } >
            <Text style={[styles.homeitems, { backgroundColor: item.Color, color: "white" }]}>{item.Name}</Text>
          </View>
          </View>
          </TouchableOpacity>
        ))
      }
    </>
  )
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // Arrange children horizontally
    alignItems: 'center', // Center align vertically
   // justifyContent: 'flex-start', // Align children to the start of the container
  
    backgroundColor: '#FFFDD0', // Adjust background color as per your design

    borderBottomColor: '#ccc', // Adjust border color as per your design
  },
  homecontainer: {
    textAlign: "center",
    justifyContent: "space-between",
    // Adjust the height as per your requiremen
    // marginLeft: 25,
    // marginRight: 25,
    borderBottomColor: '#ccc', // Adjust border color as per your desig
  },
  homeitems: {
    textAlign: "left",
    fontSize: 15,
    marginTop: 5,
    padding: 4,
    justifyContent: "center",
  }
})
export default LowerBottom