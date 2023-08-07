import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../screens/home/index';
import {RegisterScreen} from '../screens/register/Form';
import {NavigationStackParam} from './types';
import {enableScreens} from 'react-native-screens';
import {useTheme} from 'styled-components';
import {RegisterRoutes} from '../screens/register/index.routes';
import {CardsScreen} from '../screens/cards';

enableScreens();

const Stack = createNativeStackNavigator<NavigationStackParam>();

export const Routes: React.FC<{}> = () => {
  const {colors} = useTheme();

  return (
    <NavigationContainer>
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
          options={{
            title: 'cadastro',
            headerStyle: {
              backgroundColor: colors.BLUE_DARK,
            },
            headerTintColor: colors.BLUE_LIGHT,
          }}
        />
        <Stack.Screen
          name={'Cards'}
          component={CardsScreen}
          options={{
            title: 'Wallet Test',
            headerStyle: {
              backgroundColor: colors.WHITE,
            },
            headerTintColor: colors.BLUE_DARK,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
