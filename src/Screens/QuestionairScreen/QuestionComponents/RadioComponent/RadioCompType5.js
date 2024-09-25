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
import {DM_sans_Bold, HEIGHT, WIDTH} from '../../../../Config/AppConst';

const RadioCompType5 = ({
  getProgress,
  APIresponse,
  answerResponse,
  postQuestionIdAPI,
}) => {
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
        postQuestionIdAPI(APIresponse[0]?.next_question_id, selectedButton);
        getProgress();
      } else {
        postQuestionIdAPI(APIresponse[0]?.next_question_id, selectedButton);
        getProgress();
      }
    }
  };

  const ShowOptionsFunction = item => {
    return (
      <TouchableOpacity
        style={styles.optionviewWrapper}
        onPress={() => setSelectedButton(item?.item?.answer_id)}
        isSelected={item?.item?.answer_id === selectedButton}>
        <Image
          source={{uri: item?.item?.image_type}}
          style={
            selectedButton == item?.item?.answer_id
              ? styles.imgClrChng
              : styles.img
          }
        />
        <Text
          style={
            selectedButton == item?.item?.answer_id
              ? styles.TxtClrChng
              : styles.Txt
          }>
          {item?.item?.answer_text}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1, marginHorizontal: 20}}>
      <View style={{marginTop: HEIGHT(7)}}>
        <Text style={styles.mainTitle}>{APIresponse[0]?.question_text}</Text>

        <View
          style={{
            marginTop: HEIGHT(3),
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

  optionviewWrapper: {
    borderWidth: 1,
    height: HEIGHT(45),
    width: WIDTH(24),
    marginRight: WIDTH(2),
    gap: 10,
    padding: 10,
    borderColor: '#fff',
    marginTop: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: HEIGHT(7),
  },

  optionviewWrapperClrChng: {
    backgroundColor: '#fff',
    borderWidth: 1,
    height: HEIGHT(45),
    width: WIDTH(24),
    marginRight: WIDTH(2),
    gap: 10,
    padding: 10,
    borderColor: '#fff',
    marginTop: 10,
    flexDirection: 'column',
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

  img: {
    height: HEIGHT(14),
    width: WIDTH(20),
    alignSelf: 'center',
  },

  imgClrChng: {
    height: HEIGHT(14),
    width: WIDTH(20),
    alignSelf: 'center',
  },

  button: {
    position: 'absolute',
    top: HEIGHT(72),
  },
});
