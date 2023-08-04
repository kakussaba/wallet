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
    SM: `${responsive(2)}px`,
    XMD: `${responsive(2.1)}px`,
    MD: `${responsive(3.2)}px`,
  },

  colors: {
    PRIMARY: '#12C2E9',
    SECONDARY: '#A5FF32',

    WHITE: '#FFFFFF',
    BLUE_DARK: '#142995',
    BLUE_LIGHT: '#12C2E9',
    GREY: '#BBBBBB',
    GREY_LIGHT: '#EEEEEE',
  },
};
