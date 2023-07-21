import React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const { height: SCREEN_HEIGHT } = Dimensions.get("window");
const { width: SCREEN_WIDTH } = Dimensions.get("window");

export default function More() {
  //const NUTRIENTS = [90, 10, 10, 10, 10];
  //const NUTRIENTS1 = [protein, bitamin, mineral, fiber, carbon];

  //const cal = 30;//칼로리

  const recList = [rec1 = "닭가슴살", rec2 = "샐러드", rec3 = "현미밥", rec4 = "삶은 고구마", rec5 = "삶은 계란"]; // 추천 식단 목록


  /*const proteinCal = () => {
    if (NUTRIENTS[0] > 50 && cal < 50) {
      recList[0] = "닭가슴살"
    }

  }*/

  const recExList = ["닭가슴살은 칼로리가 낮지만 고단백질입니다.", "샐러드는 비타민 및 무기질, 섬유질이 많고 포만감이 높습니다",
    "백미밥의 환경과는 달리, 쌀겨와 쌀눈에 있는 영양소를 섭취할 수 있게 됩니다 ...(설명)", "추천운동과 진행하며 지방을 에너지로...(설명)",
    "삶은 계란은 단백질 함량이 많기 때문에...(설명)"] // 식단 설명


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
        <View style={styles.recommendFood}>
          <Text style={styles.foodName}>{rec1}</Text>
          <Text style={styles.foodDetail}>{recExList[0]}</Text>
        </View>
        <View style={styles.recommendFood}>
          <Text style={styles.foodName}>{rec2}</Text>
          <Text style={styles.foodDetail}>{recExList[1]}</Text>
        </View>
        <View style={styles.recommendFood}>
          <Text style={styles.foodName}>{rec3}</Text>
          <Text style={styles.foodDetail}>{recExList[2]}</Text>
        </View>
        <View style={styles.recommendFood}>
          <Text style={styles.foodName}>{rec4}</Text>
          <Text style={styles.foodDetail}>{recExList[3]}</Text>
        </View>
        <View style={styles.recommendFood}>
          <Text style={styles.foodName}>{rec5}</Text>
          <Text style={styles.foodDetail}>{recExList[4]}</Text>
        </View>
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
    borderRadius: 20,
  },
  recommendFood: {
    flex: 1,
    justifyContent: "center",
  },
  foodName: {
    fontSize: 40,
    color: 'blue',
    marginLeft: 60,
    marginRight: 60,
  },
  foodDetail: {
    fontSize: 15,
    color: 'black',
    marginLeft: 60,
    marginRight: 60,
  },
});

/*function generateAllCombinations() {
  const variables = ['protein', 'vitamin', 'mineral', 'fiber', 'carbohydrate'];
  const totalCombinations = 2 ** variables.length; // 2의 n승 (n은 변수의 개수)

  for (let i = 0; i < totalCombinations; i++) {
    const combination = {};
    for (let j = 0; j < variables.length; j++) {
      const variableValue = (i & (1 << j)) !== 0;
      combination[variables[j]] = variableValue;
    }
  }
}*/