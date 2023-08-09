import React from 'react';
import * as S from './style';
import {Masks} from 'react-native-mask-input';
import {WBackground} from '../../../global/components/WBackground';
import {WButton} from '../../../global/components/WBaseButton';
import {WInput} from '../../../global/components/WInput';
import {WTitle} from '../../../global/components/WTitle';
import * as yup from 'yup';
import {Formik} from 'formik';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';
import {Card} from '../../../services/types';

export const Form: React.FC<{onSubmit: (values: Card) => void}> = ({
  onSubmit,
}) => {
  return (
    <Formik
      initialValues={{
        number: '',
        name: '',
        expiration: '',
        cvv: '',
      }}
      onSubmit={values => {
        onSubmit(values);
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
      }) => (
        <WBackground>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
              keyboardVerticalOffset={90}>
              <WTitle text="Wallet Test" />
              <S.Container>
                <WInput
                  testID="number"
                  value={values.number}
                  label="número do cartão"
                  mask={Masks.CREDIT_CARD}
                  onChangeText={handleChange('number')}
                  onBlur={() => setFieldTouched('number')}
                  full
                  type="numeric"
                />
              </S.Container>
              <S.Container>
                <WInput
                  testID="name"
                  value={values.name}
                  label="nome do titular do cartão"
                  onChangeText={handleChange('name')}
                  onBlur={() => setFieldTouched('name')}
                  full
                />
              </S.Container>
              <S.Container>
                <WInput
                  testID="expiration"
                  value={values.expiration}
                  label="vencimento"
                  mask={[/^[0-1]$/, /^([0-9]|1[012])$/, '/', /\d/, /\d/]}
                  onChangeText={handleChange('expiration')}
                  onBlur={() => setFieldTouched('expiration')}
                  placeholder="0"
                  type="numeric"
                />
                <WInput
                  testID="cvv"
                  value={values.cvv}
                  label="código de segurança"
                  mask={[/\d/, /\d/, /\d/]}
                  onChangeText={handleChange('cvv')}
                  onBlur={() => setFieldTouched('cvv')}
                  placeholder="•"
                  type="numeric"
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
