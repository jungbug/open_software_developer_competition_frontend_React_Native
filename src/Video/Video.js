import React, { useState, useEffect } from 'react';
import { View, Text, Pressable, ImageBackground, StyleSheet, Dimensions } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { api_uri } from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { height: SCREEN_HEIGHT } = Dimensions.get("window");
const { width: SCREEN_WIDTH } = Dimensions.get("window");
let responseData = {}
export default function Video() {
  let [nameResult, setNameResult] = useState('');
  let [accessToken, setAccessToken] = useState('');
  let [ghkrwkdwk, setGhkrwkdwk] = useState('');

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
  const ImagePickerComponent = () => {
    const [imageUrl, setImageUrl] = useState('');
    const [status, requestPermission] = ImagePicker.useMediaLibraryPermissions();

    const uploadVideo = async (videoUri) => {
      const formData = new FormData();
      formData.append('file', {
        uri: videoUri,
        name: 'video' + ghkrwkdwk + '.mp4', // 파일 이름과 확장자 지정
        type: 'video/mp4', // 이미지 파일의 타입 지정
      });
      console.log('video' + ghkrwkdwk)

      try {
        const response = await fetch(api_uri + '/api/v1/upload/video', {
          method: 'POST',
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: "Bearer " + accessToken
          },
          body: formData,
        });
        console.error('to:', accessToken);
        responseData = await response.json();
        exName = Object.values(responseData)[2]
        console.log('Upload success:', responseData);
      } catch (error) {
        console.error('Upload error:', error);
      }
    };

    const handleUpload = async () => {
      if (!status?.granted) {
        const permission = await requestPermission();
        if (!permission.granted) {
          return;
        }
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Videos,
        allowsEditing: false,
        quality: 1,
        aspect: [1, 1],
      });

      const index = "." + result.assets[0].uri.substr(result.assets[0].uri.lastIndexOf('.') + 1);

      if (!result.canceled) {
        uploadVideo(result.assets[0].uri);
        setImageUrl(result.assets[0].uri);
        setGhkrwkdwk(index);
      }
    };

    return (
      <View>
        <ImageBackground source={require('../../assets/Home_E.png')} style={styles.bgi}>
          <Pressable onPress={handleUpload}>
            <Text style={styles.ti}>동영상 업로드하기</Text>
          </Pressable>
        </ImageBackground>
      </View>
    );
  };

  const styles = StyleSheet.create({
    bgi: {
      bgImage: { width: 600, height: 500 },
    },
    ti: {
      width: SCREEN_WIDTH,
      height: SCREEN_HEIGHT,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  return <ImagePickerComponent />;
}
export const tellExName = () => {
  const exName = Object.values(responseData)[2]
  return exName
}
console.log(Object.values(responseData)[2])