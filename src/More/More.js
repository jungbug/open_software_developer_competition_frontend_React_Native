import React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const { height: SCREEN_HEIGHT } = Dimensions.get("window");
const { width: SCREEN_WIDTH } = Dimensions.get("window");

export default function More() {
  const protein = { "닭가슴살": "닭가슴살은 칼로리가 낮지만 고단백질입니다.", "삶은 계란": "삶은 계란은 단백질 함량이 많기 때문에...(설명)" };
  const vitamin = { "치즈": "치즈에 들어있는 비타민A와 펩타이드는 항산화 작용으로 암세포 증식을 억제합니다.", "시금치": "시금치설명", "소의 간": "소의 간 설명" };
  const carbon = { "감자": "감자는 탄수화물이 많고 칼로리가 적으며 저렴하게 구할 수 있습니다.", "고구마": "고구마설명", "콩": "콩설명" };
  const province = { "아몬드": "아몬드는 지방함량이 높지만 적당히 섭취하면 몸에 흡수되지 않으며 포만감을 줍니다.", "연어": "연어설명", "고등어": "고등어설명" };
  const minerals = { "양파": "양파에는 많은 무기질이 있어 혈당 조절, 인슐린 생성 촉진, 당뇨 예방에 좋습니다.", "버섯": "버섯설명", "토마토": "토마토설명" };
  //음식:음식설명내용으로 딕셔너리 제작 후 수정 예정
  const NUTRIENTS = [10, 10, 10, 60, 15];

  /*const recList = []; // 추천 식단 목록-----음식 랜덤으로 추천해주는 반복문---

  if (NUTRIENTS[0] < 50) {
    recList[0] = protein[Math.floor(Math.random() * recList.length)];
  } else {
    recList[0] = "단백질은 충분합니다!"
  }
  if (NUTRIENTS[1] < 50) {
    recList[1] = vitamin[Math.floor(Math.random() * recList.length)];
  } else {
    recList[1] = "비타민은 충분합니다!"
  }
  if (NUTRIENTS[2] < 50) {
    recList[2] = carbon[Math.floor(Math.random() * recList.length)];
  } else {
    recList[2] = "탄수화물은 충분합니다!"
  }
  if (NUTRIENTS[3] < 50) {
    recList[3] = province[Math.floor(Math.random() * recList.length)];
  } else {
    recList[3] = "지방은 충분합니다!"
  }
  if (NUTRIENTS[4] < 50) {
    recList[4] = minerals[Math.floor(Math.random() * recList.length)];
  } else {
    recList[4] = "무기질은 충분합니다!"
  }
  */

  //추천 식단 랜덤 추천 개발 방향 정해지면 수정 예정

  //const proteinEx{}

  //const recEx = [recEc1, recEx2, recEx3, recEx4, recEx5];

  /* const recExList = ["닭가슴살은 칼로리가 낮지만 고단백질입니다.", "샐러드는 비타민 및 무기질, 섬유질이 많고 포만감이 높습니다",
     "백미밥의 환경과는 달리, 쌀겨와 쌀눈에 있는 영양소를 섭취할 수 있게 됩니다 ...(설명)", "추천운동과 진행하며 지방을 에너지로...(설명)",
     "삶은 계란은 단백질 함량이 많기 때문에...(설명)"] // 식단 설명*/

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
        <ScrollView contentContainerStyle={styles.container}>
          <ScrollView contentContainerStyle={styles.recommendFood}>
            <Text style={styles.foodName}>{Object.keys(protein)[0]}</Text>
            <Text style={styles.foodDetail}>{Object.values(protein)[0]}</Text>
          </ScrollView>
          <ScrollView contentContainerStyle={styles.recommendFood}>
            <Text style={styles.foodName}>{Object.keys(vitamin)[0]}</Text>
            <Text style={styles.foodDetail}>{Object.values(vitamin)[0]}</Text>
          </ScrollView>
          <ScrollView contentContainerStyle={styles.recommendFood}>
            <Text style={styles.foodName}>{Object.keys(carbon)[0]}</Text>
            <Text style={styles.foodDetail}>{Object.values(carbon)[0]}</Text>
          </ScrollView>
          <ScrollView contentContainerStyle={styles.recommendFood}>
            <Text style={styles.foodName}>{Object.keys(province)[0]}</Text>
            <Text style={styles.foodDetail}>{Object.values(province)[0]}</Text>
          </ScrollView>
          <ScrollView contentContainerStyle={styles.recommendFood}>
            <Text style={styles.foodName}>{Object.keys(minerals)[0]}</Text>
            <Text style={styles.foodDetail}>{Object.values(minerals)[0]}</Text>
          </ScrollView>
        </ScrollView>
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
    color: '#5f4ffe',
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
    backgroundColor: '#EDEDED',
    borderRadius: 20,
    padding: 20,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  recommendFood: {
    flex: 1,
    justifyContent: "center",

  },
  foodName: {
    fontSize: 30,
    color: '#50a5ff',
    marginLeft: 20,
    marginRight: 20,
    justifyContent: "flex-start",
  },
  foodDetail: {
    fontSize: 15,
    color: 'black',
    marginLeft: 20,
    marginRight: 20,
    justifyContent: "flex-start",
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