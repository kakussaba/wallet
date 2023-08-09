import {StackScreenProps} from '@react-navigation/stack';
import React, {useCallback} from 'react';
import {Masks} from 'react-native-mask-input';
import {WBackground} from '../../../global/components/WBackground';
import {WButton} from '../../../global/components/WBaseButton';
import {WInput} from '../../../global/components/WInput';
import {WTitle} from '../../../global/components/WTitle';
import {RegisterStackParamList} from '../types';
import * as S from './style';
import * as yup from 'yup';
import {Formik} from 'formik';
import {registerCard} from '../../../services/walletApi';
import {Card} from '../../../services/types';
import uuid from 'react-native-uuid';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';

type FormScreenProps = StackScreenProps<RegisterStackParamList, 'Form'>;

export const FormScreen: React.FC<FormScreenProps> = ({navigation}) => {
  const {navigate} = navigation;

  const postCard = async (values: Card) => {
    try {
      const card = {
        id: uuid.v4(),
        type: Math.random() < 0.5 ? 0 : 1,
        ...values,
      };
      await registerCard(card);
      navigate('Register', {screen: 'Preview', params: {card: card}});
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Formik
      initialValues={{
        number: '',
        name: '',
        expiration: '',
        cvv: '',
      }}
      onSubmit={values => {
        postCard(values);
      }}
      validationSchema={yup.object().shape({
        number: yup.string().min(19).required(),
        name: yup.string().max(50).required(),
        expiration: yup.string().min(5).required(),
        cvv: yup.string().min(3).required(),
      })}>
      {({
        values,
        handleChange,
        setFieldTouched,
        isValid,
        handleSubmit,
        dirty,
        resetForm,
      }) => (
        <WBackground>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
              keyboardVerticalOffset={90}>
              <WTitle text="Wallet Test" />
              <S.Container>
                <WInput
                  value={values.number}
                  label="número do cartão"
                  mask={Masks.CREDIT_CARD}
                  onChangeText={handleChange('number')}
                  onBlur={() => setFieldTouched('number')}
                  full
                />
              </S.Container>
              <S.Container>
                <WInput
                  value={values.name}
                  label="nome do titular do cartão"
                  onChangeText={handleChange('name')}
                  onBlur={() => setFieldTouched('name')}
                  full
                />
              </S.Container>
              <S.Container>
                <WInput
                  value={values.expiration}
                  label="vencimento"
                  mask={[/\d/, /\d/, '/', /\d/, /\d/]}
                  onChangeText={handleChange('expiration')}
                  onBlur={() => setFieldTouched('expiration')}
                  placeholder="0"
                />
                <WInput
                  value={values.cvv}
                  label="código de segurança"
                  mask={[/\d/, /\d/, /\d/]}
                  onChangeText={handleChange('cvv')}
                  onBlur={() => setFieldTouched('cvv')}
                  placeholder="*"
                />
              </S.Container>
              <WButton
                text="avançar"
                type="primary"
                onPress={handleSubmit}
                disabled={!(isValid && dirty)}
              />
            </KeyboardAvoidingView>
          </TouchableWithoutFeedback>
        </WBackground>
      )}
    </Formik>
  );
};
