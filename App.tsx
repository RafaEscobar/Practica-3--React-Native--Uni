import React from 'react'
// Importamos el ---react-native-gesture-handler'--- (muy importante)
import 'react-native-gesture-handler';
// Importamos el -NavigationContainer-
import { NavigationContainer } from '@react-navigation/native';
// Importamos el -DrawerNavigator- 
import { DrawerNavigator } from './navigation/DrawerNavigator';
import { ParaScreen } from './src/screens/ParaScreen';

export const App = () => {
  return (
    // // #12 Abrimos el NavigatorContainer
     <NavigationContainer>
       {/* #13 Mandamos a llamar (para mostralo) al DrawerNavigator, el cual a su ves, indirectamente llama al TabNavigator, haciendo posible la fusion de las navegaciones */}
       <DrawerNavigator />
     </NavigationContainer>
  )
}
 