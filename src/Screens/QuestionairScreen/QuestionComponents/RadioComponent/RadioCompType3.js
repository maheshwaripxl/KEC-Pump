import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { DM_sans_Bold, DM_sans_Medium, FONTSIZE, HEIGHT } from '../../../../Config/AppConst';
import CustomButton from '../../../../Components/CustomButton/CustomButton';
import { useSelector } from 'react-redux';

const RadioCompType3 = ({
  count,
  setCount,
  getProgress,
  APIresponse,
  postQuestionIdAPI,
}) => {

  const selector = useSelector((state) => state.AnswerData);
  console.log('selectorrdfgrger', selector?.answerID);

  const buttonFunction = () => {
    getProgress();
    setCount(8)
    getProgress();
    postQuestionIdAPI(14)

  };

  return (
    <View>
      <View style={{ marginTop: HEIGHT(10) }}>
        <View>
          <Text style={styles.mainTitle}>
            {APIresponse?.question?.question_text}
          </Text>
        </View>

        <View style={[styles.viewWrapper, { justifyContent: 'center' }]}>
          <TouchableOpacity style={styles.yesNoBtn}>
            <Text style={{ color: '#fff', fontFamily: DM_sans_Medium }}>
              Yes
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.yesNoBtn}>
            <Text style={{ color: '#fff', fontFamily: DM_sans_Medium }}>
              No
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.button}>
          <CustomButton btnText="GO TO PH" onpress={buttonFunction} />
        </View>
      </View>
    </View>
  )
}

export default RadioCompType3

const styles = StyleSheet.create({
  mainTitle: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 16,
    fontFamily: DM_sans_Bold,
  },

  viewWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 48,
  },

  yesNoBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    width: 115,
    borderColor: 'white',
    borderWidth: 1,
  },

  button: {
    position: 'absolute',
    top: HEIGHT(67),
  },
})