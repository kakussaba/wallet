import {StackScreenProps} from '@react-navigation/stack';
import React, {useCallback, useEffect, useState} from 'react';
import {NavigationStackParam} from '../../routes/types';
import {WHeader} from '../../global/components/WHeader';
import * as S from './style';
import {WText} from '../../global/components/WText';
import {useTheme} from 'styled-components/native';
import {WBackground} from '../../global/components/WBackground';
import {WLoading} from '../../global/components/WLoading';
import {WHeaderBar} from '../../global/components/WHeaderBar';
import {Cards} from './Cards';
import {useCards} from '../../hooks/useCards';

type CardsScreenProps = StackScreenProps<NavigationStackParam, 'Cards'>;

export const CardsScreen: React.FC<CardsScreenProps> = ({navigation}) => {
  const {colors, fontSize} = useTheme();
  const {cards, updateCards, loading} = useCards();
  const [cardInUse, setCardInUse] = useState<boolean>(false);

  useEffect(() => {
    navigation.setOptions({
      header: () => (
        <WHeaderBar
          text="Wallet Test"
          textColor={colors.BLUE_DARK}
          leftIcon="arrow-left"
          onPressLeftIcon={() => navigation.goBack()}
          rightIcon="plus"
          onPressRightIcon={() =>
            navigation.navigate('Register', {screen: 'Form'})
          }
          backgroundColor={colors.WHITE}
        />
      ),
    });
  }, [navigation]);

  useEffect(() => {
    updateCards();
  }, [navigation]);

  useEffect(() => {
    navigation.setOptions({headerShown: !loading});
  }, [loading]);

  const renderCards = useCallback(
    () => (
      <Cards
        data={cards}
        cardInUse={cardInUse}
        onCardPress={() => setCardInUse(false)}
        onButtonPress={() => !cardInUse && setCardInUse(true)}
      />
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
            {cards?.length > 0 ? (
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
