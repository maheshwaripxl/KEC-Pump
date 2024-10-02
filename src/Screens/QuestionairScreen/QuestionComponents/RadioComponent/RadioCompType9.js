import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Chip} from 'react-native-paper';
import {DM_sans_Bold, HEIGHT, WIDTH} from '../../../../Config/AppConst';
import CustomButton from '../../../../Components/CustomButton/CustomButton';
import Snackbar from 'react-native-snackbar';
import {AnswerDataFunction} from '../../../../Redux/Reducers/OptionIDData';
import {useDispatch} from 'react-redux';

const RadioCompType9 = ({
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
    <View style={{flex: 1, marginHorizontal: 20}}>
      <View style={{marginTop: HEIGHT(7)}}>
        <Text style={styles.mainTitle}>{APIresponse[0]?.question_text}</Text>
        <Image
          source={{uri: APIresponse[0]?.question_image}}
          style={{width: WIDTH(90), height: HEIGHT(27), marginTop: HEIGHT(2)}}
        />
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
        <View style={styles.descView}>
          <Text style={styles.desc}>
            {answerResponse[0]?.answer_description}
          </Text>
        </View>
        <View style={styles.button}>
          <CustomButton
            btnText={APIresponse[0]?.button}
            onpress={() => buttonFunction()}
          />
        </View>
      </View>
    </View>
  );
};

export default RadioCompType9;

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
    paddingHorizontal: 2.5,
    paddingVertical: 5,
  },

  optionviewWrapperClrChng: {
    backgroundColor: '#ad7807',
    paddingHorizontal: 2.5,
    paddingVertical: 5,
  },

  Txt: {
    color: 'black',
    alignSelf: 'center',
    fontSize: 14,
  },

  TxtClrChng: {
    color: '#fff',
    alignSelf: 'center',
    fontSize: 14,
  },

  desc: {
    color: '#fff',
    fontWeight: '400',
    fontSize: 11.5,
  },

  descView: {
    width: WIDTH(90),
    marginTop: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    top: HEIGHT(72),
  },
});
