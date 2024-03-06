import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { navitems } from '../constant/data';
import { useNavigation, useRoute } from '@react-navigation/native';
//About
const NavbarItems = () => {
    const router = useRoute();
    const nav = useNavigation();
    const gotoPage = (item) => {
        nav.navigate(item);
    };
    return (
        <> 
            {navitems.map((item, index) => (
                <TouchableOpacity onPress={() => gotoPage(item.ScreenName)} key={index}>
                    <View style={styles.navcontainer} >
                        <Text style={[styles.navHeader, { backgroundColor: item.color, color: "white" }]}>{item.Name}</Text>
                    </View>
                </TouchableOpacity>
            ))}
        </>
    )
}

const styles = StyleSheet.create({
    navcontainer: {
        alignItems: 'left',
        justifyContent: 'left',
        height: 40, // Adjust the height as per your requirement
        backgroundColor: '#000000', // Adjust background color as per your design
        borderBottomWidth: 1,
        borderBottomColor: '#ccc', // Adjust border color as per your design

    },
    navHeader: {
        color: "#fff",
        textAlign: "left",
        verticalAlign: "middle",
        fontSize: 22,
        marginTop: 4
    }
});

export default NavbarItems