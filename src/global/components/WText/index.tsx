import React from 'react';
import * as S from './style';
import {WTextProps} from './types';

export const WText: React.FC<WTextProps> = ({color, fontSize, text}) => {
  return (
    <S.Text color={color} fontSize={fontSize}>
      {text}
    </S.Text>
  );
};
