import React from 'react'

// #6 Importamos el createDrawerNavigator 
import { createDrawerNavigator } from '@react-navigation/drawer'

// #7 Importamos el TabNavigator
import { TabNavigator } from './TabNavigator'

// #8 Importamos las pages para el Drawer
import { AboutAppPage } from '../src/pages/AboutAppPage';
import { ContactPage } from '../src/pages/ContactPage';

// #9 Creamos la constante que almacena aquello arrojado por el createDrawerNavigator
const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    // #10 Abrimos el Drawe.Navigator
    <Drawer.Navigator>
      {/* #11 Generamos todas nuestras -screens- (que en realidad son pages) para nuestro Drawer */}
        {/* La PAGINA PRINCIPAL debe hacer referencia al TabNavigator para generar la fusión* entre ambas navegaciones */}
      <Drawer.Screen name='House' component={ TabNavigator } options={{headerShown: false,}} />
      <Drawer.Screen name='App info' component={ AboutAppPage }  />
      <Drawer.Screen name='Contactanos' component={ ContactPage } />
    </Drawer.Navigator>
  )
}
