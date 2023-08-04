import React from 'react';
import {WText} from '../WText';
import * as S from './style';
import {WButtonProps} from './types';
import {useTheme} from 'styled-components/native';

export const WButton: React.FC<WButtonProps> = ({type, text}) => {
  const {colors, fontSize} = useTheme();

  return (
    <S.ContainerButton
      color={type === 'primary' ? colors.PRIMARY : colors.SECONDARY}>
      <WText
        text={text}
        color={type === 'primary' ? colors.WHITE : colors.DARK_BLUE}
        fontSize={fontSize.XMD}
      />
    </S.ContainerButton>
  );
};
