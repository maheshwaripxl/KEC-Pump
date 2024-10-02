import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import COLOR from '../../../../Config/color.json';
import CustomButton from '../../../../Components/CustomButton/CustomButton';
import {DM_sans_Bold, HEIGHT, WIDTH} from '../../../../Config/AppConst';
import Snackbar from 'react-native-snackbar';
import {useDispatch} from 'react-redux';
import {AnswerDataFunction} from '../../../../Redux/Reducers/OptionIDData';

const TextInputComp = ({
  getProgress,
  APIresponse,
  answerResponse,
  postQuestionIdAPI,
  handleNext,
}) => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');

  const buttonFunction = () => {
    if (inputValue == '') {
      Snackbar.show({
        text: 'Please fill out this field',
        backgroundColor: '#D1264A',
        duration: Snackbar.LENGTH_SHORT,
      });
    } else {
      dispatch(
        AnswerDataFunction({
          question_id: APIresponse[0]?.id,
          answerID: '',
          inputData: inputValue ?? '',
        }),
      );
      postQuestionIdAPI(APIresponse[0]?.next_question_id);
      setInputValue('');
      getProgress();
    }
  };

  return (
    <View style={{flex: 1}}>
      <View style={{marginHorizontal: 30}}>
        {/* <Text style={{color: '#fff', position: 'absolute', right: 1}}>
          {count}/15
        </Text> */}
        <View style={{marginTop: HEIGHT(20)}}>
          <View>
            <Text style={styles.title1}>{APIresponse[0]?.question_text}</Text>
          </View>

          <View style={styles.inputView}>
            <TextInput
              value={inputValue}
              onChangeText={text => setInputValue(text)}
              placeholderTextColor={'#fff'}
              style={styles.input}
            />
          </View>

          <View style={styles.button}>
            <CustomButton
              btnText={APIresponse[0]?.button}
              onpress={buttonFunction}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default TextInputComp;

const styles = StyleSheet.create({
  title1: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 16,
    fontFamily: DM_sans_Bold,
  },

  inputView: {
    borderWidth: 1,
    borderColor: '#fff',
    padding: 9,
    width: WIDTH(85),
    height: HEIGHT(8),
    marginTop: HEIGHT(5),
    borderRadius: 5,
  },

  input: {
    width: WIDTH(85),
    color: COLOR.White,
  },

  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    top: HEIGHT(57),
    gap: 10,
  },
});
