import React from 'react';
import {WText} from '../WText';
import * as S from './style';
import {useTheme} from 'styled-components/native';
import {WTextErrorProps} from './types';

export const WTextError: React.FC<WTextErrorProps> = ({text}) => {
  const {colors, fontSize} = useTheme();
  return (
    <S.Container>
      <WText text={text} color={colors.RED} fontSize={fontSize.SM} />
    </S.Container>
  );
};
