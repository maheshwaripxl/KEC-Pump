import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Snackbar from 'react-native-snackbar';
import {useDispatch} from 'react-redux';
import CustomButton from '../../../../Components/CustomButton/CustomButton';
import {
  DM_sans_Bold,
  FONTSIZE,
  HEIGHT,
  WIDTH,
} from '../../../../Config/AppConst';
import {Dropdown} from 'react-native-element-dropdown';
import ApiManager from '../../../../API/Api';
import {useNavigation} from '@react-navigation/native';
import {countries} from '../../../../Array/CountryArray';
import {AnswerDataFunction} from '../../../../Redux/Reducers/OptionIDData';

const CountryComponent = ({APIresponse}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [title, setTitle] = useState('');

  //   useEffect(() => {
  //     GetCountryNames();
  //   }, []);

  //   const GetCountryNames = async () => {
  //     ApiManager.getAllCountries()
  //       .then(res => {
  //         setCountries(res?.data); // Ensure you're setting the correct array from the API response
  //       })
  //       .catch(err => {
  //         console.log('err', err);
  //       });
  //   };

  const buttonFunction = () => {
    if (!title) {
      Snackbar.show({
        text: 'Please select country',
        backgroundColor: '#D1264A',
        duration: Snackbar.LENGTH_SHORT,
      });
    } else {
      dispatch(
        AnswerDataFunction({
          question_id: APIresponse[0]?.id,
          answerID: '',
          inputData: title,
        }),
      );
      navigation.navigate('contactInformation')
    }
  };

  return (
    <View style={{marginTop: HEIGHT(6), marginHorizontal: 30}}>
      <Text style={styles.mainTitle}>{APIresponse[0]?.question_text}</Text>
      <View style={styles.inputView}>
        <Dropdown
          data={countries}
          labelField="label"
          valueField="value"
          iconColor="#fff"
          style={styles.dropdown}
          value={title}
          itemTextStyle={styles.itemText}
          onChange={item => {
            setTitle(item.label);
          }}
          selectedTextStyle={styles.selectedTextStyle}
          placeholder="Select Country"
          placeholderStyle={styles.selectedTextStyle}
          placeholderTextColor={'#fff'}
        />
      </View>

      <View style={styles.button}>
        <CustomButton
          btnText={APIresponse[0]?.button}
          onpress={buttonFunction}
        />
      </View>
    </View>
  );
};

export default CountryComponent;

const styles = StyleSheet.create({
  mainTitle: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 16,
    fontFamily: DM_sans_Bold,
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
    marginTop: HEIGHT(4),
  },

  dropdown: {
    borderColor: '#fff',
    fontSize: FONTSIZE(1.7),
    color: 'black',
    width: WIDTH(75),
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
    top: HEIGHT(73),
    gap: 10,
  },
});
