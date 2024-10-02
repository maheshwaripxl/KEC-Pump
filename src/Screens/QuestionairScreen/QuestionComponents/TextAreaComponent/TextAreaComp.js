import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import Snackbar from 'react-native-snackbar';
import {DM_sans_Bold, HEIGHT, WIDTH} from '../../../../Config/AppConst';
import {useDispatch} from 'react-redux';
import {AnswerDataFunction} from '../../../../Redux/Reducers/OptionIDData';
import CustomButton from '../../../../Components/CustomButton/CustomButton';

const TextAreaComp = ({getProgress, APIresponse, postQuestionIdAPI}) => {
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
      // getProgress();
    }
  };

  return (
    <View style={{marginTop: HEIGHT(6), marginHorizontal: 20}}>
      <Text style={styles.discription}>
        {APIresponse[0]?.question_description}
      </Text>

      <Text style={styles.mainTitle}>{APIresponse[0]?.question_text}</Text>

      <TextInput
        value={inputValue}
        onChangeText={txt => setInputValue(txt)}
        style={styles.textareastyle}
        multiline
        placeholder={APIresponse[0]?.placeholder}
      />
      <View style={styles.button}>
        <CustomButton
          btnText={APIresponse[0]?.button}
          onpress={buttonFunction}
        />
      </View>
    </View>
  );
};

export default TextAreaComp;

const styles = StyleSheet.create({
  mainTitle: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 16,
    fontFamily: DM_sans_Bold,
  },

  discription: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 26,
    fontFamily: DM_sans_Bold,
  },

  textareastyle: {
    height: HEIGHT(30),
    width: WIDTH(90),
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 2,
    paddingVertical: 10,
    paddingHorizontal: 16,

    color: '#fff',
    fontSize: 16,
    textAlignVertical: 'top',
    marginTop: HEIGHT(4),
  },

  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    top: HEIGHT(73),
    gap: 10,
  },
});
