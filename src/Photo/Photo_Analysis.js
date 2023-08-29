import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { BarChart, XAxis } from 'react-native-svg-charts';
import AsyncStorage from '@react-native-async-storage/async-storage'; // AsyncStorage 임포트 추가
import { tellFoodName } from './Photo.js';
const foodName = tellFoodName(); // 변수명 변경

const API_URL = "http://openapi.foodsafetykorea.go.kr"; // 상수로 변경
const API_KEY = "415756d599f247a1bc19";

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get("window");

const Photo_Analysis = ({ onNavigateToPhoto }) => {
  const [proteinData, setProteinData] = useState([1, 2, 3, 4]); // 초기값으로 샘플 데이터 사용
  const labels = ['칼로리', '탄수화물', '단백질', '지방']; // x축 라벨

  const init = async (foodName) => { // 파라미터 이름 변경
    try {
      const response = await (await fetch(`${API_URL}/api/${API_KEY}/I2790/json/1/1000/DESC_KOR=${foodName}`)).json();
      let fetchedProteinData = [1, 2, 3, 4]; // 기본값으로 사용할 데이터
      for (let item of response.I2790.row) {
        if (item.DESC_KOR === foodName) {
          fetchedProteinData = [item.NUTR_CONT1, item.NUTR_CONT2, item.NUTR_CONT3, item.NUTR_CONT4];
          break;
        }
      }
      setProteinData(fetchedProteinData);
    } catch (e) {
      console.log("데이터가 없습니다")
    }
  };
  let samData = [1, 2, 3, 4]; 
  useEffect(() => {
    init(foodName); // 컴포넌트가 마운트되면 데이터 초기화
  }, []);
  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
    <View style={styles.firstContainer}>
      <TouchableOpacity onPress={onNavigateToPhoto}>
        <Text style={styles.text}>카메라</Text>
      </TouchableOpacity>
        <Text style={styles.text}>식품분석</Text>
    </View>


      <View style={styles.secondContainer}>
        <Text style={styles.middleText}>{foodName}</Text>
      </View>

      <View style={styles.thirdContainer}>
        {/* 단백질 데이터를 이용한 BarChart */}
        <BarChart
          style={{ height: 250, width: SCREEN_WIDTH * 0.8, alignSelf: 'center' }}
          data={proteinData.map((value) => value * 2)} // 샘플데이터의 값에 2를 곱해 임의의 주간 데이터 생성
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
      </View>

      <View style={styles.fourthContainer}>
        <Text style={styles.secondmiddleText}>주간 분석</Text>
      </View>

      <View style={styles.fifthContainer}>
        {/* 주간 데이터를 이용한 BarChart */}
        <BarChart
          style={{ height: 250, width: SCREEN_WIDTH * 0.8, alignSelf: 'center' }}
          data={samData} // 샘플데이터의 값에 2를 곱해 임의의 주간 데이터 생성
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
