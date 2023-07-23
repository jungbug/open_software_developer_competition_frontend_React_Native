import React from 'react';
import { View, Image, Text, StyleSheet, Dimensions } from 'react-native';

const { height: SCREEN_HEIGHT } = Dimensions.get("window");
const { width: SCREEN_WIDTH } = Dimensions.get("window");

export default function Video_Analysis() {
  return (
    <View>
      <Image
        source={require('../../assets/Plank.jpg')}
        style={styles.imageE} />

      <Text style={styles.correction}>
        교정사항칸
      </Text>
      <Text style={styles.manual}>
        메뉴얼칸
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  imageE: {
    flex: 1,
    width: SCREEN_HEIGHT / 2.4,
    borderRadius: 20,
  },
  correction: {
    flex: 1,
    margin: 20,

  },
  correctionMain: {

  },
  correctionSub: {

  },
  manual: {
    flex: 1,
    margin: 20,
  },
  manualMain: {

  },
  manualSub: {

  },


});