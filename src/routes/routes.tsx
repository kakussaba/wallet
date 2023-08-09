/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../screens/home/index';
import {NavigationStackParam} from './types';
import {enableScreens} from 'react-native-screens';
import {RegisterRoutes} from '../screens/register/index.routes';
import {CardsScreen} from '../screens/cards';
import {navigationRef} from './RootNavigation';

enableScreens();

const Stack = createNativeStackNavigator<NavigationStackParam>();

export const Routes: React.FC<{}> = () => {
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
        <Stack.Screen name={'Register'} component={RegisterRoutes} />
        <Stack.Screen name={'Cards'} component={CardsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
