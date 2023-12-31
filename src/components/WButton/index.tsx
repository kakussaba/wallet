import React, {useCallback} from 'react';
import {WText} from '../WText';
import * as S from './style';
import {WButtonProps} from './types';
import {useTheme} from 'styled-components/native';

export const WButton: React.FC<WButtonProps> = ({
  type,
  text,
  onPress,
  disabled = false,
}) => {
  const {colors, fontSize} = useTheme();

  const color =
    type === 'primary' || type === 'tertiary' ? colors.WHITE : colors.BLUE_DARK;

  const setBackgroundColor = useCallback(() => {
    switch (type) {
      case 'primary': {
        return colors.BLUE_LIGHT;
      }
      case 'secondary': {
        return colors.GREEN_LIGHT;
      }
      case 'tertiary': {
        return colors.TRANSPARENT;
      }
    }
  }, [type]);

  return (
    <S.Container
      accessible
      accessibilityHint={text}
      accessibilityLabel="button"
      color={disabled ? colors.GREY_LIGHT : setBackgroundColor()}
      onPress={onPress}
      disabled={disabled}
      testID={text}>
      <WText
        text={text}
        color={disabled ? colors.GREY : color}
        fontSize={type === 'tertiary' ? fontSize.XSM : fontSize.SM}
        alignment="center"
        noTestID
      />
    </S.Container>
  );
};
