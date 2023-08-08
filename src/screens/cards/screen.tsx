import {StackScreenProps} from '@react-navigation/stack';
import React, {useCallback, useEffect, useState} from 'react';
import {NavigationStackParam} from '../../routes/types';
import {WHeader} from '../../global/components/WHeader';
import * as S from './style';
import {Card} from '../../services/types';
import {WButton} from '../../global/components/WBaseButton';
import {getCards} from '../../services/walletApi';
import {WCardList} from '../../global/components/WCardList';
import {WText} from '../../global/components/WText';
import {useTheme} from 'styled-components/native';
import {WBackground} from '../../global/components/WBackground';
import {WLoading} from '../../global/components/WLoading';

type CardsScreenProps = StackScreenProps<NavigationStackParam, 'Cards'>;

export const CardsScreen: React.FC<CardsScreenProps> = ({navigation}) => {
  const {colors, fontSize} = useTheme();
  const [cards, setCards] = useState<Card[]>([]);
  const [cardInUse, setCardInUse] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  const getCardsList = async () => {
    try {
      const {data} = await getCards();
      setCards(data);
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  };

  useEffect(() => {
    getCardsList();
  }, [navigation]);

  useEffect(() => {
    navigation.setOptions({headerShown: !loading});
  }, [loading]);

  const renderCards = useCallback(
    () => (
      <>
        <S.CardsContainer>
          <WCardList
            data={cards}
            cardInUse={cardInUse}
            onPress={() => setCardInUse(false)}
          />
        </S.CardsContainer>
        <S.ButtonsContainer>
          <WButton
            text={cardInUse ? 'pagar com este cartão' : 'usar este cartão'}
            type={cardInUse ? 'primary' : 'tertiary'}
            onPress={() => !cardInUse && setCardInUse(true)}
          />
        </S.ButtonsContainer>
      </>
    ),
    [cards, cardInUse],
  );

  return (
    <>
      {loading ? (
        <WBackground big>
          <WLoading loading={loading} />
        </WBackground>
      ) : (
        <S.Container>
          <WHeader text="Meus cartões" />
          <S.Body>
            {cards.length > 0 ? (
              renderCards()
            ) : (
              <WText
                text="Você ainda não possui nenhum cartão cadastrado."
                color={colors.WHITE}
                fontSize={fontSize.SM}
                alignment="center"
              />
            )}
          </S.Body>
        </S.Container>
      )}
    </>
  );
};
