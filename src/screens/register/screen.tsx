import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {WBackground} from '../../global/components/WBackground';
import {WInput} from '../../global/components/WInput';
import {WTitle} from '../../global/components/WTitle';
import {NavigationStackParam} from '../../routes/types';
import {Masks} from 'react-native-mask-input';
import * as S from './style';
import {WButton} from '../../global/components/WBaseButton';

type RegisterScreenProps = StackScreenProps<NavigationStackParam, 'Register'>;

export const RegisterScreen: React.FC<RegisterScreenProps> = ({navigation}) => {
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
        type="secondary"
        onPress={() => {}}
        disabled={true}
      />
    </WBackground>
  );
};
