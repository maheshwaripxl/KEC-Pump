import { Text, ActivityIndicator, View, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { DM_sans_Bold, HEIGHT } from '../../../../Config/AppConst';
import InputBtn from '../../../../Components/InputBtn/InputBtn';
import CustomButton from '../../../../Components/CustomButton/CustomButton';
import Snackbar from 'react-native-snackbar';
import { useDispatch } from 'react-redux';
import { AnswerDataFunction } from '../../../../Redux/Reducers/OptionIDData';

const RadioCompType2 = ({
  count,
  setCount,
  loader,
  getProgress,
  APIresponse,
  postQuestionIdAPI,
}) => {

  const dispatch = useDispatch()

  // console.log('APIresponse?.question', APIresponse?.question);

  const [selectedButton, setSelectedButton] = useState(null);

  console.log('selectedButton', selectedButton);

  const buttonFunction = () => {
    if (selectedButton == '') {
      Snackbar.show({
        text: 'Select atleast one option',
        backgroundColor: '#D1264A',
        duration: Snackbar.LENGTH_SHORT,
      });
    } else {
      if (selectedButton == 6 && selectedButton == 7) {
        setCount(6)
        getProgress();
        // dispatch(AnswerDataFunction({ answerID: selectedButton }))
        postQuestionIdAPI(13, selectedButton)
      } else {
        setCount(5);
        getProgress()
        // dispatch(AnswerDataFunction({ answerID: selectedButton }))
        postQuestionIdAPI(5, selectedButton)
      }
    }
  };

  return (
    <View>
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
          <View style={{ marginTop: HEIGHT(16) }}>
            <View>
              <Text
                style={{
                  color: '#fff',
                  fontWeight: '500',
                  fontSize: 16,
                  fontFamily: DM_sans_Bold,
                }}>
                {APIresponse?.question?.question_text}
              </Text>
            </View>
            <View style={{ marginTop: 10 }}>
              <InputBtn
                title={APIresponse?.answers?.[0]?.answer_text}
                isSelected={APIresponse?.answers?.answer_id === 4}
                onPress={() => {
                  setSelectedButton(4);
                }}
              />
              <InputBtn
                title={APIresponse?.answers?.[1]?.answer_text}
                isSelected={APIresponse?.answers?.answer_id === 5}
                onPress={() => {
                  setSelectedButton(5);
                }}
              />
              <InputBtn
                title={APIresponse?.answers?.[2]?.answer_text}
                isSelected={APIresponse?.answers?.answer_id === 6}
                onPress={() => {
                  setSelectedButton(6);
                }}
              />
              <InputBtn
                title={APIresponse?.answers?.[3]?.answer_text}
                isSelected={APIresponse?.answers?.answer_id === 7}
                onPress={() => {
                  setSelectedButton(7);
                }}
              />
            </View>

            <View
              style={{
                position: 'absolute',
                top: HEIGHT(61),
              }}>
              {selectedButton === 4 || selectedButton === 5 ? (
                <CustomButton
                  btnText="GO TO VISCOSITY"
                  onpress={() => buttonFunction()}
                />
              ) : (
                <CustomButton
                  btnText="GO TO SEALLESS"
                  onpress={() => buttonFunction()}
                />
              )}
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

export default RadioCompType2;

export const styles = StyleSheet.create({});
