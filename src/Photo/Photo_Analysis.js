import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity,Dimensions } from 'react-native';
import {  } from 'react-native-svg-charts';
const { height: SCREEN_HEIGHT } = Dimensions.get("window");
const { width: SCREEN_WIDTH } = Dimensions.get("window");
const FOOD = '샐러드';

const Photo_Analysis = ({ onNavigateToPhoto }) => {

  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.firstContainer}>
        <TouchableOpacity onPress={onNavigateToPhoto}>
          <Text style={styles.text}>카메라</Text>
        </TouchableOpacity>
        <Text style={styles.text}>                        식품분석                                   </Text>
      </View>

      <View style={styles.secondContainer}>
        <Text style={styles.middleText}>{FOOD}</Text>
      </View>

      <View style={styles.thirdContainer}>
      </View>

      <View style={styles.fourthContainer}>
        <Text style={styles.secondmiddleText}>주간 분석</Text>
      </View>

      <View style={styles.fifthContainer}></View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingVertical: 50,
  },
  firstContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  secondContainer: {
    flex: 0.1,
    marginTop: 30,
  },
  thirdContainer: {
    flex: 5,
    marginBottom: 10,
    width: SCREEN_HEIGHT / 2.4,
    backgroundColor: '#E2E2E2',
    borderRadius: 20,
    marginTop: 10,
    marginBottom: 10,
    
  },
  fourthContainer: {
    flex: 0.1,
    marginBottom: 10,
  },
  fifthContainer: {
    flex: 5,
    marginBottom: 10,
    width: SCREEN_HEIGHT / 2.4,
    backgroundColor: '#E2E2E2',
    borderRadius: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  middleText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#50a5ff',
  },
  secondmiddleText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  
});

export default Photo_Analysis;