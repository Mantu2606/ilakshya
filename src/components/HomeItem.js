import { homeitems } from '../constant/HomeData'
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { navitems } from '../constant/data';
import { useNavigation, useRoute } from '@react-navigation/native';

const HomeItem = () => { // It is uses in 1-school management, Hr manage, atten etc 
    const router  = useRoute(); 
    const nav = useNavigation();
    const gotoPage = (item) => {
        nav.navigate(item);
    };
    return (
    <>
      {
        homeitems.map((item, index) =>
        ( 
          <TouchableOpacity onPress={() => gotoPage(item.ScreenName)} key={index}>
      
          <View style={styles.container}>
          <View style={styles.leftContent}>
             <Icon name={item.Icon} size={50} color="black" style={styles.image}  />
            <Text style={[styles.text, { color: "#FFFFFF" }]}>{item.Name}</Text>
          </View>
          
          {/* Other content in the right */}
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
    justifyContent: 'flex-start', // Align children to the start of the container
    padding: 10,
    backgroundColor:"#4b5320" , // Adjust background color as per your design
    borderBottomWidth: 1,
    borderBottomColor: '#ccc', // Adjust border color as per your design
  },
  leftContent: {
    flexDirection: 'row', // Arrange children horizontally
    alignItems: 'center', // Center align vertically
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
})
export default HomeItem
