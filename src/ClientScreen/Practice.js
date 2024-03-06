import axios from 'axios';
import { Cheerio } from 'cheerio';
import React, { useEffect, useState } from 'react'
import { View,Text, TextInput } from 'react-native'

const Practice = () => {
    const [fName, setFname] = useState(''); 
    const [lName, setLname] = useState(''); 
    const [fName, setFname] = useState(''); 
    const [fName, setFname] = useState(''); 

    return(
        <View>
         <Text>FName</Text>
         <TextInput 
          placeholder='Fname'
          onChangeText={setFname}
          value={fName}
         />
         <Text>LName</Text>
         <TextInput 
          placeholder='Lname'
          onChangeText={setFname}
          value={fName}
         />
         <Text>FName</Text>
         <TextInput 
          placeholder='Fname'
          onChangeText={setFname}
          value={fName}
         />
         <Text>FName</Text>
         <TextInput 
          placeholder='Fname'
          onChangeText={setFname}
          value={fName}
         />
         <Text>FName</Text>
         <TextInput 
          placeholder='Fname'
          onChangeText={setFname}
          value={fName}
         />

         </View>
    )
}
export default Practice
