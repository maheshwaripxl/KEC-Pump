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

const DropdownInputComp = ({
  getProgress,
  APIresponse,
  answerResponse,
  postQuestionIdAPI,
}) => {
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
      postQuestionIdAPI(APIresponse[0]?.next_question_id, selectId);
      setInputValue('');
      setSelectId(null);
      getProgress();
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
                containerStyle={styles.dropdownContainer1}
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
            <TouchableOpacity style={styles.circle}>
              <Text style={{color: '#fff'}}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.circle}>
              <Text style={{color: '#fff'}}>--</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.button}>
            <CustomButton
              btnText={APIresponse[0]?.button}
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
    width: WIDTH(50),
    borderColor: '#fff',
    borderRadius: 10,
  },

  dropdown: {
    borderColor: '#fff',
    fontSize: FONTSIZE(1.2),
    color: 'black',
    width: WIDTH(22),
    paddingLeft: 3,
    height: 47,
    paddingRight: 3,
    borderRadius: 10,
  },

  dropdownContainer1: {
    width: 135,
  },

  dropdownContainer2: {
    width: 135,
    height: 170,
  },

  itemText: {
    fontSize: 14,
  },

  input: {
    width: WIDTH(30),
    color: '#fff',
  },

  selectedTextStyle: {
    justifyContent: 'center',
    textAlign: 'center',
    color: '#fff',
    fontSize: FONTSIZE(1.4),
    paddingLeft: 3,
  },

  circle: {
    borderWidth: 1,
    padding: 0,
    height: 50,
    width: 50,
    borderColor: '#fff',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
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
