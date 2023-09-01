import React, { useRef, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Camera } from 'expo-camera';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { api_uri } from '@env';
import axios from 'axios';

export default function Photo() {
  // 사용할 상태 변수들 선언
  let [nameResult, setNameResult] = useState('');  // 이름 결과 상태 변수
  let [accessToken, setAccessToken] = useState('');  // 액세스 토큰 상태 변수
  let [ghkrwkdwk, setGhkrwkdwk] = useState('');  // 알 수 없는 상태 변수

  // AsyncStorage에서 데이터 가져오는 함수
  const getData = async () => {
    try {
      const accessTokenValue = await AsyncStorage.getItem('accessToken');
      const popName = await AsyncStorage.getItem('userId');

      return [accessTokenValue, popName];
    } catch (error) {
      console.error('Error getting data:', error);
      return [null, null];
    }
  };


  useEffect(() => {
    // 컴포넌트가 마운트될 때 데이터 가져와 상태 변수 업데이트
    getData().then(([token, name]) => {
      setAccessToken(token);
      setNameResult(name);
    });
  }, []);

  // 카메라 참조를 생성
  const cameraRef = useRef(null);

  // 카메라 권한 상태를 관리
  const [hasPermission, setHasPermission] = useState(null);

  useEffect(() => {
    // 컴포넌트가 마운트될 때 카메라 권한을 요청하고 상태를 업데이트
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  // 사진 찍기 함수
  const takePhoto = async () => {
    if (cameraRef.current) {
      // 카메라에서 사진을 찍음
      const photo = await cameraRef.current.takePictureAsync();
      // console.log(photo.uri)
      init(photo.uri)
      // 찍은 사진을 업로드하는 함수를 호출
      uploadPhoto(photo);
      console.log(photo);
    }
  };

  // 사진 업로드 함수
  const uploadPhoto = async (photo) => {
    const formData = new FormData();
    formData.append('file', {
      file: photo,
      name: 'photo', // 파일 이름과 확장자 지정
    });
    try {
      const response = await fetch(api_uri + '/api/v1/upload/image', {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: "Bearer " + accessToken
        },
        body: formData,
      });
      console.log('5:', response);
      console.log('3:', response.status);
      if (response.status === 200) {
        const result = response.data;
        console.log('6:', result);
        console.log('7:', response.data);

        Alert.alert('Success', 'Photo uploaded successfully');
      } else {
        Alert.alert('Error', 'Failed to upload photo');
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to connect to the server');
      console.log('4:', error);
    }
  };

  if (hasPermission === null) {
    // 권한 상태가 알 수 없는 경우 빈 화면을 반환
    return <View />;
  }

  if (hasPermission === false) {
    // 권한이 없는 경우 'No access to camera' 텍스트를 반환합니다.
    return <Text>No access to camera</Text>;
  }


  return (
    <View style={{ flex: 1 }}>
      {/* 카메라 컴포넌트를 렌더링하고, 촬영 버튼을 추가 */}
      <Camera
        ref={cameraRef}
        style={{ flex: 1, aspectRatio: 4 / 3 }}
        type={Camera.Constants.Type.back}
      >
        <View style={styles.buttonContainer}>
          {/* 사진 찍기 버튼 */}
          <TouchableOpacity onPress={takePhoto} style={styles.captureButton}>
            {/* 버튼 UI */}
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 20,
  },
  captureButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#fff',
  },
});

export const tellFoodName = () => {
  const foodName = '돈까스';
  return foodName;//사진 인공지능 돌려서 어떤 음식인지 알려주는 함수, return 값에 음식 이름 나오게 설정해야됨
};