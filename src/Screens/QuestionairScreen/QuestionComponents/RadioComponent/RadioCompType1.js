import {StyleSheet, ActivityIndicator, Text, View} from 'react-native';
import React, {useState} from 'react';
import COLOR from '../../../../Config/color.json';
import CustomButton from '../../../../Components/CustomButton/CustomButton';
import {DM_sans_Bold, HEIGHT, WIDTH} from '../../../../Config/AppConst';
import InputBtn from '../../../../Components/InputBtn/InputBtn';
import Snackbar from 'react-native-snackbar';

const RadioCompType1 = ({
  getProgress,
  loader,
  responseArray,
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
      postQuestionIdAPI(responseArray?.id, selectedButton);
      // postQuestionIdAPI(40, 150); // multiple ques
      // postQuestionIdAPI(29, 72); // drive que

      getProgress();
    }
  };

  return (
    <View style={{flex: 1}}>
      {loader ? (
        <ActivityIndicator
          size="large"
          color={COLOR.white}
          style={styles.loader}
        />
      ) : (
        <View style={{marginHorizontal: 30}}>
          {/* <Text style={{color: '#fff', position: 'absolute', right: 1}}>
            {count}/15
          </Text> */}
          <View style={{marginTop: HEIGHT(20)}}>
            <View>
              <Text style={styles.mainTitle}>
                {responseArray?.question_text}
              </Text>
            </View>
            <View style={{marginTop: 10}}>
              <InputBtn
                title={responseArray?.answers[0]?.answer_text}
                isSelected={responseArray?.answers[0]?.id == selectedButton}
                style={
                  selectedButton == responseArray?.answers[0]?.id
                    ? styles.boxClrChange
                    : styles.box
                }
                onPress={() => {
                  setSelectedButton(responseArray?.answers[0]?.id);
                }}
              />
              <InputBtn
                title={responseArray?.answers[1]?.answer_text}
                isSelected={responseArray?.answers[1]?.id == selectedButton}
                style={
                  selectedButton == responseArray?.answers[1]?.id
                    ? styles.boxClrChange
                    : styles.box
                }
                onPress={() => {
                  setSelectedButton(responseArray?.answers[1]?.id);
                }}
              />
              <InputBtn
                title={responseArray?.answers[2]?.answer_text}
                isSelected={responseArray?.answers[2]?.id == selectedButton}
                style={
                  selectedButton == responseArray?.answers[2]?.id
                    ? styles.boxClrChange
                    : styles.box
                }
                onPress={() => {
                  setSelectedButton(responseArray?.answers[2]?.id);
                }}
              />
            </View>

            <View style={styles.button}>
              <CustomButton
                btnText="GO TO REQUIRED QUANTITY"
                onpress={() => buttonFunction()}
              />
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

export default RadioCompType1;

export const styles = StyleSheet.create({
  forCount: {
    color: '#fff',
    position: 'absolute',
    right: 1,
  },

  mainTitle: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 16,
    fontFamily: DM_sans_Bold,
  },

  wrapper: {
    marginTop: HEIGHT(20),
  },

  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    top: HEIGHT(57),
    gap: 10,
  },

  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  box: {
    paddingLeft: WIDTH(4),
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'row',
    borderWidth: 2,
    borderRadius: 9,
    borderColor: COLOR.White,
    // backgroundColor: COLOR.White,
    gap: 6,
    padding: 2,
    padding: WIDTH(0.8),
    marginBottom: HEIGHT(1),
  },

  boxClrChange: {
    paddingLeft: WIDTH(4),
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'row',
    borderWidth: 2,
    borderRadius: 9,
    borderColor: 'red',
    gap: 6,
    padding: 2,
    padding: WIDTH(0.8),
    marginBottom: HEIGHT(1),
    backgroundColor: '#BFFFF3',
  },
});
