import {StackScreenProps} from '@react-navigation/stack';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {NavigationStackParam} from '../../routes/types';
import {WHeader} from '../../global/components/WHeader';
import * as S from './style';
import {Card} from '../../services/types';
import {WButton} from '../../global/components/WBaseButton';
import {useTheme} from 'styled-components/native';
import {WCard} from '../../global/components/WCard';
import {Animated} from 'react-native';

type CardsScreenProps = StackScreenProps<NavigationStackParam, 'Cards'>;

const data = [
  {
    type: 'Green Card',
    name: 'João Carlos Pereira',
    number: '0123 2345 3456 7890',
    date: '04/32',
  },
  {
    type: 'Black Card',
    name: 'João Carlos Pereira',
    number: '0987 7654 5432 4321',
    date: '06/29',
  },
];

export const CardsScreen: React.FC<CardsScreenProps> = ({navigation}) => {
  const {navigate} = navigation;
  const {colors} = useTheme();
  const [cards, setCards] = useState<Card[]>(data);
  const [frontCard, setFrontCard] = useState<number>(1);
  const [selectedCard, setSelectedCard] = useState<boolean>(false);
  const backTranslation = useRef(new Animated.Value(180)).current;
  const frontTranslation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    setCards(data);
  }, []);

  useEffect(() => {
    if (frontCard === 0) {
      Animated.timing(backTranslation, {
        toValue: 245,
        duration: 1000,
        useNativeDriver: true,
      }).start();

      Animated.timing(frontTranslation, {
        toValue: -80,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    }
    if (frontCard === 1) {
      Animated.timing(backTranslation, {
        toValue: 180,
        duration: 1000,
        useNativeDriver: true,
      }).start();

      Animated.timing(frontTranslation, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    }
  }, [frontCard]);

  const renderCards = useCallback(() => {
    return (
      <S.CardsContainer>
        <Animated.View
          style={{
            transform: [
              {
                translateY: backTranslation,
              },
            ],
            zIndex: frontCard === 0 ? 1 : 0,
          }}>
          <WCard
            data={cards[0]}
            onPress={() => {
              setFrontCard(0);
              setSelectedCard(false);
            }}
          />
        </Animated.View>
        <Animated.View
          style={{
            transform: [
              {
                translateY: frontTranslation,
              },
            ],
            zIndex: frontCard === 1 ? 1 : 0,
          }}>
          <WCard
            data={cards[1]}
            onPress={() => {
              setFrontCard(1);
              setSelectedCard(false);
            }}
          />
        </Animated.View>
      </S.CardsContainer>
    );
  }, [frontCard, backTranslation, frontTranslation]);

  useEffect(() => {
    if (selectedCard) {
      if (frontCard === 0) {
        Animated.timing(backTranslation, {
          toValue: 140,
          duration: 1000,
          useNativeDriver: true,
        }).start();

        Animated.timing(frontTranslation, {
          toValue: 320,
          duration: 1000,
          useNativeDriver: true,
        }).start();
      }

      if (frontCard === 1) {
        Animated.timing(backTranslation, {
          toValue: 580,
          duration: 1000,
          useNativeDriver: true,
        }).start();

        Animated.timing(frontTranslation, {
          toValue: -100,
          duration: 1000,
          useNativeDriver: true,
        }).start();
      }
    }
  }, [selectedCard]);

  return (
    <S.Container>
      <WHeader text="Meus cartões" />
      <S.Body>
        {renderCards()}
        {selectedCard ? (
          <WButton
            text="pagar com este cartão"
            type="primary"
            onPress={() => {}}
            color={colors.WHITE}
          />
        ) : (
          <WButton
            text="usar este cartão"
            type="tertiary"
            onPress={() => {
              setSelectedCard(true);
            }}
          />
        )}
      </S.Body>
    </S.Container>
  );
};
