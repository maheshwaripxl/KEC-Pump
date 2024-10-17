import {
  FlatList,
  ImageBackground,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './style';
import CustomButton from '../../Components/CustomButton/CustomButton';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import Header from '../../Components/Header/Header';
import {HEIGHT, WIDTH} from '../../Config/AppConst';
import Entypo from 'react-native-vector-icons/Entypo';
import ApiManager from '../../API/Api';
import {Dropdown} from 'react-native-element-dropdown';
import {useSelector} from 'react-redux';
import {countries} from '../../Array/CountryArray';
import Snackbar from 'react-native-snackbar';

const ContactInformation = () => {
  const selector = useSelector(state => state.AnswerData);
  const navigation = useNavigation();

  console.log('selectorcontact', selector?.responses);

  const [title, setTitle] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [url, setUrl] = useState('');
  const [companyType, setCompanyType] = useState('');
  const [country, setCountry] = useState([]);
  const [mobileNo, setMobileNo] = useState('');

  const [nameError, setnameError] = useState(false);
  const [emailError, setemailError] = useState(false);
  const [numberError, setnumberError] = useState(false);
  const [selectcountry, setSelectCountry] = useState(false);

  const [isValid, setIsValid] = useState(null);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    getContriesAPI();
  }, []);

  const nameOnChange = text => {
    setnameError(false);
    const formattedName = text.replace(/\s/g, '');

    if (text.length === 1 && text.trim() === '') {
      setFullName(formattedName);
    } else {
      setFullName(text);
    }
  };

  const emailOnChange = text => {
    setemailError(false);
    const formattedEmail = text.replace(/\s/g, '');
    setEmail(formattedEmail);
  };

  var nameRegex = /^[^\s]+$/;
  var isNameValid = nameRegex.test(fullName);

  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var isEmailValid = emailRegex.test(email);

  const nameValidationFunction = () => {
    if (fullName.length > 0 && fullName.length < 3 && isNameValid) {
      setnameError(true);
    }
  };

  const emailValidationFunction = () => {
    if (email.length > 0 && !isEmailValid) {
      setemailError(true);
    }
  };

  const validateUrl = () => {
    const urlPattern = /^(https?:\/\/)?([a-z0-9-]+\.)+[a-z]{2,}(\/[^\s]*)?$/i;
    setIsValid(urlPattern.test(url));
  };

  const onChangeNumber = inputValue => {
    var phoneRegex = /^((\+|00)968)?\d{8}$/;
    var isValidNumber = phoneRegex.test(mobileNo);

    const formattedEmail = inputValue.replace(/\s/g, '');

    if (!isValidNumber) {
      setnumberError(true);
    } else {
      setnumberError(false);
    }
    setMobileNo(formattedEmail);
  };

  const SubmitFunction = () => {
    if (fullName == '') {
      Snackbar.show({
        text: 'Please enter your name',
        backgroundColor: '#D1264A',
        duration: Snackbar.LENGTH_SHORT,
      });
    } else if (email == '') {
      Snackbar.show({
        text: 'Please enter your email',
        backgroundColor: '#D1264A',
        duration: Snackbar.LENGTH_SHORT,
      });
    } else if (confirmEmail == '') {
      Snackbar.show({
        text: 'Please enter your confirmEmail',
        backgroundColor: '#D1264A',
        duration: Snackbar.LENGTH_SHORT,
      });
    } else if (companyName == '') {
      Snackbar.show({
        text: 'Please enter your company name',
        backgroundColor: '#D1264A',
        duration: Snackbar.LENGTH_SHORT,
      });
    } else if (url == '') {
      Snackbar.show({
        text: 'Please enter your company website',
        backgroundColor: '#D1264A',
        duration: Snackbar.LENGTH_SHORT,
      });
    } else if (selectcountry) {
      Snackbar.show({
        text: 'Please select your country',
        backgroundColor: '#D1264A',
        duration: Snackbar.LENGTH_SHORT,
      });
    } else if (mobileNo === null) {
      Snackbar.show({
        text: 'Please enter your phone number',
        backgroundColor: '#D1264A',
        duration: Snackbar.LENGTH_SHORT,
      });
    } else {
      ContactFormAPI();
    }
  };

  const data1 = [
    {label: 'Mr', value: '1'},
    {label: 'Ms', value: '2'},
    {label: 'Miss', value: '3'},
  ];

  const data2 = [
    {label: 'OEM / User', value: '1'},
    {label: 'Consultant', value: '2'},
    {label: 'Merchant', value: '3'},
    {label: 'Public Institution', value: '4'},
    {label: 'Private / Others', value: '5'},
  ];

  const getContriesAPI = async () => {
    ApiManager.getAllCountries()
      .then(res => {
        setCountry(res?.data?.response);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const ContactFormAPI = async () => {
    const params = {
      title: title,
      username: fullName,
      user_email: email,
      repeat_email: confirmEmail,
      company_name: companyName,
      company_type: companyType,
      company_website: url,
      country: country,
      mobile_no: mobileNo,
      data: selector?.responses,
    };

    console.log('params', params);

    ApiManager.postContactForm(params)
      .then(res => {
        if (res?.data?.status == 200) {
          console.log('log', res?.data);
          navigation.navigate('thankyouscreen');
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <ImageBackground
      source={require('../../Images/background.png')}
      style={{flex: 1}}>
      <Header />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{marginHorizontal: 30}}>
        <View style={{marginTop: HEIGHT(2)}}>
          <View>
            <Text style={styles.mainTitle}>Contact Information</Text>
          </View>
          <Text style={[styles.forText, {marginTop: 5}]}>
            Almost done. Just provide your contact information and submit your
            non-binding inquiry, After submission you will immediately see a
            list of pump technologies that fit your requirements.
          </Text>
          {/* 1 */}
          <Text style={styles.textName}>FullName</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <View style={styles.inputView}>
              <Dropdown
                data={data1}
                maxHeight={300}
                labelField="label"
                valueField="value"
                iconColor="#fff"
                style={{width: 80, justifyContent: 'center'}}
                containerStyle={{width: 80, marginTop: 16}}
                itemTextStyle={styles.itemText}
                value={title}
                onChange={item => {
                  setTitle(item.label);
                }}
                placeholder="Mr"
                selectedTextStyle={styles.selectedTextStyle1}
                placeholderStyle={styles.placeholderStyle}
                placeholderTextColor={'#fff'}
              />
              <TextInput
                placeholder="Enter your name"
                placeholderTextColor={'#fff'}
                style={[styles.input, {width: WIDTH(48)}]}
                value={fullName}
                onChangeText={txt => nameOnChange(txt)}
                onBlur={nameValidationFunction}
              />
            </View>
          </View>

          {nameError ? (
            <Text style={{color: 'red'}}>
              Enter atleast 3 characters for name
            </Text>
          ) : null}

          <Text style={styles.textName}>Email</Text>
          <View style={styles.bgm}>
            <TextInput
              placeholder="Enter email"
              placeholderTextColor={'#fff'}
              style={styles.input}
              value={email}
              onChangeText={value => emailOnChange(value)}
              onBlur={emailValidationFunction}
            />
          </View>

          {emailError ? (
            <Text style={{color: 'red'}}>Enter valid email</Text>
          ) : null}

          <Text style={styles.textName}>Confirm your email</Text>
          <View style={styles.bgm}>
            <TextInput
              placeholder="Re-enter email"
              placeholderTextColor={'#fff'}
              style={styles.input}
              value={confirmEmail}
              onChangeText={value => setConfirmEmail(value)}
            />
          </View>
          {confirmEmail.length > 0 && email !== confirmEmail ? (
            <Text style={{color: 'red'}}>
              email and confirmEmail doesn't match
            </Text>
          ) : null}

          <Text style={styles.textName}>company name</Text>
          <View style={styles.bgm}>
            <TextInput
              placeholder="Enter company name"
              placeholderTextColor={'#fff'}
              style={styles.input}
              value={companyName}
              onChangeText={value => setCompanyName(value)}
            />
          </View>

          {nameError ? (
            <Text style={{color: 'red'}}>Enter your for companyName</Text>
          ) : null}

          <Text style={styles.textName}>Company website</Text>
          <View style={styles.bgm}>
            <TextInput
              placeholder="Enter website"
              placeholderTextColor={'#fff'}
              style={styles.input}
              value={url}
              onChangeText={value => setUrl(value)}
              onBlur={validateUrl}
            />
          </View>

          {!isValid && url.length > 0 ? (
            <Text style={{marginTop: 10, color: 'red'}}>
              {isValid ? 'Valid URL!' : 'Invalid URL!'}
            </Text>
          ) : null}

          <Text style={styles.textName}>Company type</Text>
          <View style={styles.inputView2}>
            <Dropdown
              data={data2}
              maxHeight={300}
              labelField="label"
              valueField="value"
              iconColor="#fff"
              style={styles.dropdown2}
              // containerStyle={styles.dropdownContainer2}
              itemTextStyle={styles.itemText}
              value={companyType}
              onChange={item => {
                setCompanyType(item.label);
              }}
              selectedTextStyle={styles.selectedTextStyle}
              placeholder="Merchant"
              placeholderStyle={styles.placeholderStyle}
              placeholderTextColor={'#fff'}
            />
          </View>

          <Text style={styles.textName}>Your country</Text>
          <View style={styles.inputView}>
            <Dropdown
              data={country}
              labelField="country"
              valueField="countryid"
              iconColor="#fff"
              style={styles.dropdown}
              value={country}
              itemTextStyle={styles.itemText}
              onChange={item => {
                setCountry(item.label), setSelectCountry(false);
              }}
              selectedTextStyle={styles.selectedTextStyle}
              // placeholder="Select Country"
              placeholderStyle={styles.placeholderStyle}
              placeholderTextColor={'#fff'}
            />
          </View>

          {/* {!country ? <Text style={{color: 'red'}}>Select country</Text> : null} */}

          <Text style={styles.textName}>Phone number</Text>
          <View style={styles.bgm}>
            <TextInput
              placeholder=""
              placeholderTextColor={'#fff'}
              keyboardType="numeric"
              style={styles.input}
              value={mobileNo}
              onChangeText={value => onChangeNumber(value)}
            />
          </View>

          {numberError ? (
            <Text style={{color: 'red'}}>Enter your phonr number</Text>
          ) : null}

          <View style={{marginTop: 10, flexDirection: 'row'}}>
            <TouchableOpacity onPress={() => setChecked(true)}>
              <MaterialCommunityIcons
                name={
                  checked
                    ? 'checkbox-marked-circle-outline'
                    : 'checkbox-blank-circle-outline'
                }
                size={20}
                color={checked ? '#885F08' : '#fff'}
              />
            </TouchableOpacity>

            <Text style={styles.newsletterText}>
              I would like to receive the SPAnewsletter. You can unsubscribe at
              any time.
            </Text>
          </View>

          <View style={{marginTop: 10}}>
            <Text style={styles.para}>
              Please understand that we can only process inquiries with
              reasonable / correct contact information. Please check your
              information again before submitting the request. Thank you.{' '}
            </Text>
          </View>

          <View style={{marginVertical: HEIGHT(4)}}>
            <CustomButton btnText="Submit" onpress={SubmitFunction} />
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default ContactInformation;
