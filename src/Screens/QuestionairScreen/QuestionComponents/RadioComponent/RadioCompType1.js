import { StyleSheet, ActivityIndicator, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import COLOR from '../../../../Config/color.json';
import CustomButton from '../../../../Components/CustomButton/CustomButton';
import { DM_sans_Bold, HEIGHT } from '../../../../Config/AppConst';
import ApiManager from '../../../../API/Api';
import InputBtn from '../../../../Components/InputBtn/InputBtn';


const RadioCompType1 = ({ count, setCount, getProgress, postQuestionIdAPI }) => {
  const [selectedButton, setSelectedButton] = useState(null);
  const [loader, setLoader] = useState(false);
  const [quesResponse, setQuesResponse] = useState([]);
  const [ansResponse, setAnsResponse] = useState([]);

  useEffect(() => {
    QuestionsAPI();
  }, []);

  // console.log('ansResponse', ansResponse);
  // console.log('quesResponse', quesResponse);
  
  

  // Get 1st Question Api
  const QuestionsAPI = () => {
    setLoader(true);
    ApiManager.get1stQuestion()
      .then(res => {
        const quesresponse = res?.data?.question;
        setQuesResponse(quesresponse);
        const ansresponse = res?.data?.answers;
        setAnsResponse(ansresponse);
        setLoader(false);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const buttonFunction = () => {
    setCount(count + 1);
    getProgress();
    postQuestionIdAPI(quesResponse?.next_question_id, selectedButton)
  };

  return (
    <View style={{ flex: 1 }}>
      {loader ? (
        <ActivityIndicator
          size="large"
          color={COLOR.white}
          style={styles.loader}
        />
      ) : (
        <View style={{ marginHorizontal: 30 }}>
          <Text style={{ color: '#fff', position: 'absolute', right: 1 }}>
            {count}/15
          </Text>
          <View style={{ marginTop: HEIGHT(20) }}>
            <View>
              <Text style={styles.mainTitle}>
                {quesResponse?.question_text}
              </Text>
            </View>
            <View style={{ marginTop: 10 }}>
              <InputBtn
                title={ansResponse[0]?.answer_text}
                isSelected={ansResponse?.answer_id === 1}
                onPress={() => {
                  setSelectedButton(1);
                }}
              />
              <InputBtn
                title={ansResponse[1]?.answer_text}
                isSelected={ansResponse?.answer_id === 2}
                onPress={() => {
                  setSelectedButton(2);
                }}
              />
              <InputBtn
                title={ansResponse[2]?.answer_text}
                isSelected={ansResponse?.answer_id === 3}
                onPress={() => {
                  setSelectedButton(3);
                }}
              />
            </View>

            <View style={styles.button}>
              <CustomButton
                btnText="GO TO REQUIRED QUANTITY"
                onpress={() => buttonFunction()}
              />
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

export default RadioCompType1;

export const styles = StyleSheet.create({
  forCount: {
    color: '#fff',
    position: 'absolute',
    right: 1,
  },

  mainTitle: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 16,
    fontFamily: DM_sans_Bold,
  },

  wrapper: {
    marginTop: HEIGHT(20),
  },

  button: {
    position: 'absolute',
    top: HEIGHT(57),
  },

  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
