import React from 'react';
import {WText} from '../WText';
import * as S from './style';
import {WTitleProps} from './types';
import {useTheme} from 'styled-components/native';

export const WTitle: React.FC<WTitleProps> = ({text}) => {
  const {colors, fontSize} = useTheme();
  return (
    <S.ContainerTitle>
      <WText text={text} fontSize={fontSize.MD} color={colors.WHITE} />
    </S.ContainerTitle>
  );
};
