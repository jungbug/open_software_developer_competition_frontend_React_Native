import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Home() {
  const USERNAME = '홍길동';

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={[styles.greeting, styles.boldText]}>안녕하세요</Text>
        <Text style={[styles.USERNAME, styles.boldText, { color: '#9370DB' }]}>{USERNAME}</Text>
        <Text style={[styles.greeting, styles.boldText]}>님!</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/default_profile.png')}
          style={styles.image}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginTop: -500,
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  greeting: {
    fontSize: 20,
  },
  USERNAME: {
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
  boldText: {
    fontWeight: 'bold',
  },
});
