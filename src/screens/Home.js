import React, { useEffect } from 'react';
import { View, SafeAreaView, ScrollView, Text } from 'react-native';

import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import HomeItem from '../components/HomeItem';
import Bottom from '../components/Bottom';
import LowerBottom from '../components/LowerBottom';
import Headers from '../components/Header';
import { useNavigation } from '@react-navigation/native';
import Contact from './Contact';

import axios from 'axios';
import Main from '../services/Main';


const Home = () => {
   const navigation = useNavigation();
  // Sonu Api 
  // const getEmployee = async () => {
  //   axios.get('http://localhost:61038/api/getEmployees')
  //     .then(function (response) {
  //       // handle success
  //       console.log(response.data);
  //     })
  //     .catch(function (error) {
  //       // handle error
  //       console.log(error);
  //     })
  //     .finally(function () {
  //       // always executed
  //     });
  // };

  // useEffect(() => {
  //   getEmployee();
  // }, []);

  return (
    <SafeAreaView>
      <ScrollView >
        <View>
          <Headers />
          <Navbar />
          <Slider />
          <Main />
          <HomeItem />
          <Bottom />
          {/* <Login /> */}
          <LowerBottom />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home 