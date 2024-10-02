import {StyleSheet, Text, View} from 'react-native';
import RangeSlider from 'react-native-range-slider';
import CustomButton from '../../../../Components/CustomButton/CustomButton';
import React from 'react';
import {DM_sans_Bold, HEIGHT} from '../../../../Config/AppConst';

const RangeSelectComp = ({
  getProgress,
  APIresponse,
  answerResponse,
  postQuestionIdAPI,
}) => {
  const buttonFunction = () => {
    postQuestionIdAPI(APIresponse[0]?.next_question_id, selectedIds);
    // getProgress();
  };

  return (
    <View>
      <Text style={styles.mainTitle}>RangeSelectComp</Text>
      <RangeSlider
        minValue={-100}
        maxValue={100}
        tintColor={'#885F08'}
        handleBorderWidth={1}
        handleBorderColor="#454d55"
        selectedMinimum={-10}
        selectedMaximum={10}
        style={{flex: 1, height: 70, padding: 10, backgroundColor: '#ddd'}}
        // onChange={data => {
        //   console.log(data);
        // }}
      />

      <View style={styles.button}>
        <CustomButton
          // btnText={APIresponse[0]?.button}
          onpress={() => buttonFunction()}
        />
      </View>
    </View>
  );
};

export default RangeSelectComp;

const styles = StyleSheet.create({
  mainTitle: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 16,
    fontFamily: DM_sans_Bold,
  },

  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    top: HEIGHT(78),
    gap: 10,
  },
});
