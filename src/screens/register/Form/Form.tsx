import React from 'react';
import * as S from './style';
import {WBackground} from '../../../components/WBackground';
import {WButton} from '../../../components/WButton';
import {WInput} from '../../../components/WInput';
import {WTitle} from '../../../components/WTitle';
import * as yup from 'yup';
import {Formik} from 'formik';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';
import {Card} from '../../../services/types';
import {yupValidationSchema} from './valitationSchema';

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
      validationSchema={yup.object().shape(yupValidationSchema)}>
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
                  onChangeText={handleChange('number')}
                  onBlur={() => setFieldTouched('number')}
                  full
                  maxLength={18}
                  mask="card"
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
                  maxLength={50}
                />
              </S.Container>
              <S.Container>
                <WInput
                  testID="expiration"
                  value={values.expiration}
                  label="vencimento"
                  onChangeText={handleChange('expiration')}
                  onBlur={() => setFieldTouched('expiration')}
                  placeholder="00/00"
                  maxLength={5}
                  mask="date"
                />
                <WInput
                  testID="cvv"
                  value={values.cvv}
                  label="código de segurança"
                  onChangeText={handleChange('cvv')}
                  onBlur={() => setFieldTouched('cvv')}
                  placeholder="•••"
                  maxLength={3}
                  mask="number"
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
