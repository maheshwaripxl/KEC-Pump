import {Image, ImageBackground, Text, View} from 'react-native';
import React from 'react';
import {styles} from './style';
import {HEIGHT} from '../../Config/AppConst';
import CustomButton from '../../Components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';

const ThankYouScreen = () => {
  const navigation = useNavigation();
  const buttonFunction = () => {
    navigation.navigate('swiperscreen');
  };

  return (
    <ImageBackground
      source={require('../../Images/background.png')}
      style={{flex: 1}}>
      <View style={styles.view1}>
        <Text style={styles.heading}>
          Pump selector inquiry has been submitted
        </Text>
        <Image
          style={{marginTop: HEIGHT(5)}}
          source={require('../../Images/right.png')}
        />
        <Text style={styles.text1}>
          Thank you for your inquiry via the PUMP selector!
        </Text>
        <Text style={styles.text2}>
          Unfortunately, no suitable pump technology could be determined for the
          specifications provided.
        </Text>
        <Text style={styles.text2}>
          The SPA pump experts will now do a manual check and selection and come
          back to you.
        </Text>

        <View style={{marginTop: HEIGHT(10)}}>
          <CustomButton btnText="Back to homepage" onpress={buttonFunction} />
        </View>
        <View style={{marginTop: HEIGHT(2)}}>
          <CustomButton
            btnText="Start a new inquiry"
            onpress={buttonFunction}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default ThankYouScreen;
