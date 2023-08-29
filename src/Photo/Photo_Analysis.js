import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { BarChart, XAxis, YAxis, Grid } from 'react-native-svg-charts';
import { tellFoodName } from './Photo.js';
const result = tellFoodName();

// env파일에 넣어야함
API_URL = "http://openapi.foodsafetykorea.go.kr"
API_KEY = "415756d599f247a1bc19"
let flag = false;
const init = async (result) => {
  try{
    const response = await(await fetch(`${API_URL}/api/${API_KEY}/I2790/json/1/1000/DESC_KOR=${result}`)).json();
    console.log(response);
    for (let item of response.I2790.row) {
      if(item.DESC_KOR === result){
        console.log(item);
        flag = true;
        break;
      }
    }
    if(!flag){
      console.log(response.I2790.row[0]); 
    }
  } catch (e) {
    console.log("데이터가 없습니다")
  }
};

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get("window");

const Photo_Analysis = ({ onNavigateToPhoto }) => {
  const getData = async () => {
    try {
      const accessToken = await AsyncStorage.getItem('accessToken');
      console.log('accessToken:', accessToken);
    } catch (error) {
      console.error('Error getting data:', error);
    }
  };

  const proteinData = [1, 2, 3, 4]; // 샘플데이터
  const labels = ['칼로리', '단백질', '탄수화물', '지방']; // x축 라벨

  // y축 눈금 계산
  const maxData = Math.max(...proteinData);
  const yTicks = Array.from({ length: 10 }, (_, i) => i * (maxData / 4));

  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
    <View style={styles.firstContainer}>
      <TouchableOpacity onPress={onNavigateToPhoto}>
        <Text style={styles.text}>카메라</Text>
      </TouchableOpacity>
        <Text style={styles.text}>식품분석</Text>
    </View>


      <View style={styles.secondContainer}>
        <Text style={styles.middleText}>{result}</Text>
      </View>

      <View style={styles.thirdContainer}>
        {/* 단백질 데이터를 이용한 BarChart */}
        <BarChart
          style={{ height: 250, width: SCREEN_WIDTH * 0.8, alignSelf: 'center' }}
          data={proteinData}
          svg={{ fill: '#50a5ff' }}
          contentInset={{ top: 20, bottom: 20 }}
          spacingInner={0.4}
          yMin={0} // y축 최솟값을 0으로 설정
        >

        </BarChart>
        <XAxis
          style={{ marginHorizontal: 30 }}
          data={proteinData}
          formatLabel={(value, index) => labels[index]}
          contentInset={{ left: 20, right: 20 }} // 라벨과 그래프 사이의 간격을 조절
          svg={{ fontSize: 12, fill: 'black' }}
        />
        {/* <YAxis
          style={{ position: 'absolute', top: -20, bottom: 140, left: 10 }}
          data={yTicks} // 수정된 yTicks를 사용하여 y축 눈금 설정
          formatLabel={(value) => `${value.toFixed(0)}g`} // 소수점 1자리까지 표시
          svg={{ fontSize: 10, fill: 'black' }}
          contentInset={{ top: 20, bottom: 20 }}
          numberOfTicks={5}
        /> */}
      </View>

      <View style={styles.fourthContainer}>
        <Text style={styles.secondmiddleText}>주간 분석</Text>
      </View>

      <View style={styles.fifthContainer}>
        {/* 주간 데이터를 이용한 BarChart */}
        <BarChart
          style={{ height: 250, width: SCREEN_WIDTH * 0.8, alignSelf: 'center' }}
          data={proteinData.map((value) => value * 2)} // 샘플데이터의 값에 2를 곱해 임의의 주간 데이터 생성
          svg={{ fill: '#5f4ffe' }}
          contentInset={{ top: 20, bottom: 20 }}
          spacingInner={0.4}
          yMin={0} // y축 최솟값을 0으로 설정
        >
        </BarChart>
        <XAxis
          style={{ marginHorizontal: 30 }}
          data={proteinData}
          formatLabel={(value, index) => labels[index]}
          contentInset={{ left: 20, right: 20 }} // 라벨과 그래프 사이의 간격을 조절
          svg={{ fontSize: 12, fill: 'black' }}
        />
        {/* <YAxis
          style={{ position: 'absolute', top: -20, bottom: 140, left: 10 }}
          data={yTicks} // 수정된 yTicks를 사용하여 y축 눈금 설정
          formatLabel={(value) => `${value.toFixed(0)}g`} // 소수점 1자리까지 표시
          svg={{ fontSize: 10, fill: 'black' }}
          contentInset={{ top: 20, bottom: 20 }}
          numberOfTicks={5}
        /> */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingVertical: 50,
  },
  firstContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: SCREEN_HEIGHT * 0.01,
    marginLeft: SCREEN_WIDTH * 0.02,
    marginRight: SCREEN_WIDTH * 0.39,
  },
  secondContainer: {
    flex: 0.1,
    marginTop: 30,
  },
  thirdContainer: {
    flex: 5,
    marginBottom: 10,
    width: SCREEN_HEIGHT / 2.4,
    backgroundColor: '#E2E2E2',
    borderRadius: 20,
    marginTop: 10,
    marginBottom: 10,
    alignSelf: 'center',
  },
  fourthContainer: {
    flex: 0.1,
    marginBottom: 10,
  },
  fifthContainer: {
    flex: 5,
    marginBottom: 10,
    width: SCREEN_HEIGHT / 2.4,
    backgroundColor: '#E2E2E2',
    borderRadius: 20,
    marginTop: 10,
    marginBottom: 10,
    alignSelf: 'center',
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
