import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Login = ({ onLogin, onNavigateToSignUp }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const saveData = async (data) => {
    try {
      await AsyncStorage.setItem('accessToken', data);
      console.log('Data saved successfully');
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  const getData = async () => {
    try {
      const accessToken = await AsyncStorage.getItem('accessToken');
      console.log('accessToken:', accessToken);
    } catch (error) {
      console.error('Error getting data:', error);
    }
  };

  const handleLogin = async () => {
    const id = email; // 사용자 ID
    const pw = password; // 사용자 비밀번호

    const queryParams = new URLSearchParams({
      id: id,
      pw: pw
    });

    const url = `http://hoshi-kirby.xyz/api/v1/user/login?${queryParams}`;

    try {
      const response = await fetch(url, {
        method: 'GET'
      });

      const responseJson = await response.json();

      if (response.status === 200) {
        console.log(responseJson.access_token);
        saveData(responseJson.access_token);
        getData()
        onLogin();
        return response;
      } else {
        return 0;
      }
    } catch (error) {
      console.error('An error occurred:', error);
      return 0;
    }
  };



  return (
    <View style={styles.container}>
      <Text style={styles.title}>로그인</Text>
      <TextInput
        style={styles.input}
        placeholder="이메일"
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="비밀번호"
        secureTextEntry
        onChangeText={text => setPassword(text)}
      />


      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>로그인</Text>
      </TouchableOpacity>


      <TouchableOpacity style={styles.signUpLink} onPress={onNavigateToSignUp}>
        <Text style={styles.signUpText}>회원가입</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    width: 250,
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#5f4ffe',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  signUpLink: {
    marginTop: 10,
  },
  signUpText: {
    color: '#5f4ffe',
    fontSize: 16,
  },
});

export default Login;
