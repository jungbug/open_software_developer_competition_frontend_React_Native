import React, { useRef, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import { Camera } from 'expo-camera';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { api_uri } from '@env';
// tellFoodName 함수를 아래에 정의
export const tellFoodName = () => {
  // 여기에서 사진을 분석하고 음식 이름을 가져오는 코드를 작성하세요.
  // 예를 들면, AI 모델을 호출하거나 이미지 처리를 수행할 수 있습니다.
  // 이 함수는 음식 이름을 반환해야 합니다.
  const foodName = '돈까스'; // 임시로 돈까스를 반환하는 예시
  return foodName;
};
export default function Photo() {
  const [isLoading, setIsLoading] = useState(false);
  let [nameResult, setNameResult] = useState('');
  let [accessToken, setAccessToken] = useState('');
  const [hasPermission, setHasPermission] = useState(null);

  const cameraRef = useRef(null);

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
    getData().then(([token, name]) => {
      setAccessToken(token);
      setNameResult(name);
    });
  }, []);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const takePhoto = async () => {
    if (cameraRef.current) {
      setIsLoading(true);

      const photo = await cameraRef.current.takePictureAsync();
      // 찍은 사진을 업로드하는 함수를 호출
      uploadPhoto(photo);
      // console.log(photo);
    }
  };

  const uploadPhoto = async (photo) => {
    const formData = new FormData();
    formData.append('file', {
      uri: photo.uri,
      name: 'photo' + ghkrwkdwk + '.jpg', // 파일 이름과 확장자 지정
      type: 'image/jpeg', // 이미지 파일의 타입 지정
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
      // console.error('to:', accessToken);
      // console.log('5:', response);
      // console.log('3:', response.status);
      if (response.status === 200) {
        const responseData = await response.json();
        console.log('Response Data:', responseData);

        Alert.alert('사진이 보내졌습니다', '음식분석화면으로 이동해주세요.');
      } else {
        Alert.alert('사진을 보내는데 문제가 발생했습니다', '다시 시도해주세요.');
      }
    } catch (error) {
      Alert.alert('사진을 보내는데 문제가 발생했습니다', '다시 시도해주세요.');
      console.log('사진을 보내는데 문제가 발생했습니다', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        <Camera
          ref={cameraRef}
          style={{ flex: 1, aspectRatio: 4 / 3 }}
          type={Camera.Constants.Type.back}
        >
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={takePhoto} style={styles.captureButton}>
              {/* 버튼 UI */}
            </TouchableOpacity>
          </View>
        </Camera>
      )}
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
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

