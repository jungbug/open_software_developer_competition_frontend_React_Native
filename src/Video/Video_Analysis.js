import React from 'react';
import { View, Image, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';

const { height: SCREEN_HEIGHT } = Dimensions.get("window");
const { width: SCREEN_WIDTH } = Dimensions.get("window");
const getData = async () => {
  try {
    const accessToken = await AsyncStorage.getItem('accessToken');
    console.log('accessToken:', accessToken);
  } catch (error) {
    console.error('Error getting data:', error);
  }
};

const CORRECTION_INDEX1 = "팔이 너무 벌어져있습니다. 양팔을 어깨너비로 벌리고 편하게 엎드리세요. \n\n무릎이 접혀져있습니다. 무릎을 피고 힘을 풀지 마세요.\n\n엉덩이가 위로 올라와있습니다. 복부에 힘을 주고 다시 해보세요."//서버에서 받을 내용

//const exercise = [plank, pushup, pullup, planche, situp, squat, dips, burpee, bridge, lunge];
//운동 종목:종목메뉴얼 방식으로 딕셔너리 제작 예정
const PLANK_MANUAL = "1. 엎드린 자세에서 팔뚝으로 중심을 잡고 다리는 약간 벌린 상태로 일자를 유지한다. 몸은 전체에 걸쳐 일자상태를 유지한다.\n\n2. 팔꿈치와 어깨는 일자를 유지한다.\n\n3. 복부에 힘을 주고 몸을 앞으로 들어 올린다. 수축을 몇 초간 유지한다. 턱은 약간 잡아당긴다. 운동을 실시하는 동안 복근을 계속 수축하게 한다. 의식적으로 힘을 주면서 복부의 모든 근육에 대해 집중하면서 운동하는 것이 매우 중요하다. 그것과 동시에 둔부에 힘을 주고 발가락을 바닥에 지지대 삼아 뒤꿈치를 밀어 주면서 하체 전체를 뒤로 밀어내는 감각으로 뻗으면 엉덩이도 자연스럽게 내려오고 어깨와 팔에 하중이 경감된다. 고개는 너무 떨구는 일이 없도록 한다.\n\n4. 이 자세를 최소 15초 동안 유지한다."
export default function Video_Analysis() {
  return (
    <View>
      <Image
        source={require('../../assets/Plank.jpg')}
        style={styles.imageE} />
      <View style={styles.correction}>
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.correctionTitle}>
            교정사항
          </Text>
          <Text style={styles.correctionSub}>
            {CORRECTION_INDEX1}
          </Text>
        </ScrollView>
      </View>
      <View style={styles.manual}>
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.manualTitle}>
            플랭크 메뉴얼
          </Text>
          <Text style={styles.manualSub}>
            {PLANK_MANUAL}
          </Text>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageE: {
    flex: 1,
    width: SCREEN_HEIGHT / 2.4,
    borderRadius: 20,
    marginBottom: 10,
  },
  correction: {
    flex: 1,
    width: SCREEN_HEIGHT / 2.4,
    backgroundColor: '#E2E2E2',
    borderRadius: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  correctionTitle: {
    fontSize: 25,
    color: '#50a5ff',
    marginTop: 15,
    marginLeft: 20,
    marginRight: 20,
    justifyContent: "flex-start",
    fontWeight: 'bold'
  },
  correctionSub: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
  },
  manual: {
    flex: 2,
    width: SCREEN_HEIGHT / 2.4,
    backgroundColor: '#E2E2E2',
    borderRadius: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  manualTitle: {
    color: '#5f4ffe',
    fontSize: 25,
    marginTop: 15,
    marginLeft: 20,
    marginRight: 20,
    justifyContent: "flex-start",
    fontWeight: 'bold'
  },
  manualSub: {
    
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
  },


});