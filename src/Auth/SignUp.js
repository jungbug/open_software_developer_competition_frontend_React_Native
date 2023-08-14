import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { api_uri } from '@env';

const SignUp = ({ onNavigateToLogin }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [warning, setWarning] = useState('');

  const handleSignUp = async () => {
    if (name.length === 0 || email.length < 8 || password.length < 8) {
      setWarning('아이디, 비밀번호는 8글자 이상이어야 합니다.');
      return;
    }

    const response = await fetch(
      api_uri + '/api/v1/user/register',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_name: name,
          user_id: email,
          user_pw: password,
        }),
      },
    );

    if (response.status === 200) {
      onNavigateToLogin();
      return response;
    } else {
      console.log('실패');
      // throw new Error('unable to get');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="이름"
        onChangeText={text => setName(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="8글자 이상의 아이디"
        onChangeText={text => setEmail(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="8글자 이상의 비밀번호"
        secureTextEntry
        onChangeText={text => setPassword(text)}
      />

      {warning ? <Text style={styles.warning}>{warning}</Text> : null}

      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>확인</Text>
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
    paddingVertical: 15,
    paddingHorizontal: 100,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  warning: {
    color: 'red',
    marginBottom: 10,
  },
});

export default SignUp;
