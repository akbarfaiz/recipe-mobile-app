import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Button,
  TouchableOpacity
} from 'react-native';

import { TextInput } from 'react-native-paper';

import {useSelector, useDispatch } from 'react-redux';
import {login} from "../../Storage/Action/auth"

const LoginPage = ({navigation}) => {
  const dispatch = useDispatch()
  const auth = useSelector((state)=>state.auth)

  const [email, onChangeEmail] = React.useState('');
  const [password, onChangePassword] = React.useState('');

  const LoginForm = () => {
    data = {
      email: email,
      password: password
    }
    dispatch(login(data))
  }

  return (
    <View style={{backgroundColor: 'white' , height: '100%'}}>
      <StatusBar translucent backgroundColor="transparent" barStyle={'light-content'} />
      <Image source={require('../../Asset/banner_auth.png')} style={{width: '100%'}} />
      <Text style={{color: '#EFC81A', textAlign: 'center', fontWeight: 'bold', fontSize: 20}}>Welcome !</Text>
      <Text style={{textAlign: 'center', color: '#C4C4C4'}}>Log in to your exiting account.</Text>
      <SafeAreaView style={{margin: 25}}>
        <TextInput mode="outlined" left={<TextInput.Icon icon={'email-outline'} iconColor='#EFC81A' />} style={styles.input} activeOutlineColor={'#EFC81A'} onChangeText={onChangeEmail} value={email} placeholder='Email' placeholderTextColor={'#C4C4C4'}/>
        <TextInput mode="outlined" secureTextEntry left={<TextInput.Icon icon={'lock-outline'} iconColor='#EFC81A'/>} style={styles.input} activeOutlineColor={'#EFC81A'}  onChangeText={onChangePassword} value={password} placeholder='Password' placeholderTextColor={'#C4C4C4'}/>
        <TouchableOpacity onPress={() => navigation.push('ForgotPW')}>
          <Text style={{marginBottom: 20,textAlign: 'right', color: '#C4C4C4'}}>Forgot Password?</Text>
        </TouchableOpacity>
        <Button onPress={LoginForm} color={'#EFC81A'} title='Login' />
      </SafeAreaView>
      <Text style={{marginTop: 20,textAlign: 'center', color: '#C4C4C4'}}>Don’t have an account? <TouchableOpacity onPress={() => navigation.push('Register')}><Text style={{color: '#EFC81A'}}>Sign Up</Text></TouchableOpacity></Text>
    </View>
  )
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    marginTop: 12,
    marginBottom: 12,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#F5F5F5',
  },
});

export default LoginPage;