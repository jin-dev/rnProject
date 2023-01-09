import {View, Image, StyleSheet, useWindowDimensions} from 'react-native';
import React, {useState} from 'react';
import Logo from '../../assets/images/logo_sample.png';
import CustomInput from '../components/CustomInput/CustomInput';
const SignInScreen = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const {height} = useWindowDimensions();

  return (
    <View>
      <Image
        source={Logo}
        style={[styles.logo, {height: height * 0.3}]}
        resizeMode="contain"
      />

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
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: '100%',
    maxWidth: 500,
    height: 100,
  },
});

export default SignInScreen;
