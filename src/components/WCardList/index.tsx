/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useRef, useState} from 'react';
import {WCardListProps} from './types';
import {Animated} from 'react-native';
import {WCard} from '../WCard';

const INITIAL_FRONT = 0;

export const WCardList: React.FC<WCardListProps> = ({
  data,
  cardInUse,
  onPress,
}) => {
  const [frontCard, setFrontCard] = useState<number>(0);
  const frontTranslation = useRef(new Animated.Value(180)).current;
  const backTranslation = useRef(new Animated.Value(-140)).current;

  useEffect(() => {
    Animated.timing(frontTranslation, {
      toValue: frontCard === INITIAL_FRONT ? 180 : 110,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    Animated.timing(backTranslation, {
      toValue: frontCard === INITIAL_FRONT ? -140 : -70,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [frontCard, frontTranslation, backTranslation]);

  useEffect(() => {
    if (cardInUse) {
      Animated.timing(frontTranslation, {
        toValue: frontCard === INITIAL_FRONT ? 80 : 580,
        duration: 1000,
        useNativeDriver: true,
      }).start();

      Animated.timing(backTranslation, {
        toValue: frontCard === INITIAL_FRONT ? 320 : -140,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    }
  }, [cardInUse]);

  return (
    <>
      {data.map(i => (
        <Animated.View
          key={i.id}
          style={{
            transform: [
              {
                translateY:
                  data.indexOf(i) === 0 ? frontTranslation : backTranslation,
              },
            ],
            zIndex: data.indexOf(i) === frontCard ? 1 : 0,
          }}>
          <WCard
            data={i}
            onPress={() => {
              setFrontCard(data.indexOf(i));
              onPress();
            }}
            disabled={cardInUse && frontCard === data.indexOf(i)}
            unfocused={cardInUse && frontCard !== data.indexOf(i)}
          />
        </Animated.View>
      ))}
    </>
  );
};