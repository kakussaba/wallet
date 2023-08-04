import React from 'react';
import * as S from './style';
import {WBackgroundProps} from './types';

export const WBackground: React.FC<WBackgroundProps> = ({children}) => {
  return <S.Container>{children}</S.Container>;
};
