import {Image, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {styles} from './style';
import {useNavigation} from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('swiperscreen');
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require('../../Images/logo.png')} style={styles.logo} />
      <Text style={styles.heading}>KEC Pump Pro</Text>
      <Text style={styles.desc}>Rich History to Reach Brilliant Future</Text>
      <Image
        source={require('../../Images/splashLogo.png')}
        style={styles.img}
      />
    </View>
  );
};

export default SplashScreen;
