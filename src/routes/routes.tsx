/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../screens/home/index';
import {NavigationStackParam} from './types';
import {enableScreens} from 'react-native-screens';
import {useTheme} from 'styled-components';
import {RegisterRoutes} from '../screens/register/index.routes';
import {CardsScreen} from '../screens/cards';
import {WIconButton} from '../global/components/WIconButton';
import {navigationRef} from './RootNavigation';

enableScreens();

const Stack = createNativeStackNavigator<NavigationStackParam>();

export const Routes: React.FC<{}> = () => {
  const {colors} = useTheme();

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName={'Home'}>
        <Stack.Screen
          name={'Home'}
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={'Register'}
          component={RegisterRoutes}
          options={({navigation}) => ({
            title: 'cadastro',
            headerStyle: {
              backgroundColor: colors.BLUE_DARK,
            },
            headerTitleStyle: {
              fontFamily: 'PT Sans Caption',
              fontSize: 22,
            },
            headerTintColor: colors.BLUE_LIGHT,
            headerLeft: () => (
              <WIconButton
                icon="arrow-left"
                onPress={() => {
                  navigation.goBack();
                }}
              />
            ),
          })}
        />
        <Stack.Screen
          name={'Cards'}
          component={CardsScreen}
          options={({navigation}) => ({
            title: 'Wallet Test',
            headerShown: false,
            headerStyle: {
              backgroundColor: colors.WHITE,
            },
            headerTitleStyle: {
              fontFamily: 'PT Sans Caption',
              fontSize: 22,
            },
            headerTintColor: colors.BLUE_DARK,
            headerLeft: () => (
              <WIconButton
                icon="arrow-left"
                onPress={() => {
                  navigation.goBack();
                }}
              />
            ),
            headerRight: () => (
              <WIconButton
                icon="plus"
                onPress={() => {
                  navigation.navigate('Register', {screen: 'Form'});
                }}
              />
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
