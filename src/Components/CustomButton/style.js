import {StyleSheet} from 'react-native';
import COLOR from '../../Config/color.json';
import {DM_sans_Bold, FONTSIZE, HEIGHT, WIDTH} from '../../Config/AppConst';

export const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  gradient: {
    width: WIDTH(85),
    height: HEIGHT(7.5),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },

  btnText: {
    fontSize: FONTSIZE(2.1),
    fontFamily: DM_sans_Bold,
    textAlign: 'center',
    color: COLOR.Black,
  },

  backBtn: {
    width: WIDTH(27),
    height: HEIGHT(7),
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#63635f',
  },

  backText: {
    fontSize: FONTSIZE(2.1),
    fontFamily: DM_sans_Bold,
    textAlign: 'center',
    color: '#fff',
  },

  skipBtn: {
    width: WIDTH(85),
    height: HEIGHT(7),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: '#3d3d3b',
    padding: 15,
    borderRadius: 10,
  },

  skipText: {
    fontSize: FONTSIZE(2.1),
    fontFamily: DM_sans_Bold,
    textAlign: 'center',
    color: '#fff',
  },
});
