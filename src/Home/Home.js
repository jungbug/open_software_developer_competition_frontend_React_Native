import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { BarChart, Grid } from 'react-native-svg-charts';

export default function Home() {
  const USERNAME = '홍길동';

  const data = [20, 45, 28, 80, 99, 43, 60];

  const labels = ['월', '화', '수', '목', '금', '토', '일'];

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
        <Image
          source={require('../../assets/Home_F.jpg')}
          style={styles.rectangleFood}
        />
        <Image
          source={require('../../assets/Home_E.jpg')}
          style={styles.rectangleVideo}
        />
      </View>

      {/* 세 번째 영역 */}
      <View style={[styles.thirdContainer]}>
        <View style={styles.contentContainer}>
          <Text style={[styles.third_username, { color: '#9370DB' }]}>
            {USERNAME}
          </Text>
          <Text style={[styles.third_greeting,]}>님의 주간분석                         </Text>
          <Text style={[styles.third_username, { color: '#9370DB' }]}>
            추천식단 바로가기
          </Text>
        </View>
        <BarChart
          style={styles.chart}
          data={data}
          svg={{ fill: 'purple' }}
          contentInset={{ top: 20, bottom: 20 }}
          spacingInner={0.4}
          spacingOuter={0.1}
          gridMin={0}
          animate
        >
          <Grid direction={Grid.Direction.HORIZONTAL} />
        </BarChart>
        <View style={styles.labelContainer}>
          {labels.map((label, index) => (
            <Text key={index} style={styles.labelText}>
              {label}
            </Text>
          ))}
        </View>
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
    marginTop: 20,
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
    width: 90,
    height: 90,
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
    marginBottom: 16,
    borderRadius: 10,
  },
  rectangleVideo: {
    width: 160,
    height: 90,
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
  chart: {
    width: 300,
    height: 200,
  },
  third_greeting: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: -230,
  },
  third_username: {
    fontSize: 16,
    marginLeft: 4,
    fontWeight: 'bold',
    marginTop: -230,
  },
  labelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  labelText: {
    fontSize: 14,
    color: 'gray',
  },
});
