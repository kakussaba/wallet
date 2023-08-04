import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../screens/home/index';
import {RegisterScreen} from '../screens/register';
import {NavigationStackParam} from './types';
import {enableScreens} from 'react-native-screens';
import {useTheme} from 'styled-components';

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
          component={RegisterScreen}
          options={{
            title: 'cadastro',
            headerStyle: {
              backgroundColor: colors.BLUE_DARK,
            },
            headerTintColor: colors.BLUE_LIGHT,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
