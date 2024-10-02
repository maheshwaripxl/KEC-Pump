import {Text, ActivityIndicator, View, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {DM_sans_Bold, HEIGHT} from '../../../../Config/AppConst';
import InputBtn from '../../../../Components/InputBtn/InputBtn';
import CustomButton from '../../../../Components/CustomButton/CustomButton';
import Snackbar from 'react-native-snackbar';
import {AnswerDataFunction} from '../../../../Redux/Reducers/OptionIDData';
import {useDispatch} from 'react-redux';

const RadioCompType2 = ({
  loader,
  getProgress,
  APIresponse,
  answerResponse,
  postQuestionIdAPI,
  postMultiQuestionIdAPI,
  handleNext,
}) => {
  const dispatch = useDispatch();
  const [selectedButton, setSelectedButton] = useState(null);

  const buttonFunction = () => {
    if (selectedButton == null) {
      Snackbar.show({
        text: 'Select atleast one option',
        backgroundColor: '#D1264A',
        duration: Snackbar.LENGTH_SHORT,
      });
    } else {
      if (selectedButton == 6 || selectedButton == 7) {
        dispatch(
          AnswerDataFunction({
            question_id: APIresponse[0]?.id,
            answerID: selectedButton ?? '',
            inputData: '',
          }),
        );
        postQuestionIdAPI(APIresponse[0]?.next_question_id, selectedButton);
        // handleNext()
        // getProgress();
      } else {
        dispatch(
          AnswerDataFunction({
            question_id: APIresponse[0]?.id,
            answerID: selectedButton ?? '',
            inputData: '',
          }),
        );
        postQuestionIdAPI(APIresponse[0]?.next_question_id, selectedButton);
        // handleNext()
        // getProgress();
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
        <View style={{marginHorizontal: 30}}>
          {/* <Text style={{color: '#fff', position: 'absolute', right: 1}}>
            {count}/15
          </Text> */}
          <View style={{marginTop: HEIGHT(16)}}>
            <View>
              <Text style={styles.mainTitle}>
                {APIresponse[0]?.question_text}
              </Text>
            </View>
            <View style={{marginTop: 10}}>
              <InputBtn
                title={answerResponse[0]?.answer_text}
                isSelected={answerResponse[0]?.answer_id === selectedButton}
                onPress={() => {
                  setSelectedButton(answerResponse[0]?.answer_id);
                }}
              />
              <InputBtn
                title={answerResponse[1]?.answer_text}
                isSelected={answerResponse[1]?.answer_id === selectedButton}
                onPress={() => {
                  setSelectedButton(answerResponse[1]?.answer_id);
                }}
              />
              <InputBtn
                title={answerResponse[2]?.answer_text}
                isSelected={answerResponse[2]?.answer_id === selectedButton}
                onPress={() => {
                  setSelectedButton(answerResponse[2]?.answer_id);
                }}
              />
              <InputBtn
                title={answerResponse[3]?.answer_text}
                isSelected={answerResponse[3]?.answer_id === selectedButton}
                onPress={() => {
                  setSelectedButton(answerResponse[3]?.answer_id);
                }}
              />
            </View>

            <View style={styles.button}>
              {selectedButton == answerResponse[0]?.answer_id ||
              selectedButton == answerResponse[1]?.answer_id ? (
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

export const styles = StyleSheet.create({
  mainTitle: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 16,
    fontFamily: DM_sans_Bold,
  },

  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    top: HEIGHT(61),
    gap: 10,
  },
});
