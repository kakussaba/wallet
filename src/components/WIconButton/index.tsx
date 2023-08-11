import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useTheme} from 'styled-components/native';
import * as S from './style';
import {WIconButtonProps} from './type';

export const WIconButton: React.FC<WIconButtonProps> = ({icon, onPress}) => {
  const {colors} = useTheme();

  return (
    <S.Container
      accessible
      accessibilityHint={icon}
      testID={icon}
      onPress={onPress}>
      <Icon name={icon} size={21} color={colors.BLUE_LIGHT} />
    </S.Container>
  );
};
