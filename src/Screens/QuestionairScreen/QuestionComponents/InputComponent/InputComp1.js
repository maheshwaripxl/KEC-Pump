import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import COLOR from '../../../../Config/color.json';
import CustomButton from '../../../../Components/CustomButton/CustomButton';
import {DM_sans_Bold, HEIGHT, WIDTH} from '../../../../Config/AppConst';
import Snackbar from 'react-native-snackbar';

const InputComp1 = ({
  count,
  setCount,
  getProgress,
  APIresponse,
  answerResponse,
  postQuestionIdAPI,
}) => {
  const [inputValue, setInputValue] = useState('');

  const buttonFunction = () => {
    if (inputValue == '') {
      Snackbar.show({
        text: 'Please fill out this field',
        backgroundColor: '#D1264A',
        duration: Snackbar.LENGTH_SHORT,
      });
    } else {
      postQuestionIdAPI(APIresponse[0]?.next_question_id);
      setInputValue('');
      setCount(count + 1);
      getProgress();
    }
  };

  return (
    <View style={{flex: 1}}>
      <View style={{marginHorizontal: 30}}>
        <Text style={{color: '#fff', position: 'absolute', right: 1}}>
          {count}/15
        </Text>
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

export default InputComp1;

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
    position: 'absolute',
    top: HEIGHT(57),
  },
});
