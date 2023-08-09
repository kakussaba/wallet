import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {RegisterStackParamList} from '../types';
import {registerCard} from '../../../services/cardsApi';
import {Card} from '../../../services/types';
import uuid from 'react-native-uuid';
import {Form} from './Form';
import {useTheme} from 'styled-components/native';
import {WIconButton} from '../../../global/components/WIconButton';
import {WHeaderBar, WHeaderTitle} from '../../../global/components/WHeaderBar';

type FormScreenProps = StackScreenProps<RegisterStackParamList, 'Form'>;

export const FormScreen: React.FC<FormScreenProps> = ({navigation}) => {
  const {navigate} = navigation;
  const {colors, fontSize} = useTheme();

  useEffect(() => {
    navigation.getParent()?.setOptions({
      headerTransparent: true,
      header: () => (
        <WHeaderBar
          text="cadastro"
          textColor={colors.BLUE_LIGHT}
          leftIcon="arrow-left"
          onPressLeftIcon={() => navigation.goBack()}
        />
      ),
    });
  }, [navigation]);

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
    <Form
      onSubmit={(values: Card) => {
        postCard(values);
      }}
    />
  );
};
