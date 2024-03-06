import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import NavbarItems from './NavbarItems';
import Icon from 'react-native-vector-icons/FontAwesome';

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => {
        setIsVisible(!isVisible);
      };
 
    return (
        <>
            <TouchableOpacity onPress={toggleVisibility} >
                <View style={styles.navcontainer}>
                    <Text style={styles.navHeader}>Menu</Text>
                    <Icon name="angle-down" size={30} color="#ffff"  />
                </View>
            </TouchableOpacity>
            { isVisible && (<NavbarItems  />)} 
        </>
    )
}

const styles = StyleSheet.create({
    navcontainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 40, // Adjust the height as per your requirement
        backgroundColor: '#4b5320', // Ad just background color as per your design
        borderBottomWidth: 1,
        borderBottomColor: '#ccc', // Adjust border color as per your design

    },
    navHeader: {
        color: "#fff",
        fontSize: 22,
    }
});

export default Navbar