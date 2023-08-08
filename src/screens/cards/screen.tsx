import {StackScreenProps} from '@react-navigation/stack';
import React, {useCallback, useEffect, useState} from 'react';
import {NavigationStackParam} from '../../routes/types';
import {WHeader} from '../../global/components/WHeader';
import * as S from './style';
import {Card} from '../../services/types';
import {WButton} from '../../global/components/WBaseButton';
import {getCards} from '../../services/walletApi';
import {WCardList} from '../../global/components/WCardList';

type CardsScreenProps = StackScreenProps<NavigationStackParam, 'Cards'>;

export const CardsScreen: React.FC<CardsScreenProps> = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [cardInUse, setCardInUse] = useState<boolean>(false);

  const getCardsList = async () => {
    try {
      const {data} = await getCards();
      setCards(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCardsList();
  }, []);

  const renderCards = useCallback(
    () => (
      <S.CardsContainer>
        <WCardList
          data={cards}
          cardInUse={cardInUse}
          onPress={() => setCardInUse(false)}
        />
      </S.CardsContainer>
    ),
    [cards, cardInUse],
  );

  const renderButtons = useCallback(
    () => (
      <S.ButtonsContainer>
        <WButton
          text={cardInUse ? 'pagar com este cartão' : 'usar este cartão'}
          type={cardInUse ? 'primary' : 'tertiary'}
          onPress={() => !cardInUse && setCardInUse(true)}
        />
      </S.ButtonsContainer>
    ),
    [cardInUse],
  );

  return (
    <S.Container>
      <WHeader text="Meus cartões" />
      <S.Body>
        {cards && renderCards()}
        {renderButtons()}
      </S.Body>
    </S.Container>
  );
};
