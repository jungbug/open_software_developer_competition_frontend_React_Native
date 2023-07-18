import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.text}>안녕하세요 홍길동님!</Text>
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
  },
  text: {
    fontSize: 18,
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
});
