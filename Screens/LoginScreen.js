import React, { useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import { View, Text, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { Button, Input, Image } from '@rneui/themed'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('dummyemail@gmail.com');
  const [password, setPassword] = useState('password');

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((authUser) => {
//       if (authUser) {
//         navigation.replace('Home');
//       }
//     });
// 
//     return unsubscribe;
//   }, [])
  

  const signIn = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log('No error while logging in');
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('Error while logging in');
        console.log('errorMessage = ', errorMessage);
        console.log('errorCode = ', errorCode);
        if (errorCode === 'auth/user-not-found') {
          console.log('if statement is correctly executed');
        }
        else {
          console.log('if statement is not correctly executed');
          
        }
      });
  }

  const SignalLogoPath = '../assets/Signal-logo.png';

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container} >
      <StatusBar style='light' />
      <Image
        style={styles.tinyLogo}
        source={require(SignalLogoPath)}
      />
      <View style={styles.inputContainer}>
        <Input
          placeholder='Enter your email'
          // autoFocus
          type='email'
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder='Enter your password'
          secureTextEntry
          type='password'
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>

      <Button
        title='Login'
        onPress={signIn}
        containerStyle={styles.button}
      />
      <Button 
        onPress={() => { navigation.replace('Register') }} 
        title='Register' 
        type='outline' 
        containerStyle={styles.button}
      />
      <View style={{ height: 80, }} />
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: 'white',
    // borderColor: 'red', borderWidth: 10,
  },
  inputContainer: {
    width: 300,
  },
  tinyLogo: {
    width: 200,
    height: 200,
  },
  button: {
    width: 200,
    marginTop: 10,
  },
})

export default LoginScreen;