import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {WButton} from '../../global/components/WBaseButton';
import {NavigationStackParam} from '../../routes/types';

import {WBackground} from '../../global/components/WBackground';
import {WTitle} from '../../global/components/WTitle';

type HomeScreenProps = StackScreenProps<NavigationStackParam, 'Home'>;

export const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const {navigate} = navigation;

  return (
    <WBackground>
      <WTitle text="Wallet Test" />
      <WButton
        testID="meus cartões"
        text="meus cartões"
        type="primary"
        onPress={() => navigate('Cards')}
      />
      <WButton
        testID="cadastrar cartão"
        text="cadastrar cartão"
        type="secondary"
        onPress={() => navigate('Register', {screen: 'Form'})}
      />
    </WBackground>
  );
};
