import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Navbar from '../components/Navbar';
import Headers from '../components/Header';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Hospita2, Hospital1 } from '../constant/AboutCont';
import { IndustSe3 } from '../constant/IndusServ';
import { media1 } from '../constant/MediaCons';
import { new1, new2, new3 } from '../constant/NewsConst';

const Hospital = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.navcontainer}>
                    <Headers />
                    <Navbar />
                    <View style={styles.container}>
                        <Image
                            source={require("../../assets/hospital.jpg")}
                            logo={styles.logo}
                            resizeMode="contain"
                        />
                    </View>
                    <Text style={{fontSize:38,marginTop:5,backgroundColor:"#4b5320",color:"#FFFFFF"}}>iLakshya in Media</Text>
                    <Text style={{ fontSize: 20,margin:4,color:"black"  }}>{new1}</Text>
                    <Text>{new2}</Text>
                    <View style={{margin:10,flex:1}}>
                        {
                            new3.map((item, index) => (
                                <View key={item.ID} style={styles.courseContainer}>
                                   <Text style={styles.mainHeader}>{item.title}</Text>
                                   <View>
                                    <Image
                                        source={item.image}
                                        style={styles.cardImage}
                                        resizeMode="contain"
                                    />
                                    </View>
                                        <Text style={styles.description}>{item.description}</Text>
                                    </View>
                               
                            ))}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    cardImage:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        width:320,
        height:undefined,
        aspectRatio:1,
        
      },
      courseContainer:{
        
        backgroundColor:"rgba(255,255,255,0.90)",
        textAlign:'center',
        borderRadius:5,
        shadowColor:"grey",
        shadowOffset:{width:0, height:0} ,
        shadowOpacity:0.5,
        shadowRadius:8,
        elevation:5,
        margin:10,
      },
      mainHeader:{
        fontSize:15,
        color:"#FFFFFF",
        backgroundColor:"#4b5320",
        textTransform:'uppercase',
        fontSize:20,
        height:40,
      
      },
     
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5, // Margin between the two text lines
    },
    navcontainer: {
        alignItems: 'centers',
        justifyContent: 'left',
        height: "100%", // Adjust the height as per your requirement
        borderBottomWidth: 1,
        backgroundColor:"#FFFDD0"
    },
    container: {
       alignItems: 'center',
        backgroundColor: '#ffffff',
        backgroundColor:"##FFFDD0"
    },
    logo: {
        width: 100,
        height: 50,
        margin: 10,
    },

    textType: {
        fontSize: 25,
        marginTop: 20
    }
}
);

export default Hospital;