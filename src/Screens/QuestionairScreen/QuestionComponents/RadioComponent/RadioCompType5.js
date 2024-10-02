import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import CustomButton from '../../../../Components/CustomButton/CustomButton';
import {
  DM_sans_Bold,
  DM_sans_Medium,
  HEIGHT,
  WIDTH,
} from '../../../../Config/AppConst';
import {AnswerDataFunction} from '../../../../Redux/Reducers/OptionIDData';
import {useDispatch} from 'react-redux';

const RadioCompType5 = ({
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
      <TouchableOpacity
        activeOpacity={0.4}
        style={
          selectedButton == item?.item?.answer_id
            ? styles.optionviewWrapperClrChng
            : styles.optionviewWrapper
        }
        onPress={() => setSelectedButton(item?.item?.answer_id)}
        isSelected={item?.item?.answer_id === selectedButton}>
        <Image source={{uri: item?.item?.image_type}} style={styles.img} />
        <Text style={styles.Txt}>{item?.item?.answer_text}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1, marginHorizontal: 20}}>
      <View style={{marginTop: HEIGHT(7)}}>
        <Text style={styles.mainTitle}>{APIresponse[0]?.question_text}</Text>

        <Text style={styles.desc}>{APIresponse[0]?.question_description}</Text>

        <View
          style={{
            marginTop: HEIGHT(3),
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 25,
          }}>
          <FlatList
            key={answerResponse?.answer_id}
            data={answerResponse}
            horizontal
            renderItem={({item}) => <ShowOptionsFunction item={item} />}
          />
        </View>

        <View style={styles.button}>
          {selectedButton == answerResponse[1]?.answer_id ? (
            <CustomButton
              btnText="GO TO IMMERSION DEPTH"
              onpress={() => buttonFunction()}
            />
          ) : (
            <CustomButton
              btnText="GO TO INDUSTRY"
              onpress={() => buttonFunction()}
            />
          )}
        </View>
      </View>
    </View>
  );
};

export default RadioCompType5;

const styles = StyleSheet.create({
  mainTitle: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 16,
    marginBottom: 6,
    fontFamily: DM_sans_Bold,
  },

  desc: {
    color: '#D7D7D7',
    fontSize: 13,
    marginBottom: 6,
    fontFamily: DM_sans_Medium,
    textAlign: 'center',
  },

  optionviewWrapper: {
    gap: 20,
    padding: 10,
    marginTop: 10,
    borderWidth: 1,
    height: HEIGHT(45),
    width: WIDTH(34),
    marginRight: WIDTH(4),
    flexDirection: 'column',
    justifyContent: 'center',
    borderColor: 'gray',
  },

  optionviewWrapperClrChng: {
    gap: 20,
    padding: 10,
    marginTop: 10,
    borderWidth: 1,
    height: HEIGHT(45),
    width: WIDTH(34),
    marginRight: WIDTH(4),
    flexDirection: 'column',
    justifyContent: 'center',
    borderColor: '#885F08',
  },

  Txt: {
    color: '#fff',
    alignSelf: 'center',
  },

  img: {
    height: HEIGHT(14),
    width: WIDTH(20),
    alignSelf: 'center',
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
