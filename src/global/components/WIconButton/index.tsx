/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {useTheme} from 'styled-components/native';
import * as S from './style';
import {WIconButtonProps} from './type';

export const WIconButton: React.FC<WIconButtonProps> = ({
  icon,
  onPress,
  backgroundColor,
}) => {
  const {colors} = useTheme();

  return (
    <S.Container
      name={icon}
      size={21}
      color={colors.BLUE_LIGHT}
      onPress={onPress}
      iconStyle={{
        left: 5,
      }}
      backgroundColor={backgroundColor ?? colors.TRANSPARENT}
      activeOpacity={1}
    />
  );
};
