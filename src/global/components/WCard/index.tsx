import React from 'react';
import {WText} from '../WText';
import * as S from './style';
import {WCardProps} from './types';
import {useTheme} from 'styled-components/native';

export const WCard: React.FC<WCardProps> = ({}) => {
  const {colors, fontSize} = useTheme();

  return (
    <S.Container>
      <S.Header>
        <WText text="Black Card" color={colors.WHITE} fontSize={fontSize.MD} />
      </S.Header>
      <WText
        text="João Carlos Pereira"
        color={colors.WHITE}
        fontSize={fontSize.SM}
      />
      <WText
        text="**** **** **** 2345"
        color={colors.WHITE}
        fontSize={fontSize.SM}
      />
      <WText
        text="Validade 04/32"
        color={colors.WHITE}
        fontSize={fontSize.SM}
      />
    </S.Container>
  );
};
