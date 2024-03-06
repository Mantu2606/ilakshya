// SearchDeletePage.js
import React, { useState } from 'react';
import { View, TextInput, Button, Text, Alert } from 'react-native';
import axios from 'axios';


const API_ENDPOINT = 'http://localhost:61038/api/searchEmployee';

const SearchDeletePage = () => {
  const [id, setId] = useState('');
  const [item, setItem] = useState(null);
  
  const handleSearch = async () => {
    try {
      const response = await axios.get(`YOUR_API_ENDPOINT/${id}`);
      setId(response.data);
    } catch (error) {
      console.error('Error searching item:', error);
      Alert.alert('Error', 'Failed to search item. Please try again.');
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`YOUR_API_ENDPOINT/${itemId}`);
      setItem(null);
      setId('');
      Alert.alert('Success', 'Item deleted successfully.');
    } catch (error) {
      console.error('Error deleting item:', error);
      Alert.alert('Error', 'Failed to delete item. Please try again.');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        placeholder="Enter Item ID"
        style={{ marginBottom: 10, padding: 10, borderWidth: 1, borderColor: '#ccc', width: 200 }}
        value={id}
        onChangeText={text => setId(text)}
      />
      <Button title="Search" onPress={handleSearch} />
      {item && (
        <View style={{ marginTop: 20 }}>
          <Text>Name: {item.name}</Text>
          <Text>Address: {item.address}</Text>
          <Button title="Delete" onPress={handleDelete} />
        </View>
       )} 
    </View>
  );
};

export default SearchDeletePage;
