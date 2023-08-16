import React, { useRef, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Camera } from 'expo-camera';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { api_uri } from '@env';

export default function Photo() {
  const getData = async () => {
    try {
      // AsyncStorage에서 'accessToken' 데이터를 가져오는거
      const accessToken = await AsyncStorage.getItem('accessToken');
      console.log('accessToken:', accessToken);
    } catch (error) {
      console.error('Error getting data:', error);
    }
  };

  // 카메라 참조를 생성
  const cameraRef = useRef(null);
  // 카메라 권한 상태를 관리
  const [hasPermission, setHasPermission] = useState(null);

  useEffect(() => {
    // 컴포넌트가 마운트될 때 카메라 권한을 요청하고 상태를 업데이트
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
      console.log('1:', setHasPermission);
    })();
  }, []);

  // 사진 찍기 함수
  const takePhoto = async () => {
    if (cameraRef.current) {
      // 카메라에서 사진을 찍음
      const photo = await cameraRef.current.takePictureAsync();
      // 찍은 사진을 업로드하는 함수를 호출
      uploadPhoto(photo);
      console.log('2:', photo);
    }
  };

  // 사진 업로드 함수
  const uploadPhoto = async (photo) => {
    const data = new FormData();
    // FormData에 사진 데이터를 추가
    data.append('photo', {
      uri: photo.uri,
      type: 'image/jpeg',
      name: 'photo.jpg',
    });

    try {
      // 서버로 사진 업로드 요청을 보내는 코드
      const response = await fetch(api_uri + '/api/v1/upload/image', {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body: data,
      });
      console.log('3:', response.status);
      if (response.status === 200) {
        // 업로드 성공 시 결과를 출력하고 성공 메시지를 띄우고
        const result = await response.json();
        console.log(result);
        Alert.alert('Success', 'Photo uploaded successfully');
      } else {
        // 업로드 실패 시 에러 메시지를 띄움
        Alert.alert('Error', 'Failed to upload photo');
      }
    } catch (error) {
      // 서버 연결 실패 시 에러 메시지를 띄움
      Alert.alert('Error', 'Failed to connect to the server');
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
