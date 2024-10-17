import {StyleSheet, Text, View} from 'react-native';
import RangeSlider from 'rn-range-slider';
import CustomButton from '../../../../Components/CustomButton/CustomButton';
import React, {useState} from 'react';
import {DM_sans_Bold, HEIGHT, WIDTH} from '../../../../Config/AppConst';
import {useDispatch} from 'react-redux';
import {AnswerDataFunction} from '../../../../Redux/Reducers/OptionIDData';

const RangeSelectComp = ({
  getProgress,
  APIresponse,
  answerResponse,
  postQuestionIdAPI,
}) => {
  const dispatch = useDispatch();
  const [lowValue, setLowValue] = useState(-100);
  const [highValue, setHighValue] = useState(100);
  const rangeValue = [lowValue, highValue];

  const buttonFunction = () => {
    dispatch(
      AnswerDataFunction({
        question_id: APIresponse[0]?.id,
        answerID: rangeValue,
        inputData: '',
      }),
    );
    postQuestionIdAPI(APIresponse[0]?.next_question_id);
    // getProgress();
  };

  const renderThumb = () => <View style={styles.thumb} />;
  const renderRail = () => <View style={styles.rail} />;
  const renderRailSelected = () => <View style={styles.railSelected} />;
  const renderLabel = value => <Text style={styles.labelText}>{value}</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>{APIresponse[0]?.question_text}</Text>

      <View style={styles.rangeContainer}>
        <Text style={styles.valueText}>{lowValue}</Text>

        <RangeSlider
          style={{flex: 1}}
          min={-100}
          max={100}
          step={1}
          floatingLabel
          low={lowValue}
          high={highValue}
          renderThumb={renderThumb}
          renderRail={renderRail}
          renderRailSelected={renderRailSelected}
          renderLabel={renderLabel}
          onValueChanged={(low, high) => {
            setLowValue(low);
            setHighValue(high);
          }}
        />

        <Text style={styles.valueText}>{highValue}</Text>
      </View>

      <View style={styles.button}>
        <CustomButton
          btnText={APIresponse[0]?.nextButton}
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

  container: {
    flex: 1,
    paddingVertical: HEIGHT(5),
    paddingHorizontal: WIDTH(6),
  },

  rangeContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: HEIGHT(24),
  },

  valueText: {
    fontSize: 16,
    width: 35,
    textAlign: 'center',
    color: '#fff',
  },

  thumb: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#c79500',
  },

  rail: {
    flex: 1,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#d3d3d3',
  },

  railSelected: {
    height: 4,
    backgroundColor: '#c79500',
    borderRadius: 2,
  },

  labelText: {
    fontSize: 12,
    color: '#c79500',
  },

  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    top: HEIGHT(78),
    left: WIDTH(7),
    gap: 10,
  },
});
