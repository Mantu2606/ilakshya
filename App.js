import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Home from './src/screens/Home';
import { Screen } from "react-native-screens";
import Company from "./src/screens/About";
import OurScreen from "./src/screens/OurScreen";
import DirectorSpeech from "./src/screens/DirectorSpeech";
import OutTeam from "./src/screens/OurTeam";
import OurStrength from "./src/screens/OurStrength";
import RequestQuoate from "./src/screens/RequestQuoate";
import Education from "./src/screens/Education";
import Websites from "./src/screens/Websites";
import Proximity from "./src/screens/Proximity";
import Attendance from "./src/screens/Attendance";
import BarcodeRead from "./src/screens/BarcodeReader";
import IpBoards from "./src/screens/IpBoards";
import software from "./src/screens/Software";
import client from "./src/screens/Client";
import HrPayManagement from "./src/screens/HrPayManagement";
import Client from "./src/screens/Client";
import Software from "./src/screens/Software";
import Hospital from "./src/screens/Hospital";
import IndustServ from "./src/screens/IndustServ";
import Corporate from "./src/screens/Corporate";
import CallCenter from "./src/screens/CallCenter";
import MediaNew from "./src/screens/MediaNew";
import Contact from "./src/screens/Contact";
import SplashScreen from "./src/SplashScreen";
import Gallery from "./src/screens/Gallery";
import Login from "./src/services/Login";
import SignUp from "./src/services/SignUp";
import Update from "./src/services/Update";
import SearchDeletePage from "./src/services/SearchDeletePage ";

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login" screenOptions={{ headerShown: false }} >
      <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Update" component={Update} />
        <Stack.Screen name="SearchDeletePage" component={SearchDeletePage} />
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="About" component={Company} /> 
        <Stack.Screen name="OurScreenStory" component={OurScreen} />
        <Stack.Screen name="Direct" component={DirectorSpeech} />
        <Stack.Screen name="Team" component={OutTeam} />
        <Stack.Screen name="ourstrength" component={OurStrength} />
        <Stack.Screen name="requestQuet" component={RequestQuoate} />
        <Stack.Screen name="education" component={Education} />  
        <Stack.Screen name="indSer" component={IndustServ} />
        <Stack.Screen name="corp" component={Corporate} />
        <Stack.Screen name="call" component={CallCenter} />
        <Stack.Screen name="host" component={Hospital} />
        <Stack.Screen name="websit" component={Websites} />
        <Stack.Screen name="proximity" component={Proximity} />
        <Stack.Screen name="attend" component={Attendance} />
        <Stack.Screen name="barcode" component={BarcodeRead} />
        <Stack.Screen name="ipbord" component={IpBoards} />
        <Stack.Screen name="soft" component={Software} />
        <Stack.Screen name="clit" component={Client} />
        <Stack.Screen name="media" component={MediaNew}/>
        <Stack.Screen name="contact" component={Contact} />
        <Stack.Screen name="galary" component={Gallery} />
        {/*Home items*/}
        <Stack.Screen name="HrPayroll"  component={HrPayManagement} />
       
      </Stack.Navigator>
    </NavigationContainer>
  ) 
} 
export default App;
