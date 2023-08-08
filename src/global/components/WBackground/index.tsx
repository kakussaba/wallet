import React from 'react';
import * as S from './style';
import {WBackgroundProps} from './types';
import {Detail} from './Detail';

export const WBackground: React.FC<WBackgroundProps> = ({
  children,
  big = false,
}) => {
  return (
    <S.Container>
      <Detail big={big} position="top" />
      {children}
      <Detail big={big} position="bottom" />
    </S.Container>
  );
};
