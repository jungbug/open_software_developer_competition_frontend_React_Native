import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const SignUp = ({ onNavigateToLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [warning, setWarning] = useState('');

  const handleSignUp = async () => {
    if (email.length < 8 || password.length < 8) {
      setWarning('아이디와 비밀번호는 8글자 이상이어야 합니다.');
      return;
    }

    const response = await fetch(
      'http://hoshi-kirby.xyz/api/v1/user/register',
      {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            user_name: email,
            user_id: email,
            user_pw: password,
            user_email: email,
            user_phone: email,
            // is_valid: true
          }),
      },
    );

    if (response.status === 200) {
      onNavigateToLogin();
      return response;
    } else {
      console.log("실패");
      // throw new Error('unable to get');
    }
  };

  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>회원가입</Text>

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
        <Text style={styles.buttonText}>가입하기</Text>
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
  warning: {
    color: 'red',
    marginBottom: 10,
  },
});

export default SignUp;
