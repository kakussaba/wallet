import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {WButton} from '../../global/components/WBaseButton';
import {WText} from '../../global/components/WText';
import {NavigationStackParam} from '../../routes/types';
import * as S from './style';
import {useTheme} from 'styled-components/native';

type HomeScreenProps = StackScreenProps<NavigationStackParam, 'Home'>;

export const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const {colors, fontSize, margin} = useTheme();

  useEffect(() => {
    console.log(margin);
  }, [margin]);

  return (
    <S.Container>
      <S.ContainerTitle>
        <WText text="Wallet Test" fontSize={fontSize.MD} color={colors.WHITE} />
      </S.ContainerTitle>
      <WButton text="meus cartões" type="primary" />
      <WButton text="cadastrar cartão" type="secondary" />
    </S.Container>
  );
};
