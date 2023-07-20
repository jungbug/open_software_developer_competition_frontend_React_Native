import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function More() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>추천식단</Text>
      </View>

      <View style={styles.middle}>
        <Text style={styles.middleText}>추천식단</Text>
      </View>

      {/* 마지막 부분 */}
      <View style={styles.last}>
        {/* 마지막 부분 내용을 채워주세요 */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f',
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  middleText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  middle: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f21',
  },
  last: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f111',
  },
});
