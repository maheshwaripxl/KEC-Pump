import {StyleSheet} from 'react-native';
import {DM_sans_Medium} from '../../Config/AppConst';

export const styles = StyleSheet.create({
  view1: {
    borderWidth: 1,
    borderColor: 'red',
    padding: 10,
    borderRadius: 23,
    marginBottom: 10,
    marginTop: 10,
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
