// Update code 

import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { View, TextInput, Text, Button, Alert, StyleSheet, TouchableOpacity, Image } from 'react-native';

const API_ENDPOINT = 'http://localhost:61038/api/updateEmployee';
const Update = () => {
  const navigation = useNavigation();
  const [id, setId] = useState('');
  const [_name, setName] = useState('');
  const [_address, setAddress] = useState('');

  const handleUpdate = async () => {
    try {
      const response = await axios.put(`${API_ENDPOINT}/${id}`, {
        name: _name,
        address: _address,
      }); 

      if (response.status === 200) {
        Alert.alert('Success', 'Data updated successfully.');
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to update data. Please try again.');
      console.error('Error updating data:', error);
    }
  };

  return (
    <View style ={styles.container}>
      <Text style={styles.title}>Update Your Data</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="ID"
          placeholderTextColor="#003f5c"
          value={id}
          onChangeText={setId}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Enter your name"
          placeholderTextColor="#003f5c"
          value={_name}
          onChangeText={setName}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Enter your Address"
          placeholderTextColor="#003f5c"
          value={_address}
          onChangeText={setAddress}
        />
      </View>
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={handleUpdate}>
        <Text style={styles.forgotAndSignUpText}>Updte Data</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.loginBtn}
        onPress={()=> navigation.navigate('SearchDeletePage')} 
      >
        <Text style={styles.forgotAndSignUpText}>SearchDeletePage</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4FD3DA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#fb5b5a",
    marginBottom: 40,
  },
  inputView: {
    width: "80%",
    backgroundColor: "#3AB4BA",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20
  },
  inputText: {
    height: 50,
    color: "white"
  },
  forgotAndSignUpText: {
    color: "white",
    fontSize: 11
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#fb5b5a",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10
  }
}
)


export default Update;
