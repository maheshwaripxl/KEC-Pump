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
import {useNavigation} from '@react-navigation/native';
import Header from '../../Components/Header/Header';
import {HEIGHT} from '../../Config/AppConst';
import Entypo from 'react-native-vector-icons/Entypo';
import ApiManager from '../../API/Api';
import {Dropdown} from 'react-native-element-dropdown';

const ContactInformation = () => {
  const navigation = useNavigation();

  const [title, setTitle] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [companySite, setCompanySite] = useState('');
  const [companyType, setCompanyType] = useState('');
  const [country, setCountry] = useState('');
  const [mobileNo, setMobileNo] = useState('');

  const SubmitFunction = () => {
    ContactFormAPI();
    navigation.navigate('thankyouscreen');
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

  const ContactFormAPI = async () => {
    const params = {
      title: title,
      fullname: fullName,
      email: email,
      repeat_email: confirmEmail,
      company_name: companyName,
      company_type: companyType,
      company_website: companySite,
      country: country,
      mobile_no: mobileNo,
    };

    ApiManager.postContactForm(params)
      .then(res => {
        if (res?.data?.status == 200) {
          console.log('log', res?.data);
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  const [countries, setCountries] = useState([]);
  console.log('countries', countries);

  const fetchCountries = async () => {
    try {
      const response = await fetch('https://restcountries.com/v3.1/all');
      const data = await response.json();
      setCountries(data);
    } catch (error) {
      console.error('Error fetching countries:', error);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

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
                style={styles.dropdown}
                containerStyle={styles.dropdownContainer1}
                itemTextStyle={styles.itemText}
                value={title}
                onChange={item => {
                  setTitle(item.label);
                }}
                selectedTextStyle={styles.selectedTextStyle}
                placeholder="Mr"
                placeholderStyle={styles.selectedTextStyle}
                placeholderTextColor={'#fff'}
              />
            </View>
            <View style={styles.forInput}>
              <TextInput
                placeholder="Enter your name"
                placeholderTextColor={'#fff'}
                style={{color: '#fff'}}
                value={fullName}
                onChangeText={value => setFullName(value)}
              />
            </View>
          </View>

          <Text style={styles.textName}>Email</Text>
          <View style={styles.bgm}>
            <TextInput
              placeholder="Enter email"
              placeholderTextColor={'#fff'}
              style={{color: '#fff'}}
              value={email}
              onChangeText={value => setEmail(value)}
            />
          </View>

          <Text style={styles.textName}>Confirm your email</Text>
          <View style={styles.bgm}>
            <TextInput
              placeholder="Re-enter email"
              placeholderTextColor={'#fff'}
              style={{color: '#fff'}}
              value={confirmEmail}
              onChangeText={value => setConfirmEmail(value)}
            />
          </View>

          <Text style={styles.textName}>Full company name</Text>
          <View style={styles.bgm}>
            <TextInput
              placeholder="Enter company name"
              placeholderTextColor={'#fff'}
              style={{color: '#fff'}}
              value={companyName}
              onChangeText={value => setCompanyName(value)}
            />
          </View>

          <Text style={styles.textName}>Company website</Text>
          <View style={styles.bgm}>
            <TextInput
              placeholder="Enter website"
              placeholderTextColor={'#fff'}
              style={{color: '#fff'}}
              value={companySite}
              onChangeText={value => setCompanySite(value)}
            />
          </View>

          <Text style={styles.textName}>Company type</Text>
          <View style={styles.inputView2}>
            <Dropdown
              data={data2}
              maxHeight={300}
              labelField="label"
              valueField="value"
              iconColor="#fff"
              style={styles.dropdown2}
              containerStyle={styles.dropdownContainer2}
              itemTextStyle={styles.itemText}
              value={companyType}
              onChange={item => {
                setCompanyType(item.label);
              }}
              selectedTextStyle={styles.selectedTextStyle}
              placeholder="Merchant"
              placeholderStyle={styles.selectedTextStyle}
              placeholderTextColor={'#fff'}
            />
          </View>

          <Text style={styles.textName}>Your country</Text>
          {/* <View style={styles.bgm}>
            <TextInput
              placeholder="India"
              placeholderTextColor={'#fff'}
              style={{color: '#fff'}}
              value={country}
              onChangeText={value => setCountry(value)}
            />
          </View> */}

          <View style={styles.inputView2}>
            <FlatList
              data={countries}
              keyExtractor={item => item.cca3}
              renderItem={({item}) => (
                <View>
                  <Text>{item.name.common}</Text>
                </View>
              )}
            />
          </View>

          <Text style={styles.textName}>Phone number</Text>
          <View style={styles.bgm}>
            <TextInput
              placeholder=""
              placeholderTextColor={'#fff'}
              style={{color: '#fff'}}
              value={mobileNo}
              onChangeText={value => setMobileNo(value)}
            />
          </View>

          <View style={{marginTop: 10, flexDirection: 'row'}}>
            <TouchableOpacity>
              <Entypo name="circle" size={20} color="#fff" />
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
