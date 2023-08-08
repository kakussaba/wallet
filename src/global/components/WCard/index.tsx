import React from 'react';
import {WText} from '../WText';
import * as S from './style';
import {WCardProps} from './types';
import {useTheme} from 'styled-components/native';

export const WCard: React.FC<WCardProps> = ({
  data,
  onPress,
  disabled,
  unfocused,
}) => {
  const {colors, fontSize} = useTheme();

  const cardColor = data.type === 0 ? colors.BLACK : colors.GREEN_LIGHT;
  const color = data.type === 0 ? colors.WHITE : colors.BLACK;
  const typeCard = data.type === 0 ? 'Black Card' : 'Green Card';

  return (
    <S.Container
      color={cardColor}
      onPress={onPress}
      disabled={disabled}
      unfocused={unfocused}>
      <S.Header>
        <WText text={typeCard} color={color} fontSize={fontSize.XMD} />
      </S.Header>
      <WText text={data.name} color={color} fontSize={fontSize.SM} />
      <WText text={data.number} color={color} fontSize={fontSize.SM} />
      <WText
        text={`Validade ${data.expiration}`}
        color={color}
        fontSize={fontSize.SM}
      />
    </S.Container>
  );
};
