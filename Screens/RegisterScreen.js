import React, { useState, useLayoutEffect } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, StyleSheet, View } from 'react-native';
import { Button, Input, Text } from '@rneui/base';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";

const RegisterScreen = ({navigation}) => {
  const [name, setName] = useState('Dummy name');
  const [email, setEmail] = useState('dummyemail@gmail.com');
  const [password, setPassword] = useState('password');
  const [imageURL, setImageURL] = useState('');

  const dummyProfilePicturePath = '../assets/dummy-profile-picture.png';
  
  const register = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('no error');
        // Signed in 
        const user = userCredential.user;
        // ...

        navigation.replace('Home');
      })
      .catch((error) => {
        // console.log('some error');
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        alert(errorMessage);
      });
  }
  
  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container} >
      <StatusBar style='light' />

      <Text h3 style={{marginBottom: 50}} >
        Create a Signal Account
      </Text>

      <View style={styles.inputContainer} >
        <Input
          placeholder='Full Name'
          // autoFocus
          type='text'
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <Input
          placeholder='Email'
          type='email'
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder='Password'
          type='password'
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
          />
        <Input
          placeholder='Profile picture URL (optional)'
          type='text'
          value={imageURL}
          onChangeText={(text) => setImageURL(text)}
          onSubmitEditing={register}
        />
      </View>

      <Button raised onPress={register} title='Register' containerStyle={styles.button} />

    </KeyboardAvoidingView>
  )
}

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: 'white',
    // borderColor: 'red', borderWidth: 1,
  },
  inputContainer: {
    width: 300,
  },
  button: {
    width:200,
    marginTop: 10,
  },
})