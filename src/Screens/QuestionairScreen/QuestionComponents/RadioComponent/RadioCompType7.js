import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {DM_sans_Bold, HEIGHT, WIDTH} from '../../../../Config/AppConst';
import CustomButton from '../../../../Components/CustomButton/CustomButton';
import Snackbar from 'react-native-snackbar';
import {Chip} from 'react-native-paper';
import {AnswerDataFunction} from '../../../../Redux/Reducers/OptionIDData';
import {useDispatch} from 'react-redux';

const RadioCompType7 = ({
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

  const ShowOptionsFunction = item => {
    return (
      <View style={{margin: 3}}>
        <Chip
          onPress={() => setSelectedButton(item?.item?.answer_id)}
          selected={item?.item?.answer_id === selectedButton}
          showSelectedCheck={false}
          style={
            selectedButton == item?.item?.answer_id
              ? styles.optionviewWrapperClrChng
              : styles.optionviewWrapper
          }
          textStyle={
            selectedButton == item?.item?.answer_id
              ? styles.TxtClrChng
              : styles.Txt
          }>
          {item?.item?.answer_text}
        </Chip>
      </View>
    );
  };
  return (
    <View style={{flex: 1, marginHorizontal: 11}}>
      <View style={{marginTop: HEIGHT(7)}}>
        <Text style={styles.mainTitle}>{APIresponse[0]?.question_text}</Text>

        <View
          style={{
            marginTop: HEIGHT(3),
            width: WIDTH(100),
          }}>
          <FlatList
            key={answerResponse?.answer_id}
            data={answerResponse}
            contentContainerStyle={{flexWrap: 'wrap', flexDirection: 'row'}}
            renderItem={({item}) => <ShowOptionsFunction item={item} />}
          />
        </View>

        <View style={styles.button}>
          {selectedButton == answerResponse[2]?.answer_id ? (
            <CustomButton
              btnText="GO TO HYGINE COMPLIANCE"
              onpress={() => buttonFunction()}
            />
          ) : (
            <CustomButton
              btnText="GO TO DRIVE"
              onpress={() => buttonFunction()}
            />
          )}
        </View>
      </View>
    </View>
  );
};

export default RadioCompType7;

const styles = StyleSheet.create({
  mainTitle: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 16,
    marginBottom: 6,
    fontFamily: DM_sans_Bold,
  },

  optionviewWrapper: {
    backgroundColor: '#bfbbbb',
  },

  optionviewWrapperClrChng: {
    backgroundColor: '#ad7807',
  },

  Txt: {
    color: 'black',
    alignSelf: 'center',
    fontSize: 11,
  },

  TxtClrChng: {
    color: '#fff',
    alignSelf: 'center',
    fontSize: 11,
  },

  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    gap: 10,
    top: HEIGHT(72),
  },
});
