import {StyleSheet} from 'react-native';
import {
  DM_sans_Bold,
  DM_sans_Medium,
  FONTSIZE,
  HEIGHT,
  WIDTH,
} from '../../Config/AppConst';

export const styles = StyleSheet.create({
  mainTitle: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 16,
    fontFamily: DM_sans_Bold,
  },

  bgm: {
    borderWidth: 1,
    height: 48,
    width: WIDTH(83),
    paddingLeft: 7,
    borderColor: '#fff',
    borderRadius: 25,
    justifyContent: 'center',
  },

  forText: {
    color: '#fff',
  },

  textName: {
    color: '#fff',
    marginTop: 10,
    marginBottom: 10,
    fontSize: 16,
    fontFamily: DM_sans_Medium,
  },

  forMr: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    height: 48,
    width: WIDTH(25),
    borderColor: '#fff',
    borderRadius: 24,
  },

  forInput: {
    borderWidth: 1,
    height: 48,
    width: WIDTH(57),
    paddingLeft: 7,
    borderColor: '#fff',
    borderRadius: 25,
    justifyContent: 'center',
  },

  newsletterText: {
    color: '#fff',
    fontSize: 14,
    marginLeft: 5,
    textAlign: 'center',
  },

  para: {
    fontSize: 10,
    color: '#fff',
    textAlign: 'center',
  },

  inputView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    padding: 0,
    height: 50,
    width: WIDTH(80),
    borderColor: '#fff',
    borderRadius: 10,
    marginTop: HEIGHT(4),
  },

  dropdown1: {
    width: WIDTH(25),
  },

  dropdown: {
    borderColor: '#fff',
    fontSize: FONTSIZE(1.7),
    color: 'black',
    width: WIDTH(75),
    height: 47,
    paddingRight: 3,
    borderRadius: 10,
  },

  dropdownContainer1: {
    width: 45
  },

  selectedTextStyle1: {

  },
  dropdownContainer: {
    width: 105,
  },

  itemText: {
    fontSize: 14,
  },

  input: {
    paddingLeft: 12,
    width: WIDTH(48),
    fontSize: FONTSIZE(2.5),
    color: '#fff',
  },

  selectedTextStyle: {
    justifyContent: 'center',
    textAlign: 'center',
    color: '#fff',
    // width: 60,
    fontSize: FONTSIZE(2),
    fontWeight: 400,
    paddingLeft: 3,
  },

  inputView2: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    padding: 0,
    height: 50,
    width: WIDTH(82),
    borderColor: '#fff',
    borderRadius: 10,
  },

  dropdown2: {
    borderColor: '#fff',
    fontSize: FONTSIZE(2),
    color: '#fff',
    width: WIDTH(83),
    height: 50,
    paddingRight: 3,
    borderRadius: 10,
  },

  selectedTextStyle: {
    justifyContent: 'center',
    textAlign: 'center',
    color: '#fff',
    fontSize: FONTSIZE(1.4),
    paddingLeft: 3,
  },
});
