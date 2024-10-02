import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {DM_sans_Bold, HEIGHT, WIDTH} from '../../../../Config/AppConst';
import CustomButton from '../../../../Components/CustomButton/CustomButton';
import Snackbar from 'react-native-snackbar';
import {Chip} from 'react-native-paper';
import {AnswerDataFunction} from '../../../../Redux/Reducers/OptionIDData';
import {useDispatch} from 'react-redux';

const RadioCompType8 = ({
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
      // <TouchableOpacity
      //   style={styles.optionviewWrapper}
      //   onPress={() => setSelectedButton(item?.item?.answer_id)}
      //   isSelected={item?.item?.answer_id === selectedButton}>
      //   <Text
      //     style={
      //       selectedButton == item?.item?.answer_id
      //         ? styles.TxtClrChng
      //         : styles.Txt
      //     }>
      //     {item?.item?.answer_text}
      //   </Text>
      // </TouchableOpacity>
    );
  };
  return (
    <View style={{flex: 1, marginHorizontal: 20}}>
      <View style={{marginTop: HEIGHT(7)}}>
        <Text style={styles.mainTitle}>{APIresponse[0]?.question_text}</Text>

        <View
          style={{
            marginTop: HEIGHT(6),
            width: WIDTH(90),
          }}>
          <FlatList
            key={answerResponse?.answer_id}
            data={answerResponse}
            contentContainerStyle={{
              flexWrap: 'wrap',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 6,
            }}
            renderItem={({item}) => <ShowOptionsFunction item={item} />}
          />
        </View>

        <View style={styles.button}>
          {selectedButton == answerResponse[0]?.answer_id ? (
            <CustomButton
              btnText="GO TO VOLTAGE"
              onpress={() => buttonFunction()}
            />
          ) : (
            <CustomButton
              btnText="GO TO ADDITIONAL INFORMATION"
              onpress={() => buttonFunction()}
            />
          )}
        </View>
      </View>
    </View>
  );
};

export default RadioCompType8;

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
    gap: 10,
    // marginTop: 8,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },

  optionviewWrapperClrChng: {
    backgroundColor: '#ad7807',
    gap: 10,
    // marginTop: 8,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },

  Txt: {
    color: 'black',
    textAlign: 'center',
    fontSize: 14,
  },

  TxtClrChng: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
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
