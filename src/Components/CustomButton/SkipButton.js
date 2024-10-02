import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './style';
import React from 'react';

const SkipButton = ({btnText, onpress}) => {
  return (
    <View>
      <TouchableOpacity style={styles.skipBtn} onPress={() => onpress()}>
        <Text style={styles.skipText}>{btnText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SkipButton;
