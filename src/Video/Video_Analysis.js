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
      <View style={styles.correction}>
        <Text style={styles.correctionTitle}>
          교정사항
        </Text>
      </View>
      <View style={styles.manual}>
        <Text style={styles.manualTitle}>
          플랭크 메뉴얼
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageE: {
    flex: 1,
    width: SCREEN_HEIGHT / 2.4,
    borderRadius: 20,
    marginBottom: 10,
  },
  correction: {
    flex: 1,
    width: SCREEN_HEIGHT / 2.4,
    backgroundColor: '#E2E2E2',
    borderRadius: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  correctionTitle: {
    fontSize: 25,
    color: 'black',
    marginTop: 15,
    marginLeft: 20,
    marginRight: 20,
    justifyContent: "flex-start",
    fontWeight: 'bold'
  },
  correctionSub: {

  },
  manual: {
    flex: 2,
    width: SCREEN_HEIGHT / 2.4,
    backgroundColor: '#E2E2E2',
    borderRadius: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  manualTitle: {
    fontSize: 25,
    color: 'black',
    marginTop: 15,
    marginLeft: 20,
    marginRight: 20,
    justifyContent: "flex-start",
    fontWeight: 'bold'
  },
  manualSub: {

  },


});