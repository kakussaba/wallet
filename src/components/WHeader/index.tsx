import React from 'react';
import {WText} from '../WText';
import * as S from './style';
import {WHeaderProps} from './types';
import {useTheme} from 'styled-components/native';

export const WHeader: React.FC<WHeaderProps> = ({text}) => {
  const {colors, fontSize} = useTheme();

  return (
    <S.Container>
      <WText
        text={text}
        color={colors.BLUE_LIGHT}
        fontSize={fontSize.XMD}
        alignment="center"
      />
    </S.Container>
  );
};
