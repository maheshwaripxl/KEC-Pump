import {StyleSheet} from 'react-native';
import COLOR from '../../Config/color.json';
import {
  DM_sans_Bold,
  DM_sans_Medium,
  HEIGHT,
  WIDTH,
} from '../../Config/AppConst';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: HEIGHT(21),
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR.White,
  },

  logo: {
    marginVertical: HEIGHT(2),
  },

  heading: {
    fontSize: 45,
    fontFamily: DM_sans_Bold,
    color: '#0071C1',
    marginBottom: HEIGHT(2),
    textDecorationLine: 'underline',
    textDecorationColor: '#1D4486',
  },

  desc: {
    width: WIDTH(80),
    textAlign: 'center',
    lineHeight: HEIGHT(5),
    letterSpacing: 1,
    fontSize: 22,
    fontFamily: DM_sans_Medium,
    color: '#1D4486',
  },

  img: {
    position: 'absolute',
    bottom: 8,
    width: WIDTH(100),
    height: HEIGHT(35),
  },
});
