import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native';
import axios from 'axios';

const API_ENDPOINT = 'https://api.example.com/data'; // Replace this with your API endpoint

const UpdateFromApi = () => {
  const [searchId, setSearchId] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get(`${API_ENDPOINT}/${searchId}`);
      const { name, address } = response.data;
      setName(name);
      setAddress(address);
    } catch (error) {
      Alert.alert('Error', 'Failed to fetch data. Please try again.');
      console.error('Error searching data:', error);
    }
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.put(`${API_ENDPOINT}/${searchId}`, {
        name,
        address,
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
    <ScrollView contentContainerStyle={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter ID"
        value={searchId}
        onChangeText={setSearchId}
        keyboardType="numeric"
      />
      <Button title="Search" onPress={handleSearch} />
      <View style={styles.dataContainer}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.data}>{name}</Text>
        <Text style={styles.label}>Address:</Text>
        <Text style={styles.data}>{address}</Text>
      </View>
      <Button title="Update" onPress={handleUpdate} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  dataContainer: {
    marginTop: 20,
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  data: {
    marginBottom: 10,
  },
});

export default UpdateFromApi;
