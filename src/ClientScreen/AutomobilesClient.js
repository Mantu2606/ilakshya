import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

const AutomobilesClient = () => {
  const [sectionVisibility, setSectionVisibility] = useState({
    ALL: false,
    School: false,
    College: false,
    Corporate: false,
    Hospitals: false,
    Automobiles: false,
    RealEstates: false,
    Websites: false,
  });

  const toggleSection = (section) => {
    setSectionVisibility({
      ...sectionVisibility,
      [section]: !sectionVisibility[section],
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[styles.button, sectionVisibility['ALL'] && styles.activeButton]}
          onPress={() => toggleSection('ALL')}
        >
          <Text style={styles.buttonText}>ALL</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, sectionVisibility['School'] && styles.activeButton]}
          onPress={() => toggleSection('School')}
        >
          <Text style={styles.buttonText}>School</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, sectionVisibility['College'] && styles.activeButton]}
          onPress={() => toggleSection('College')}
        >
          <Text style={styles.buttonText}>College</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, sectionVisibility['Corporate'] && styles.activeButton]}
          onPress={() => toggleSection('Corporate')}
        >
          <Text style={styles.buttonText}>Corporate</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, sectionVisibility['Hospitals'] && styles.activeButton]}
          onPress={() => toggleSection('Hospitals')}
        >
          <Text style={styles.buttonText}>Hospitals</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, sectionVisibility['Automobiles'] && styles.activeButton]}
          onPress={() => toggleSection('Automobiles')}
        >
          <Text style={styles.buttonText}>Automobiles</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, sectionVisibility['RealEstates'] && styles.activeButton]}
          onPress={() => toggleSection('RealEstates')}
        >
          <Text style={styles.buttonText}>RealEstates</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, sectionVisibility['Websites'] && styles.activeButton]}
          onPress={() => toggleSection('Websites')}
        >
          <Text style={styles.buttonText}>Websites</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView} contentContainerStyle={styles.sectionsContainer}>
        <View style={[styles.section, sectionVisibility['ALL'] ? null : styles.hidden]}>
          <Text>ALL content goes here</Text>
        </View>
        <View style={[styles.section, sectionVisibility['School'] ? null : styles.hidden]}>
          <Text>School content goes here</Text>
        </View>
        <View style={[styles.section, sectionVisibility['College'] ? null : styles.hidden]}>
          <Text>College content goes here</Text>
        </View>
        <View style={[styles.section, sectionVisibility['Corporate'] ? null : styles.hidden]}>
          <Text>Corporate content goes here</Text>
        </View>
        <View style={[styles.section, sectionVisibility['Hospitals'] ? null : styles.hidden]}>
          <Text>Hospitals content goes here</Text>
        </View>
        <View style={[styles.section, sectionVisibility['Automobiles'] ? null : styles.hidden]}>
          <Text>Automobiles content goes here</Text>
        </View>
        <View style={[styles.section, sectionVisibility['RealEstates'] ? null : styles.hidden]}>
          <Text>RealEstates content goes here</Text>
        </View>
        <View style={[styles.section, sectionVisibility['Websites'] ? null : styles.hidden]}>
          <Text>Websites content goes here</Text>
        </View>
      </ScrollView>
    </View>
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
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
  activeButton: {
    backgroundColor: 'green',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  scrollView: {
    flex: 1,
    width: '100%',
  },
  sectionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  section: {
    backgroundColor: 'lightgray',
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
  hidden: {
    display: 'none',
  },
});

export default AutomobilesClient
