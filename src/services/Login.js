import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
 // Sonu  ji login api code 
const Login = () => {
  const navigation = useNavigation();

    [_email, setEmail] = useState('');
   const [_password, setPassword] = useState('');
  const onPressLogin = () => {
    const data = {
      email:_email,
      password: _password
    }
    axios.post('http://loconstcalhost:61038/api/validateLogin',data)
        .then(function (response) {
          if(response.data.StatusCode == 200){
            let loginInfo = response.data.Result;
            // library
            //navigation  page where data show
            navigation.navigate('Home');
          }else{
            console.log(response.data.Message);
            // add toaster 
            //Alert(response.data.Message);
          }
          // handle success
          console.log(response.data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
        });
  };
  const onPressForgotPassword = () => {
    // Do something about forgot password operation
  };
  const onPressSignUp = () => {
    // Do something about signup operation
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Student ID</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={setEmail} />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          secureTextEntry
          placeholder="Password"
          placeholderTextColor="#003f5c"
          onChangeText={setPassword} />
      </View>
      <TouchableOpacity
        onPress={onPressForgotPassword}>
        <Text style={styles.forgotAndSignUpText}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onPressLogin}
        style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={()=> navigation.navigate('SignUp')} >
        <Text style={styles.forgotAndSignUpText}>Signup</Text>
      </TouchableOpacity>
        <TouchableOpacity
        onPress={onPressForgotPassword}>
        <Text style={styles.forgotAndSignUpText}>Forgot Password?</Text>
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
  },
});
export default Login;
