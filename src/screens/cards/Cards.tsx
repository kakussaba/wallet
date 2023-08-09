import React from 'react';
import * as S from './style';
import {WCardList} from '../../components/WCardList';
import {WButton} from '../../components/WButton';
import {CardsProps} from './types';

export const Cards: React.FC<CardsProps> = ({
  data,
  cardInUse,
  onCardPress,
  onButtonPress,
}) => {
  return (
    <>
      <S.CardsContainer>
        <WCardList
          data={data.slice(-2)}
          cardInUse={cardInUse}
          onPress={onCardPress}
        />
      </S.CardsContainer>
      <S.ButtonsContainer>
        <WButton
          text={cardInUse ? 'pagar com este cartão' : 'usar este cartão'}
          type={cardInUse ? 'primary' : 'tertiary'}
          onPress={onButtonPress}
        />
      </S.ButtonsContainer>
    </>
  );
};
