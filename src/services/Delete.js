import React, { useState } from 'react';
import { View, Button, Alert } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const Delete = () => {
  const navigation = useNavigation();

  const handleDelete = () => {
  
    axios.delete('http://localhost:61038/api/DeleteEmployee')
      .then(response => {
        // Handle success, maybe update UI accordingly
        Alert.alert('Success', 'Data deleted successfully');
      })
      .catch(error => {
        // Handle error, maybe show an error message
        Alert.alert('Error', 'Failed to delete data');
      })
      .finally(() => {
        
      });
  };

  return (
    <View>
      
      <Button title="Delete Data" onPress={handleDelete}/>
    </View>
  );
};

export default Delete ;
