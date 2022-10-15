import React from 'react'
import 'react-native-gesture-handler';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerNavigator } from './navigation/DrawerNavigator';

export const App = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  )
}
 