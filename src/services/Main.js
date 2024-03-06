import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const MyComponent = () => {
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

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.name}</Text>
      <Text>{item.age}</Text>
    </View>
  );

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {data ? (
        <Text>{JSON.stringify(data)}</Text> // Display your data however you like
      ) : (
        <Text>No data available</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 10,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});

export default MyComponent;
