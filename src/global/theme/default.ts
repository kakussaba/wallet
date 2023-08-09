import {RFPercentage as responsive} from 'react-native-responsive-fontsize';

export default {
  padding: {
    XS: `${responsive(0.5)}px`,
    SM: `${responsive(1.2)}px`,
    MD: `${responsive(2)}px`,
    LG: `${responsive(3)}px`,
  },

  margin: {
    XS: `${responsive(0.5)}px`,
    SM: `${responsive(1.2)}px`,
    MD: `${responsive(2)}px`,
    LG: `${responsive(3)}px`,
  },

  fontSize: {
    XS: `${responsive(1.7)}px`, //14
    XSM: `${responsive(1.9)}px`, //16
    SM: `${responsive(2.1)}px`, //18
    XMD: `${responsive(2.4)}px`, //20
    MD: `${responsive(2.6)}px`, //22
    LG: `${responsive(3.3)}px`, //28
  },

  colors: {
    WHITE: '#FFFFFF',
    BLUE_DARK: '#142995',
    BLUE_LIGHT: '#12C2E9',
    GREY: '#BBBBBB',
    GREY_LIGHT: '#EEEEEE',
    BLACK: '#000000',
    GREEN_LIGHT: '#A5FF32',
    TRANSPARENT: '#FF000000',
    RED: '#FF0000',
  },
};
