import React, { useRef, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Camera } from 'expo-camera';

export default function People() {
  const cameraRef = useRef(null);
  const [hasPermission, setHasPermission] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const takePhoto = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();

      // 사진 캡처 후 처리할 작업 수행

      console.log(photo);
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
      <Camera
        ref={cameraRef}
        style={{ flex: 1, aspectRatio: 4 / 3 }}
        type={Camera.Constants.Type.back}
      >
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={takePhoto} style={styles.captureButton}>
            <Text style={styles.captureText}>Take Photo</Text>
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
    backgroundColor: 'transparent',
    borderRadius: 5,
    padding: 10,
    marginBottom: 16,
    borderWidth: 2,
    borderColor: 'black',
  },
  captureText: {
    color: 'white',
    fontSize: 20,
  },
});
