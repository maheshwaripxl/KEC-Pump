import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styles} from './style';
import LinearGradient from 'react-native-linear-gradient';

const CustomButton = ({btnText, onpress}) => {
  return (
    <TouchableOpacity onPress={() => onpress()}>
      <LinearGradient
        colors={['#BD6700', '#FF8A00', '#FF8A00', '#C66B01']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={styles.gradient}>
        <View style={styles.button}>
          <Text style={styles.btnText}>{btnText}</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default CustomButton;
