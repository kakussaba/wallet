import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Masks} from 'react-native-mask-input';
import {WBackground} from '../../../global/components/WBackground';
import {WButton} from '../../../global/components/WBaseButton';
import {WInput} from '../../../global/components/WInput';
import {WTitle} from '../../../global/components/WTitle';
import {RegisterStackParamList} from '../types';
import * as S from './style';

type FormScreenProps = StackScreenProps<RegisterStackParamList, 'Form'>;

export const FormScreen: React.FC<FormScreenProps> = ({navigation}) => {
  const {navigate} = navigation;

  return (
    <WBackground>
      <WTitle text="Wallet Test" />
      <S.Container>
        <WInput label="número do cartão" mask={Masks.CREDIT_CARD} full />
      </S.Container>
      <S.Container>
        <WInput label="nome do titular do cartão" full />
      </S.Container>
      <S.Container>
        <WInput
          label="vencimento"
          mask={[/\d/, /\d/, '/', /\d/, /\d/]}
          placeholder="0"
        />
        <WInput
          label="código de segurança"
          mask={[/\d/, /\d/, /\d/]}
          placeholder="*"
        />
      </S.Container>
      <WButton
        text="avançar"
        type="primary"
        onPress={() => navigate('Register', {screen: 'Preview'})}
        disabled={false}
      />
    </WBackground>
  );
};
