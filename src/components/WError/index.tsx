import React from 'react';
import {WText} from '../WText';
import * as S from './style';
import {WErrorProps} from './types';
import {useTheme} from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export const WError: React.FC<WErrorProps> = ({text}) => {
  const {colors, fontSize} = useTheme();

  return (
    <S.Container>
      <Icon name="frown" size={80} color={colors.GREY} />
      <WText
        text={text}
        color={colors.GREY}
        fontSize={fontSize.SM}
        alignment="center"
      />
    </S.Container>
  );
};
