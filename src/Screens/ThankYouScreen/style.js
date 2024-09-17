import {StyleSheet} from 'react-native';
import {HEIGHT, Roboto_Regular} from '../../Config/AppConst';

export const styles = StyleSheet.create({
  view1: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: HEIGHT(20),
    marginHorizontal: 30,
  },

  heading: {color: '#fff', fontSize: 14, fontFamily: Roboto_Regular},

  text1: {
    color: '#fff',
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center',
    fontFamily: Roboto_Regular,
  },

  text2: {
    color: '#fff',
    fontSize: 12,
    marginTop: 10,
    textAlign: 'center',
    fontFamily: Roboto_Regular,
  },
});
