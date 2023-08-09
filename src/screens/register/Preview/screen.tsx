import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {WBackground} from '../../../components/WBackground';
import {WText} from '../../../components/WText';
import {WTitle} from '../../../components/WTitle';
import {RegisterStackParamList} from '../types';
import {useTheme} from 'styled-components/native';
import {WCard} from '../../../components/WCard';
import {WButton} from '../../../components/WButton';
import {navigate} from '../../../routes/RootNavigation';

type PreviewScreenProps = StackScreenProps<RegisterStackParamList, 'Preview'>;

export const PreviewScreen: React.FC<PreviewScreenProps> = ({route}) => {
  const {params} = route;
  const {colors, fontSize} = useTheme();

  return (
    <WBackground>
      <WTitle text="Wallet Test" />
      <WText
        text="cartão cadastrado com sucesso"
        color={colors.WHITE}
        fontSize={fontSize.SM}
        alignment="center"
      />
      <WCard data={params.card} disabled />
      <WButton
        text="avançar"
        type="primary"
        onPress={() => {
          navigate('Cards');
        }}
      />
    </WBackground>
  );
};
