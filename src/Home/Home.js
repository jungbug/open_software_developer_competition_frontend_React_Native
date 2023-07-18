import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

export default function Home() {
  const USERNAME = '홍길동';

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={[styles.firstContainer]}>
        <View style={styles.contentContainer}>
          <Text style={[styles.greeting, styles.text]}>안녕하세요</Text>
          <Text style={[styles.username, styles.text, { color: '#9370DB' }]}>
            {USERNAME}
          </Text>
          <Text style={[styles.greeting, styles.text]}>님!                </Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/default_profile.png')}
            style={styles.image}
          />
        </View>
      </View>

      <View style={styles.secondContainer}>
        <View style={styles.rectangleFood} />
        <View style={styles.rectangleVideo} />
      </View>

      {/* 세 번째 영역 */}
      <View style={[styles.thirdContainer, { backgroundColor: 'lightpink' }]}>
        <Text style={styles.text}>세 번째 영역</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  firstContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  greeting: {
    fontSize: 20,
  },
  username: {
    fontSize: 20,
    marginLeft: 4,
  },
  imageContainer: {
    borderRadius: 50,
    overflow: 'hidden',
    marginLeft: 16,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  secondContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  rectangleFood: {
    width: 160,
    height: 90,
    backgroundColor: 'lightblue',
    marginBottom: 16,
    borderRadius: 10,
  },
  rectangleVideo: {
    width: 160,
    height: 90,
    backgroundColor: 'lightblue',
    marginBottom: 16,
    borderRadius: 10,
  },
  thirdContainer: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
