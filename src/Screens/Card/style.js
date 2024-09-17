import {StyleSheet} from 'react-native';
import COLOR from '../../Config/color.json';
import {
  DM_sans_Bold,
  DM_sans_Regular,
  HEIGHT,
  WIDTH,
} from '../../Config/AppConst';

export const styles = StyleSheet.create({
  container: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },

  listView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 6,
  },

  cardView: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 146,
    width: 310,
    margin: HEIGHT(2.7),
    borderWidth: 1,
    borderColor: COLOR.White,
    paddingHorizontal: WIDTH(5),
    paddingVertical: HEIGHT(3),
    borderRadius: 16,
    shadowOffset: {width: 1, height: 1.5},
    shadowOpacity: 0.4,
    shadowRadius: 2,
    backgroundColor: '#003157',
    elevation: 10,
  },

  step: {
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 24,
    fontFamily: DM_sans_Bold,
    color: COLOR.White,
    paddingHorizontal: 24,
    paddingVertical: HEIGHT(10),
    textShadowColor: '#585858',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 1,
  },

  heading: {
    textAlign: 'center',
    fontSize: 18,
    fontFamily: DM_sans_Bold,
    paddingVertical: 12,
    color: COLOR.White,
    textShadowColor: '#585858',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 1,
  },

  desc: {
    textAlign: 'center',
    fontSize: 16,
    fontFamily: DM_sans_Regular,
    color: COLOR.White,
    textShadowColor: '#585858',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 1,
    lineHeight: HEIGHT(3.2),
  },

 
});
