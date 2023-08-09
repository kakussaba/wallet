/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useTheme} from 'styled-components/native';
import * as S from './style';
import {WIconButtonProps} from './type';

export const WIconButton: React.FC<WIconButtonProps> = ({icon, onPress}) => {
  const {colors} = useTheme();

  return (
    <S.Container onPress={onPress}>
      <Icon name={icon} size={21} color={colors.BLUE_LIGHT} />
    </S.Container>
  );
};
