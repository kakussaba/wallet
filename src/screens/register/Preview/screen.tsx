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
import * as S from './style';

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
      <S.ContainerCard>
        <WCard data={params.card} disabled />
      </S.ContainerCard>
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
