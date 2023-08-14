import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { api_uri } from '@env';

import iconImage from '../../assets/icon.png';

const Login = ({ onLogin, onNavigateToSignUp }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginFailed, setLoginFailed] = useState(false);

  const saveData = async (data) => {
    try {
      await AsyncStorage.setItem('accessToken', data);
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  const getData = async () => {
    try {
      const accessToken = await AsyncStorage.getItem('accessToken');
      return accessToken;
    } catch (error) {
      console.error('Error getting data:', error);
      return 0;
    }
  };

  const handleLogin = async () => {
    const id = email;
    const pw = password;

    const queryParams = new URLSearchParams({
      id: id,
      pw: pw
    });
    const url = api_uri + `/api/v1/user/login?${queryParams}`;

    try {
      const response = await fetch(url, {
        method: 'GET'
      });

      const responseJson = await response.json();

      if (response.status === 200) {
        saveData(responseJson.access_token);
        const tokenResult = getData();
        
        if (tokenResult !== 0) {
          onLogin(tokenResult);
          setLoginFailed(false);
        } else {
          setLoginFailed(true);
        }
        return response;
      } else {
        setLoginFailed(true);
        return 0;
      }
    } catch (error) {
      console.error('An error occurred:', error);
      setLoginFailed(true);
      return 0;
    }
  };

  return (
    <View style={styles.container}>
      <Image source={iconImage} style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="아이디를 입력해주세요."
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="비밀번호를 입력해주세요."
        secureTextEntry
        onChangeText={text => setPassword(text)}
      />

      {loginFailed && (
        <Text style={styles.warning}>로그인에 실패했습니다. 다시 시도하세요.</Text>
      )}

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>로그인</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signUpButton} onPress={onNavigateToSignUp}>
        <Text style={[styles.buttonText, styles.signUpButtonText]}>회원가입</Text>
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
    width: 280,
    height: 50,
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 10,
    borderRadius: 20,
  },
  button: {
    backgroundColor: '#50a5ff',
    paddingVertical: 12,
    paddingHorizontal: 80,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  signUpButton: {
    backgroundColor: 'white',
    borderColor: '#50a5ff',
    borderWidth: 2,
    paddingVertical: 12,
    paddingHorizontal: 72,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 18,
    marginRight: 5,
    color: 'white',
  },
  signUpButtonText: {
    color: '#50a5ff',
  },
  icon: {
    width: 300,
    height: 250,
    marginBottom: 16,
  },
  warning: {
    color: 'red',
    marginTop: 10,
  },
});

export default Login;
