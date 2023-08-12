import React, { useState } from 'react';
import { View, Text, Pressable, ImageBackground, StyleSheet, Dimensions } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Device } from 'expo-device';

const { height: SCREEN_HEIGHT } = Dimensions.get("window");
const { width: SCREEN_WIDTH } = Dimensions.get("window");
const getData = async () => {
  try {
    const accessToken = await AsyncStorage.getItem('accessToken');
    console.log('accessToken:', accessToken);
  } catch (error) {
    console.error('Error getting data:', error);
  }
};

export default function Video() {
  const ImagePickerComponent = () => {
    const [imageUrl, setImageUrl] = useState('');
    const [status, requestPermission] = ImagePicker.useMediaLibraryPermissions();


    const uploadImage = async () => {
      if (!status?.granted) {
        const permission = await requestPermission();
        if (!permission.granted) {
          return null;
        }
      }
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Videos,
        allowsEditing: false,
        quality: 1,
        aspect: [1, 1],
      });
      if (result.canceled) {
        return null;
      }

      console.log(result);
      setImageUrl(result.assets[0].uri);
    };

    return (
      <View>
        <ImageBackground source={require('../../assets/Home_E.png')} style={styles.bgi}>

          <Pressable onPress={uploadImage}>
            <Text style={styles.ti}>동영상 업로드하기</Text>
          </Pressable>

        </ImageBackground>


      </View >
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

    }
  });

  return <ImagePickerComponent />;
}