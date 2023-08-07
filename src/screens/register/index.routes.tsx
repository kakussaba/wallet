import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {FormScreen} from './Form';
import {RegisterStackParamList} from './types';
import {PreviewScreen} from './Preview';

const {Navigator, Screen} = createStackNavigator<RegisterStackParamList>();

export function RegisterRoutes() {
  return (
    <Navigator>
      <Screen
        name="Form"
        component={FormScreen}
        options={{headerShown: false}}
      />
      <Screen
        name="Preview"
        component={PreviewScreen}
        options={{headerShown: false}}
      />
    </Navigator>
  );
}
