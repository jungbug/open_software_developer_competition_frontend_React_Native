import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

export default function Home() {
  const USERNAME = '홍길동';

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* 첫 번째 영역 */}
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

      {/* 두 번째 영역 */}
      <View style={[styles.secondContainer, { backgroundColor: 'lightgreen' }]}>
        <Text style={styles.text}>두 번째 영역</Text>
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
