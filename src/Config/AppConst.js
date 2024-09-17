import {Dimensions} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

//  Responsive Design width & height
export const HEIGHT = responsiveHeight;
export const WIDTH = responsiveWidth;
export const FONTSIZE = responsiveFontSize;

// Dimensions
export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;

// Custom Fonts
export const DM_sans_Light = "DMSans-Light";
export const DM_sans_Regular = "DMSans-Regular";
export const DM_sans_Medium = "DMSans-Medium";
export const DM_sans_SemiBold = "DMSans-SemiBold";
export const DM_sans_Bold = "DMSans-Bold";
export const Roboto_Regular = "Roboto-Regular";

