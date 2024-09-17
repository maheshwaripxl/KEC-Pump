import {StyleSheet} from 'react-native';
import COLOR from '../../Config/color.json';
import {HEIGHT, WIDTH} from '../../Config/AppConst';

export const styles = StyleSheet.create({
  headView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR.Black,
    paddingVertical: HEIGHT(1.5),
    height: HEIGHT(12),
    width: WIDTH(100),
  },

  logo: {
    height: HEIGHT(8),
    width: WIDTH(30),
  },

  logoView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: HEIGHT(1.5),
    height: HEIGHT(12),
    width: WIDTH(100),
  },
});
