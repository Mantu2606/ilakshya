import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

const ClickButton = () => {
  const [boxVisible, setBoxVisible] = useState(false);
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (button) => {
    setSelectedButton(button);
    setBoxVisible(true);
  };

  const closeBox = () => {
    setBoxVisible(false);
    setSelectedButton(null);
  };

  return (
    <SafeAreaView>
        <ScrollView>
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonClick('Button 1')}
        >
          <Text style={styles.buttonText}>Button 1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonClick('Button 2')}
        >
          <Text style={styles.buttonText}>Button 2</Text>
        </TouchableOpacity>
        {/* Add more buttons here as needed */}
      </View>
      {boxVisible && (
        <View style={styles.box}>
          <Text style={styles.boxText}>Box opened by: {selectedButton}</Text>
          <TouchableOpacity style={styles.closeButton} onPress={closeBox}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
    </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  box: {
    backgroundColor: 'lightgray',
    padding: 20,
    borderRadius: 5,
  },
  boxText: {
    fontSize: 16,
  },
  closeButton: {
    backgroundColor: 'blue',
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default ClickButton;
