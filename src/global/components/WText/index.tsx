import React from 'react';
import * as S from './style';
import {WTextProps} from './types';

export const WText: React.FC<WTextProps> = ({
  color,
  fontSize,
  text,
  alignment = 'left',
}) => {
  return (
    <S.Text color={color} fontSize={fontSize} alignment={alignment}>
      {text}
    </S.Text>
  );
};
