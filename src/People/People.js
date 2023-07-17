import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import * as ImagePicker from "expo-image-picker";

export default function People() {
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
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: false,
        quality: 1,
        aspect: [1, 1]
      });
      if (result.cancelled) {
        return null;
      }

      console.log(result);
      setImageUrl(result.uri);
    }

    return (
      <Pressable onPress={uploadImage}>
        <Text>이미지 업로드하기</Text>
      </Pressable>
    );
  };

  return <ImagePickerComponent />;
}