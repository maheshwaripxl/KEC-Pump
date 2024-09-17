import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();

  const goBackFunction = () => {
    navigation.goBack();
  };

  return (
    <View style={{backgroundColor: 'black', paddingBottom: 5}}>
      <TouchableOpacity
        style={{position: 'absolute', left: 15, top: 9}}
        onPress={() => goBackFunction()}>
        <AntDesign name="arrowleft" size={25} color="#fff" />
      </TouchableOpacity>
      <View style={{alignSelf: 'center'}}>
        <Image source={require('../../Images/lgo.png')} style={styles.logo} />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
