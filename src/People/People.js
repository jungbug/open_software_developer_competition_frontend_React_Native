import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Camera } from 'expo-camera';

export default function People() {
  const cameraRef = useRef(null);

  const takePhoto = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();//여기 변수에 사진이 저장됨

      // 사진 캡처 후 처리할 작업 수행

      console.log(photo); // 콘솔에 사진 데이터 출력
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Camera
        ref={cameraRef}
        style={{ flex: 1, aspectRatio: 4 / 3 }} // 화면 비율을 4:3으로 조정
        type={Camera.Constants.Type.back} // 후면 카메라 사용
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
