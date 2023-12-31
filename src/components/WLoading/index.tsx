import React, {useEffect, useRef} from 'react';
import * as S from './style';
import {WLoadingProps} from './types';
import AnimationWallet from '../../assets/icons/animation-wallet.svg';
import {Animated, Easing} from 'react-native';

export const WLoading: React.FC<WLoadingProps> = ({}) => {
  const animation = useRef(new Animated.Value(0.5)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(animation, {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  }, [animation]);

  return (
    <S.Container
      testID="loading"
      accessible
      accessibilityHint="loading"
      style={{
        transform: [
          {
            scale: animation,
          },
        ],
      }}>
      <AnimationWallet />
    </S.Container>
  );
};
