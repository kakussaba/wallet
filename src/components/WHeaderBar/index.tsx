import React from 'react';
import {WIconButton} from '../WIconButton';
import {WText} from '../WText';
import * as S from './style';
import {WHeaderBarProps} from './types';
import {useTheme} from 'styled-components/native';

export const WHeaderBar: React.FC<WHeaderBarProps> = ({
  text,
  textColor,
  leftIcon,
  onPressLeftIcon,
  rightIcon,
  onPressRightIcon,
  backgroundColor = '#FF000000',
}) => {
  const {fontSize} = useTheme();
  return (
    <S.Container backgroundColor={backgroundColor}>
      <S.ContainerIcon>
        {leftIcon && <WIconButton icon={leftIcon} onPress={onPressLeftIcon} />}
      </S.ContainerIcon>
      <WText
        text={text}
        color={textColor}
        fontSize={fontSize.MD}
        alignment="center"
      />
      <S.ContainerIcon>
        {rightIcon && (
          <WIconButton icon={rightIcon} onPress={onPressRightIcon} />
        )}
      </S.ContainerIcon>
    </S.Container>
  );
};
