import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../screens/home/index';
import {NavigationStackParam} from './types';
import {enableScreens} from 'react-native-screens';

enableScreens();

const Stack = createNativeStackNavigator<NavigationStackParam>();

export const Routes: React.FC<{}> = () => {
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};
