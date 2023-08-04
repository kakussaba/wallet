import React from 'react';
import {WText} from '../WText';
import * as S from './style';
import {WButtonProps} from './types';
import {useTheme} from 'styled-components/native';

export const WButton: React.FC<WButtonProps> = ({
  type,
  text,
  onPress,
  disabled,
}) => {
  const {colors, fontSize} = useTheme();

  return (
    <S.ContainerButton
      color={
        disabled
          ? colors.GREY_LIGHT
          : type === 'primary'
          ? colors.PRIMARY
          : colors.SECONDARY
      }
      onPress={onPress}
      disabled={disabled}>
      <WText
        text={text}
        color={
          disabled
            ? colors.GREY
            : type === 'primary'
            ? colors.WHITE
            : colors.DARK_BLUE
        }
        fontSize={fontSize.XMD}
      />
    </S.ContainerButton>
  );
};
