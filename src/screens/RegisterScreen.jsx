import React, {useState} from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import CustomInput from '../components/CustomInput/CustomInput';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import LoginSVG from '../assets/images/misc/login.svg';
import GoogleSVG from '../assets/images/misc/google.svg';
import FacebookSVG from '../assets/images/misc/facebook.svg';
import TwitterSVG from '../assets/images/misc/twitter.svg';
const RegisterScreen = navigation => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
      <View style={{paddingHorizontal: 25}}>
        <View style={{alignItems: 'center'}}>
          <LoginSVG
            height={300}
            width={300}
            style={{transform: [{rotate: '-5deg'}]}}
          />
        </View>

        <Text
          style={{
            fontSize: 28,
            fontWeight: '500',
            color: '#333',
            marginBottom: 30,
          }}>
          Register
        </Text>

        <CustomInput
          value={userName}
          setValue={setUserName}
          placeholder="Account"
          secureTextEntry={false}
        />
        <CustomInput
          value={password}
          setValue={setPassword}
          placeholder="Password"
          secureTextEntry={true}
        />
        <TouchableOpacity onPress={() => {}}>
          <Text style={{color: '#AD40AF', fontWeight: '700'}}>Forgot?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {}}
          style={{
            backgroundColor: '#AD40AF',
            padding: 20,
            borderRadius: 10,
            marginBottom: 30,
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: '700',
              fontSize: 16,
              color: '#fff',
            }}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 30,
        }}>
        <TouchableOpacity
          onPress={() => {}}
          style={{
            borderColor: '#ddd',
            borderWidth: 2,
            borderRadius: 10,
            paddingHorizontal: 30,
            paddingVertical: 10,
          }}>
          <GoogleSVG height={24} width={24} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {}}
          style={{
            borderColor: '#ddd',
            borderWidth: 2,
            borderRadius: 10,
            paddingHorizontal: 30,
            paddingVertical: 10,
          }}>
          <FacebookSVG height={24} width={24} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {}}
          style={{
            borderColor: '#ddd',
            borderWidth: 2,
            borderRadius: 10,
            paddingHorizontal: 30,
            paddingVertical: 10,
          }}>
          <TwitterSVG height={24} width={24} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginBottom: 30,
        }}>
        <Text>New to the app?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={{color: '#AD40AF', fontWeight: '700'}}> Register</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;
