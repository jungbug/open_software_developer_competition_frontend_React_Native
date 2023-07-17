import React, { useState, useEffect } from 'react';
import { View, Text, Pressable } from 'react-native';
import { Camera } from 'expo-camera';

export default function People() {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const takePhoto = async () => {
    if (cameraRef) {
      const photo = await cameraRef.takePictureAsync();
      console.log(photo.assets[0]);
      // 선택한 자산에 액세스하여 원하는 동작을 수행할 수 있음
    }
  };

  if (hasPermission === null) {
    return <View />;
  } else if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  } else {
    return (
      <View style={{ flex: 1 }}>
        <Camera style={{ flex: 1 }} type={Camera.Constants.Type.back} ref={ref => setCameraRef(ref)} />
        <Pressable onPress={takePhoto} style={{ position: 'absolute', bottom: 20, alignSelf: 'center' }}>
          <Text style={{ fontSize: 20, color: 'white' }}>Take Photo</Text>
        </Pressable>
      </View>
    );
  }
}
