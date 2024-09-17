import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import { DM_sans_Medium } from '../../Config/AppConst';

const InputBtn = ({title, isSelected, onPress }) => {
  return (
      <TouchableOpacity onPress={onPress} style={[styles.view1, isSelected && styles.selected]}>
        <Text  style={[styles.textStyle1, isSelected && styles.selectedText]}>{title}</Text>
      </TouchableOpacity>
  );
};

export default InputBtn;

const styles = StyleSheet.create({
  view1: {
    borderWidth: 1,
    borderColor: '#fff',
    padding: 10,
    borderRadius: 23,
    marginBottom:10,
    marginTop:10
  },

  textStyle1: {
    color: '#fff',
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: '400',
    fontFamily: DM_sans_Medium,
  },

  selected: {
    backgroundColor: '#fff',
  },
  
  selectedText: {
    color: 'black',
  },
});
