import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {
  DM_sans_Bold,
  DM_sans_Medium,
  HEIGHT,
} from '../../../../Config/AppConst';
import CustomButton from '../../../../Components/CustomButton/CustomButton';

const RadioCompType3 = ({
  count,
  setCount,
  getProgress,
  APIresponse,
  answerResponse,
  postQuestionIdAPI,
}) => {
  const [selectedButton, setSelectedButton] = useState(null);

  const buttonFunction = () => {
    postQuestionIdAPI(APIresponse[0]?.next_question_id, selectedButton);
    getProgress();
    setCount(count + 1);
  };

  return (
    <View>
      <View style={{marginTop: HEIGHT(10), marginHorizontal: 20}}>
        <View>
          <Text style={styles.mainTitle}>{APIresponse[0]?.question_text}</Text>
        </View>

        <View style={[styles.viewWrapper, {justifyContent: 'center'}]}>
          <TouchableOpacity
            style={
              selectedButton == answerResponse[1]?.answer_id
                ? styles.yesNoBtnClrChng
                : styles.yesNoBtn
            }
            isSelect={answerResponse[1]?.answer_id === selectedButton}
            onPress={() => setSelectedButton(answerResponse[1]?.answer_id)}>
            <Text
              style={
                selectedButton == answerResponse[1]?.answer_id
                  ? styles.yesNoTxtClrChng
                  : styles.yesNoTxt
              }>
              {answerResponse[1]?.answer_text}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              selectedButton == answerResponse[0]?.answer_id
                ? styles.yesNoBtnClrChng
                : styles.yesNoBtn
            }
            isSelect={answerResponse[0]?.answer_id === selectedButton}
            onPress={() => setSelectedButton(answerResponse[0]?.answer_id)}>
            <Text
              style={
                selectedButton == answerResponse[0]?.answer_id
                  ? styles.yesNoTxtClrChng
                  : styles.yesNoTxt
              }>
              {answerResponse[0]?.answer_text}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.button}>
          <CustomButton
            btnText={APIresponse[0]?.button}
            onpress={buttonFunction}
          />
        </View>
      </View>
    </View>
  );
};

export default RadioCompType3;

const styles = StyleSheet.create({
  mainTitle: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 16,
    fontFamily: DM_sans_Bold,
  },

  viewWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 48,
  },

  yesNoBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    width: 115,
    borderColor: 'white',
    borderWidth: 1,
  },

  yesNoBtnClrChng: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    width: 115,
    borderColor: 'white',
    backgroundColor: '#fff',
    borderWidth: 1,
  },

  yesNoTxt: {
    color: '#fff',
    fontFamily: DM_sans_Medium,
  },

  yesNoTxtClrChng: {
    color: 'black',
    fontFamily: DM_sans_Medium,
  },

  button: {
    position: 'absolute',
    top: HEIGHT(67),
  },
});
