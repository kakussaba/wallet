import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {WButton} from '../../components/WButton';
import {NavigationStackParam} from '../../routes/types';

import {WBackground} from '../../components/WBackground';
import {WTitle} from '../../components/WTitle';

type HomeScreenProps = StackScreenProps<NavigationStackParam, 'Home'>;

export const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const {navigate} = navigation;

  return (
    <WBackground>
      <WTitle text="Wallet Test" />
      <WButton
        text="meus cartões"
        type="primary"
        onPress={() => navigate('Cards')}
      />
      <WButton
        text="cadastrar cartão"
        type="secondary"
        onPress={() => navigate('Register', {screen: 'Form'})}
      />
    </WBackground>
  );
};
