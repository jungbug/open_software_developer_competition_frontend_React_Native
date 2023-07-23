import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const FOOD = '샐러드';

const Photo_Analysis = ({ onNavigateToPhoto }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.firstContainer}>
      <TouchableOpacity onPress={onNavigateToPhoto}>
        <Text style={styles.text}>카메라</Text>
      </TouchableOpacity>
        <Text style={styles.text}>                         식품분석                                     </Text>
      </View>

      <View style={styles.secondContainer}>
        <Text style={styles.middleText}>{FOOD}</Text>
      </View>

      <View style={styles.thirdContainer}></View>

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
    paddingVertical: 20,
  },
  firstContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 10,
  },
  secondContainer: {
    flex: 1,
    marginBottom: 10,
  },
  thirdContainer: {
    flex: 4,
    backgroundColor: 'blue',
    marginBottom: 10,
  },
  fourthContainer: {
    flex: 1,
    marginBottom: 10,
  },
  fifthContainer: {
    flex: 4,
    backgroundColor: 'orange',
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