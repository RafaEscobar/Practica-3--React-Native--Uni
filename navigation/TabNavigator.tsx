// Importamos react
import React from 'react'

//#1 Importamos el createBottomTabNavigator
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

//#2 Importamos las Screens del menu
import { ProyectsScreen } from '../src/screens/ProyectsScreen';
import { HabitsScreen } from '../src/screens/HabitsScreen';
import { TasksScreen } from '../src/screens/TasksScreen';
import { ProductivityScreen } from '../src/screens/ProductivityScreen';

// #3 Creamos la constante para aquello que arroje el createBottomTabNavigator()
const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    // #4 Abrimos el Tab.Navigator
    <Tab.Navigator>

      {/* #5 Creamos los enlaces para los screens */}
        {/* Home == Es la Screen de PROYECTOS */}

      <Tab.Screen 
        name='Proyectos' 
        component={ ProyectsScreen } 
        options={{
          tabBarLabel: "Proyectos",
          // headerShown: false,
          
        }} 
      /> 
      <Tab.Screen 
        name='Habitos' 
        component={ HabitsScreen } 
        options={{
          tabBarLabel: 'Hábitos',
          // headerShown: false,
        }}
      />
      <Tab.Screen 
        name='Tareas' 
        component={ TasksScreen } 
        options={{
          tabBarLabel: 'Tareas',
          // headerShown: false,
        }}
      />
      <Tab.Screen 
        name='Productividad' 
        component={ ProductivityScreen } 
        options={{
          tabBarLabel: 'Productividad',
          // headerShown: false,
        }}
      />
    </Tab.Navigator>
  )
}
