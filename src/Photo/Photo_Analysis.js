import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'; // AsyncStorage 임포트 추가
import { tellFoodName } from './Photo.js';
import { API_URL, API_KEY } from '@env';
const foodName = tellFoodName();

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get("window");

const Photo_Analysis = ({ onNavigateToPhoto }) => {
  const [proteinData, setProteinData] = useState([1, 1, 1, 1]); // 초기값으로 샘플 데이터 사용
  const labels = ['칼로리', '탄수화물', '지방', '단백질']; // x축 라벨

  const init = async (foodName) => {
    try {
      const response = await (await fetch(`${API_URL}/api/${API_KEY}/I2790/json/1/1000/DESC_KOR=${foodName}`)).json();
      let fetchedProteinData = [1, 1, 1, 1]; // 기본값으로 사용할 데이터
      for (let item of response.I2790.row) {
        if (item.DESC_KOR === foodName) {
          fetchedProteinData = [item.NUTR_CONT1, item.NUTR_CONT2, item.NUTR_CONT4, item.NUTR_CONT3];
          break;
        }
      }
      setProteinData(fetchedProteinData);
    } catch (e) {
      console.log("데이터가 없습니다")
    }
  };

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
        <View style={styles.nutritionInfo}>
          <NutritionInfo label="칼로리" value={proteinData[0]} />
          <NutritionInfo label="탄수화물" value={proteinData[1]} />
          <NutritionInfo label="지방" value={proteinData[2]} />
          <NutritionInfo label="단백질" value={proteinData[3]} />
        </View>
      </View>

      <View style={styles.fourthContainer}>
        <Text style={styles.secondmiddleText}>주간 분석(예시)</Text>
      </View>

      <View style={styles.fifthContainer}>
      <View style={styles.nutritionInfo}>
    <NutritionInfo label="칼로리" value={proteinData[0]} />
    <NutritionInfo label="탄수화물" value={proteinData[1]} />
    <NutritionInfo label="지방" value={proteinData[2]} />
    <NutritionInfo label="단백질" value={proteinData[3]} />
  </View>
      </View>
    </ScrollView>
  );
};

const NutritionInfo = ({ label, value }) => (
  <View style={styles.nutritionInfoItem}>
    <View style={styles.nutritionInfoItemLabel}>
      <Text style={styles.nutritionLabel}>{label}</Text>
    </View>
    <View style={styles.nutritionInfoItemValue}>
      <Text style={styles.nutritionValue}>{value}</Text>
    </View>
  </View>
);

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
    padding: 20,
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
  nutritionInfo: {
    flexDirection: 'column', // 세로로 정렬
    alignItems: 'center',
  },
  nutritionInfoItem: {
    flexDirection: 'row', // 가로로 정렬
    justifyContent: 'space-between', // 라벨과 값 사이의 간격을 벌립니다.
    marginVertical: 10, // 각 항목을 위아래로 여백을 줍니다.
    alignItems: 'center',
  },
  nutritionInfoItemLabel: {
    flex: 1, // 라벨 영역이 화면 너비의 절반을 차지하도록 설정
  },
  nutritionInfoItemValue: {
    flex: 1, // 수치 영역이 화면 너비의 절반을 차지하도록 설정
    alignItems: 'flex-end', // 수치를 오른쪽으로 정렬
  },
  nutritionLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  nutritionValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#50a5ff',
  },
});

export default Photo_Analysis;
