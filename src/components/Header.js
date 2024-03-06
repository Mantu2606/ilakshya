import { StyleSheet, SafeAreaView, ScrollView, Image, Text, View } from 'react-native'
import React from 'react'

const Headers = () => {
    return (
        <View style={styles.header} >
            <Image
                source={require("../../assets/ilakshyalogo.jpg")}
                style={styles.logo}
                resizeMode='contain'
            />
        </View>
    )
}
const styles = StyleSheet.create({
    header: { // light cream , militry green  
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 100, // Adjust the height as per your requirement
        backgroundColor: '#FFFDD0', // light cream  
        borderBottomWidth: 1,
        borderBottomColor: '#ccc', // Adjust border color as per your design
    },
    logo: {
        width: 220, // Adjust the width of the logo as per your requirement
        height: 500, // Adjust the height of the logo as per your requirement
    },
});

export default Headers