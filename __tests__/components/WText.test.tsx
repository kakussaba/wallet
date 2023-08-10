import React from 'react';
import {render} from '@testing-library/react-native';
import {WText} from '../../src/components/WText';

describe('WText', () => {
  describe('text was passed', () => {
    it('show the text', () => {
      const {getByTestId} = render(
        <WText text="Test" color="#FFF" fontSize="18px" />,
      );

      expect(getByTestId('Test')).toBeTruthy();
    });
  });
});
