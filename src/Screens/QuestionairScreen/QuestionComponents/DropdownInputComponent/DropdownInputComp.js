import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {
  DM_sans_Bold,
  FONTSIZE,
  HEIGHT,
  WIDTH,
} from '../../../../Config/AppConst';
import {Dropdown} from 'react-native-element-dropdown';
import CustomButton from '../../../../Components/CustomButton/CustomButton';
import Snackbar from 'react-native-snackbar';
import {useDispatch} from 'react-redux';
import {AnswerDataFunction} from '../../../../Redux/Reducers/OptionIDData';

const DropdownInputComp = ({
  getProgress,
  APIresponse,
  answerResponse,
  postQuestionIdAPI,
  handleNext,
}) => {
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState('');
  const [selectId, setSelectId] = useState(null);

  const buttonFunction = () => {
    if (inputValue == '') {
      Snackbar.show({
        text: 'Please fill out this field',
        backgroundColor: '#D1264A',
        duration: Snackbar.LENGTH_SHORT,
      });
    } else if (selectId == null) {
      Snackbar.show({
        text: 'Select unit',
        backgroundColor: '#D1264A',
        duration: Snackbar.LENGTH_SHORT,
      });
    } else {
      dispatch(
        AnswerDataFunction({
          question_id: APIresponse[0]?.id,
          answerID: selectId ?? '',
          inputData: inputValue ?? '',
        }),
      );
      postQuestionIdAPI(APIresponse[0]?.next_question_id, selectId);
      setInputValue('');
      setSelectId(null);
      // getProgress();
    }
  };

  return (
    <View style={{flex: 1}}>
      <View style={{marginHorizontal: 20}}>
        {/* <Text style={{ color: '#fff', position: 'absolute', right: 1 }}>
          {count}/15
        </Text> */}

        <View style={{marginTop: HEIGHT(10)}}>
          <View>
            <Text style={styles.mainTitle}>
              {APIresponse[0]?.question_text}
            </Text>
          </View>

          <View style={styles.viewWrapper}>
            <View style={styles.inputView}>
              <Dropdown
                data={answerResponse}
                maxHeight={300}
                labelField="answer_text"
                valueField="answer_id"
                iconColor="#fff"
                style={styles.dropdown}
                containerStyle={styles.dropdownContainer}
                itemTextStyle={styles.itemText}
                onChange={item => {
                  setSelectId(item?.answer_id);
                }}
                selectedTextStyle={styles.selectedTextStyle}
                placeholderStyle={styles.selectedTextStyle}
                placeholderTextColor={'#fff'}
              />
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                value={inputValue}
                onChangeText={txt => {
                  setInputValue(txt);
                }}
              />
            </View>
          </View>

          <View style={styles.button}>
            <CustomButton
              btnText={
                APIresponse[0]?.button == '' ? 'Next' : APIresponse[0]?.button
              }
              onpress={buttonFunction}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default DropdownInputComp;

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

  inputView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    padding: 0,
    height: 50,
    width: WIDTH(80),
    borderColor: '#fff',
    borderRadius: 10,
  },

  dropdown: {
    borderColor: '#fff',
    fontSize: FONTSIZE(1.7),
    color: 'black',
    width: WIDTH(30),
    height: 47,
    paddingRight: 3,
    borderRadius: 10,
  },

  dropdownContainer: {
    width: 105,
  },

  itemText: {
    fontSize: 14,
  },

  input: {
    paddingLeft: 12,
    width: WIDTH(48),
    fontSize: FONTSIZE(2.5),
    color: '#fff',
  },

  selectedTextStyle: {
    justifyContent: 'center',
    textAlign: 'center',
    color: '#fff',
    // width: 60,
    fontSize: FONTSIZE(2),
    fontWeight: 400,
    paddingLeft: 3,
  },

  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    gap: 10,
    top: HEIGHT(67),
  },
});
