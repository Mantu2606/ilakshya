import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView } from 'react-native';

const Websites = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getEmployee();
  }, []);

const getEmployee = async () => {
    axios.get('http://localhost:61038/api/getEmployees')
     
    .then(function (response) {
        // handle success
        setData(response.data); 
        // console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  };

  useEffect(() => {
    getEmployee();
  }, []);
 
  return (
    <View style={styles.container}>
      
      {data ? (
        <ScrollView horizontal={true} style={styles.scrollView}>
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.row}>
              <Text style={styles.cell}>{item.id}</Text>
              <Text style={styles.cell}>{item.name}</Text>
              <Text style={styles.cell}>{item.address}</Text>
              <Text style={styles.cell}>{item.email}</Text>
              <Text style={styles.cell}>{item.password}</Text>
              <Text style={styles.cell}>{item.Father_Name}</Text>
              <Text style={styles.cell}>{item.Mobile_No}</Text>
              <Text style={styles.cell}>{item.Pin_No}</Text>
              {/* Add more Text components for additional columns */}
            </View>
          )}
          ListHeaderComponent={() => (
            <View style={styles.table}>
            <View style={styles.header}>
           
              <Text style={styles.cell}>ID</Text>
              <Text style={styles.cell}>Name</Text>
              <Text style={styles.cell}>Address</Text>
              <Text style={styles.cell}>Email</Text>
              <Text style={styles.cell}>Password</Text>
              <Text style={styles.cell}>Father</Text>
              <Text style={styles.cell}>Mobile</Text>
              <Text style={styles.cell}>Pin</Text>
            </View>
            </View>
          )}
         
        />
      
        </ScrollView>
      ) : (
        <Text>No data available</Text>
      )}
    </View>
  );


};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"pink"
  },
  header: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: '#000',
    paddingVertical: 10,
  
  },
  headerText: {
    fontWeight: 'bold',
    marginRight: 5,
  },
  table: {
    flexDirection: 'column',
    width: '100%',
  },
  scrollView: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'pink',
    paddingVertical: 10,
  },
  cell: {
    flex:1,
    textAlign:"center"
  },
});
 // import { Image, ScrollView, StyleSheet,Text,View } from 'react-native'
// import React from 'react'
// import Navbar from '../components/Navbar';
// import Headers from '../components/Header';
// import { website, website1, website2, website3, website4, website5, website6 } from '../constant/AboutCont';
// import { SafeAreaView } from 'react-native-safe-area-context';

//const Websites = () => {
//     return(
//       <SafeAreaView>
//         <ScrollView>
//          <View style={styles.navcontainer}>
//           <Headers />
//           <Navbar />
//           <View style={styles.container}>
//            <Image
//             source = {require("../../assets/website.jpg")}
//             logo = {styles.image}
//             resizeMode="contain"
//            />
//            </View>
//           <Text style={styles.navHeader}>Websites Service</Text>
//           <Text style={{margin:20}}>{website}</Text>
//           <Text style={{fontSize:40 ,backgroundColor:"#4b5320",color:"#FFFFFF"}}>Web Design</Text>
//           <Text style={{margin:10}}>{website1}</Text>
//           <Text style={{fontSize:20,backgroundColor:"#4b5320",color:"#FFFFFF"}}>WEB APPLICATION DEVELOPMENT (ONLINE SOFTWARE DEVELOPMENT)</Text>
//           <Text style={{margin:10}}>{website2}</Text>
//           <Text style={{fontSize:20,backgroundColor:"#4b5320",color:"#FFFFFF"}}>FLASH WEBSITES / MULTIMEDIA PRESENTATIONS</Text>
//           <Text style = {{margin:10}}>{website3}</Text>
//           <Text style={{fontSize:20,backgroundColor:"#4b5320",color:"#FFFFFF"}}>WEB STRATGEY</Text>
//           <Text style={{margin:10}}>{website4}</Text>
//           <Text style={{fontSize:20,backgroundColor:"#4b5320",color:"#FFFFFF"}}>LOGO DESIGN</Text>
//           <Text style={{margin:10}}>{website5}</Text>
//           <Text style={{fontSize:20,backgroundColor:"#4b5320",color:"#FFFFFF"}}>DOMAIN REGISTRATION AND HOSTING</Text>
//            <Text style={{margin:10}}>{website6}</Text>
//           </View>
//         </ScrollView> 
//         </SafeAreaView>
//   )
// }
// const styles = StyleSheet.create({
//   navcontainer:{
//     alignItems: 'centers',
//     justifyContent: 'left',
//     height:"100%", // Adjust the height as per your requirement
//     borderBottomWidth: 1,
//     backgroundColor:"#FFFDD0"
//   },
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop:10
//   },
//   image: {
    
//     width: 200, // Specify the width of the image
//     height: 200, // Specify the height of the image
//   },
//   navHeader:{ 
//      fontSize:40,
//      color:"#FFFFFF",
//      textAlign:"left",
//      marginTop:10,
//      backgroundColor:"#4b5320"
//   },
//   textType:{
//     fontSize:25,
//     marginTop:20,
   
//   }
// }
// );

 export default Websites;
