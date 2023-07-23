import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function Photo_Analysis() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.firstContainer}>
        <Text style={styles.text}>카메라</Text>
        <Text style={styles.text}>식품분석</Text>
      </View>

      <View style={styles.secondContainer}></View>

      <View style={styles.thirdContainer}></View>

      <View style={styles.fourthContainer}></View>

      <View style={styles.fifthContainer}></View>
    </ScrollView>
  );
}

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
    backgroundColor: 'red',
    marginBottom: 10,
  },
  secondContainer: {
    flex: 1,
    backgroundColor: 'green',
    marginBottom: 10,
  },
  thirdContainer: {
    flex: 4,
    backgroundColor: 'blue',
    marginBottom: 10,
  },
  fourthContainer: {
    flex: 1,
    backgroundColor: 'yellow',
    marginBottom: 10,
  },
  fifthContainer: {
    flex: 4,
    backgroundColor: 'orange',
    marginBottom: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
