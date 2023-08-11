import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import {ThemeProvider} from 'styled-components/native';
import theme from '../../src/global/theme/default';
import {HomeScreen} from '../../src/screens/home';

describe('Home', () => {
  const createTestProps = (props: Object) => ({
    navigation: {
      navigate: jest.fn(),
    },
    ...props,
  });
  describe('home was rendered', () => {
    let props: any;
    beforeEach(() => {
      props = createTestProps({});
    });
    it('show the components', () => {
      const {getByTestId} = render(
        <ThemeProvider theme={theme}>
          <HomeScreen {...props} />
        </ThemeProvider>,
      );

      expect(getByTestId('Wallet Test')).toBeTruthy();
      expect(getByTestId('meus cartões')).toBeTruthy();
      expect(getByTestId('cadastrar cartão')).toBeTruthy();
    });

    it('should be call Cards Screen when the button was clicked', () => {
      const {getByTestId} = render(
        <ThemeProvider theme={theme}>
          <HomeScreen {...props} />
        </ThemeProvider>,
      );

      fireEvent.press(getByTestId('meus cartões'));

      expect(props.navigation.navigate).toHaveBeenCalledWith('Cards');
    });

    it('should be call Register Screen when the button was clicked', () => {
      const {getByTestId} = render(
        <ThemeProvider theme={theme}>
          <HomeScreen {...props} />
        </ThemeProvider>,
      );

      fireEvent.press(getByTestId('cadastrar cartão'));

      expect(props.navigation.navigate).toHaveBeenCalledWith('Register', {
        screen: 'Form',
      });
    });
  });
});
