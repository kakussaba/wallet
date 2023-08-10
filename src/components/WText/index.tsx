import React from 'react';
import * as S from './style';
import {WTextProps} from './types';

export const WText: React.FC<WTextProps> = ({
  color,
  fontSize,
  text,
  alignment = 'left',
  noTestID = false,
}) => {
  const textProps = {
    testID: text,
    accessibilityHint: text,
  };

  return (
    <S.Text
      accessible
      color={color}
      fontSize={fontSize}
      alignment={alignment}
      {...(!noTestID && textProps)}>
      {text}
    </S.Text>
  );
};
