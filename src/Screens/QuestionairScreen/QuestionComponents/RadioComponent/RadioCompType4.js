import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {DM_sans_Bold, HEIGHT, WIDTH} from '../../../../Config/AppConst';
import CustomButton from '../../../../Components/CustomButton/CustomButton';
import Snackbar from 'react-native-snackbar';
import {AnswerDataFunction} from '../../../../Redux/Reducers/OptionIDData';
import {useDispatch} from 'react-redux';

const RadioCompType4 = ({
  getProgress,
  APIresponse,
  answerResponse,
  postQuestionIdAPI,
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
      if (selectedButton == answerResponse[2]?.answer_id) {
        dispatch(
          AnswerDataFunction({
            question_id: APIresponse[0]?.id,
            answerID: selectedButton ?? '',
            inputData: '',
          }),
        );
        postQuestionIdAPI(APIresponse[0]?.next_question_id, selectedButton);
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
        // getProgress();
      }
    }
  };

  return (
    <View style={{flex: 1, marginHorizontal: 20}}>
      {/* <Text style={{color: '#fff', position: 'absolute', right: 1}}>
        {count}/15
      </Text> */}

      <View style={{marginTop: HEIGHT(7)}}>
        <Text style={styles.mainTitle}>{APIresponse[0]?.question_text}</Text>

        <View style={{flexDirection: 'row', marginTop: HEIGHT(3)}}>
          <TouchableOpacity
            style={
              selectedButton == answerResponse[0]?.answer_id
                ? styles.optionviewWrapperClrChng
                : styles.optionviewWrapper
            }
            onPress={() => setSelectedButton(answerResponse[0]?.answer_id)}
            isSelected={answerResponse[0]?.answer_id === selectedButton}>
            <Text
              style={
                selectedButton == answerResponse[0]?.answer_id
                  ? styles.TxtClrChng
                  : styles.Txt
              }>
              {answerResponse[0]?.answer_text}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={
              selectedButton == answerResponse[1]?.answer_id
                ? styles.optionviewWrapperClrChng
                : styles.optionviewWrapper
            }
            isSelected={answerResponse[1]?.answer_id === selectedButton}
            onPress={() => setSelectedButton(answerResponse[1]?.answer_id)}>
            <Text
              style={
                selectedButton == answerResponse[1]?.answer_id
                  ? styles.TxtClrChng
                  : styles.Txt
              }>
              {answerResponse[1]?.answer_text}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={
              selectedButton == answerResponse[2]?.answer_id
                ? styles.optionviewWrapperClrChng
                : styles.optionviewWrapper
            }
            isSelected={answerResponse[2]?.answer_id === selectedButton}
            onPress={() => setSelectedButton(answerResponse[2]?.answer_id)}>
            <Text
              style={
                selectedButton == answerResponse[2]?.answer_id
                  ? styles.TxtClrChng
                  : styles.Txt
              }>
              {answerResponse[2]?.answer_text}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.button}>
          {selectedButton == answerResponse[2]?.answer_id ? (
            <CustomButton
              btnText="GO TO SELF PRIMING"
              onpress={() => buttonFunction()}
            />
          ) : (
            <CustomButton
              btnText="GO TO SUBMERSIBILITY"
              onpress={() => buttonFunction()}
            />
          )}
        </View>
      </View>
    </View>
  );
};

export default RadioCompType4;

const styles = StyleSheet.create({
  mainTitle: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 16,
    marginBottom: 6,
    fontFamily: DM_sans_Bold,
  },

  viewWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },

  forView: {
    borderWidth: 1,
    padding: 10,
    width: WIDTH(40),
    borderColor: '#fff',
    marginTop: 10,
    borderRadius: 10,
    marginRight: 10,
  },

  optionviewWrapper: {
    borderWidth: 1,
    padding: 10,
    width: WIDTH(30),
    borderColor: '#fff',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: HEIGHT(7),
  },

  optionviewWrapperClrChng: {
    borderWidth: 1,
    padding: 10,
    width: WIDTH(30),
    borderColor: '#fff',
    backgroundColor: '#fff',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: HEIGHT(7),
  },

  Txt: {
    color: '#fff',
    alignSelf: 'center',
  },

  TxtClrChng: {
    color: 'black',
    alignSelf: 'center',
  },

  inputView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    padding: 0,
    height: 50,
    width: WIDTH(50),
    borderColor: '#fff',
    borderRadius: 10,
  },

  forText: {
    color: '#fff',
    alignSelf: 'center',
    marginLeft: 20,
  },

  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    gap: 10,
    top: HEIGHT(72),
  },

  optionBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    width: 110,
    borderColor: 'white',
    borderWidth: 1,
  },
});
