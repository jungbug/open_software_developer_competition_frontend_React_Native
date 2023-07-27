import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { BarChart, Grid, XAxis } from 'react-native-svg-charts';

const Home = ({ onNavigateToMore, navigateToPhotoAnalysis, navigateToVideoAnalysis }) => {
  const USERNAME = '홍길동';

  const data = [10, 20, 30, 40, 50, 60, 70];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={[styles.firstContainer]}>
        <View style={styles.contentContainer}>
          <Text style={[styles.greeting, styles.text]}>안녕하세요</Text>
          <Text style={[styles.username, styles.text, { color: '#5f4ffe' }]}>
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
        <TouchableOpacity onPress={navigateToPhotoAnalysis}>
          <Image
            source={require('../../assets/Home_F.jpg')}
            style={styles.rectangleFood}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateToVideoAnalysis}>
          <Image
            source={require('../../assets/Home_E.jpg')}
            style={styles.rectangleVideo}
          />
        </TouchableOpacity>

      </View>

      {/* 세 번째 영역 */}
      <View style={[styles.thirdContainer]}>
        <View style={styles.contentContainer}>
          <Text style={[styles.third_username, { color: '#5f4ffe' }]}>
            {USERNAME}
          </Text>
          <Text style={[styles.third_greeting,]}>님의 주간분석                                     </Text>
          <View style={{ marginTop: -230, flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity onPress={onNavigateToMore}>
              <Text style={styles.buttonText}>추천식단</Text>
            </TouchableOpacity>
          </View>
        </View>
        <BarChart
          style={styles.chart}
          data={data}
          svg={{ fill: '#5f4ffe' }}
          spacingInner={0.6}
          spacingOuter={0.1}
          gridMin={5}
          animate
        >
        </BarChart>
        {/* 밑줄 추가 */}
        <View style={styles.chartFooterLine} />
        <Text>asdf</Text>
      </View>
    </ScrollView>
  );
};

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
    backgroundColor: '#E2E2E2',
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  chart: {
    width: 340,
    height: 150,
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
  button: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 5,
  },
  buttonText: {
    color: '#5f4ffe',
    fontSize: 18,
  },
  chartFooterLine: {
    borderTopWidth: 2,
    borderColor: 'black',
    width: '100%',
  },
});

export default Home;