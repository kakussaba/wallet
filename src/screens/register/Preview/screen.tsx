import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {WBackground} from '../../../global/components/WBackground';
import {WText} from '../../../global/components/WText';
import {WTitle} from '../../../global/components/WTitle';
import {RegisterStackParamList} from '../types';
import {useTheme} from 'styled-components/native';
import * as S from './style';
import {WCard} from '../../../global/components/WCard';
import {WButton} from '../../../global/components/WBaseButton';

type PreviewScreenProps = StackScreenProps<RegisterStackParamList, 'Preview'>;

const data = [
  {
    type: 'Green Card',
    name: 'João Carlos Pereira',
    number: '0123 2345 3456 7890',
    date: '04/32',
  },
];

export const PreviewScreen: React.FC<PreviewScreenProps> = ({navigation}) => {
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
      <WCard data={data[0]} disabled />
      <WButton text="avançar" type="primary" onPress={() => {}} />
    </WBackground>
  );
};
