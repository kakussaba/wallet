import React from 'react';
import {WText} from '../WText';
import * as S from './style';
import {WCardProps} from './types';
import {useTheme} from 'styled-components/native';

export const WCard: React.FC<WCardProps> = ({data, onPress, disabled}) => {
  const {colors, fontSize} = useTheme();

  const cardColor =
    data.type === 'Black Card' ? colors.BLACK : colors.GREEN_LIGHT;
  const color = data.type === 'Black Card' ? colors.WHITE : colors.BLACK;

  return (
    <S.Container color={cardColor} onPress={onPress} disabled={disabled}>
      <S.Header>
        <WText text={data.type} color={color} fontSize={fontSize.XMD} />
      </S.Header>
      <WText text={data.name} color={color} fontSize={fontSize.SM} />
      <WText text={data.number} color={color} fontSize={fontSize.SM} />
      <WText
        text={`Validade ${data.date}`}
        color={color}
        fontSize={fontSize.SM}
      />
    </S.Container>
  );
};
