import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function More() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="chevron-back-outline" size={24} color="#000" />
        <Text style={styles.headerText}>홈</Text>
        <Text style={styles.headerText}>                              </Text>
        <Text style={styles.headerText}>추천식단</Text>
        <Text style={styles.headerText}>                                        </Text>
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
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  middleText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#9370DB',
    marginTop: -50,
    marginLeft: -220,
  },
  middle: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  last: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f111',
  },
});
