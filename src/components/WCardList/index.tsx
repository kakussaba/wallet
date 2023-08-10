/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useRef, useState} from 'react';
import {WCardListProps} from './types';
import {Animated, Dimensions} from 'react-native';
import {WCard} from '../WCard';

const INITIAL_FRONT = 0;

const HEIGHT = Dimensions.get('screen').height;

export const WCardList: React.FC<WCardListProps> = ({
  data,
  cardInUse,
  onPress,
}) => {
  const [frontCard, setFrontCard] = useState<number>(0);
  const frontTranslation = useRef(new Animated.Value(HEIGHT * 0.22)).current;
  const backTranslation = useRef(new Animated.Value(-HEIGHT * 0.09)).current;

  useEffect(() => {
    Animated.timing(frontTranslation, {
      toValue: frontCard === INITIAL_FRONT ? HEIGHT * 0.22 : HEIGHT * 0.14,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    Animated.timing(backTranslation, {
      toValue: frontCard === INITIAL_FRONT ? -HEIGHT * 0.09 : HEIGHT * 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [frontCard, frontTranslation, backTranslation]);

  useEffect(() => {
    if (cardInUse) {
      Animated.timing(frontTranslation, {
        toValue: frontCard === INITIAL_FRONT ? HEIGHT * 0.1 : HEIGHT * 0.67,
        duration: 1000,
        useNativeDriver: true,
      }).start();

      Animated.timing(backTranslation, {
        toValue: frontCard === INITIAL_FRONT ? HEIGHT * 0.43 : -HEIGHT * 0.12,
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
