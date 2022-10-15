// Importamos react
import React from 'react'

//#1 Importamos el createBottomTabNavigator
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

//#2 Importamos las Screens del menu
import { ProyectsScreen } from '../src/screens/ProyectsScreen';
import { HabitsScreen } from '../src/screens/HabitsScreen';
import { TasksScreen } from '../src/screens/TasksScreen';
import { ProductivityScreen } from '../src/screens/ProductivityScreen';
// -----------> #1: Importamos 
import Icon from 'react-native-vector-icons/Ionicons';



// #3 Creamos la constante para aquello que arroje el createBottomTabNavigator()
const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    // #4 Abrimos el Tab.Navigator
      // ----------> #2 Creamos el screenoptions con una arrow function
    <Tab.Navigator screenOptions={ ({ route }) => ({
      // Propiedad (tabBarIcon) para establecer un icono y establecerle algunas caracteristicas
        // Desestructuramos tres propiedades: 
        // -> focused: Rescata un true si el elemento del Tab.Navigator esta seleccionado
        // -> color: Para establecerle un color a nuestro elemento del Tab.Navigator por default
        // -> size: Para establecerle un tamaño por default al elemento del Tab.Navigator
      tabBarIcon: ({ focused, color, size }) => {
        // Creamos una variable llamada: -nameIcon- la cual almacenara el nombre de nuestro elemento del Tab.Navigator
        let nameIcon='';
        // Creamos un switch que establecera un icono u otro segun el nombre rescatado de cada uno de los elementos del Tab.Navigator
        // Se utiliza el route.name para obtener el -name- de cada elemento del Tab.Navigator
        switch(route.name){
          // Los -case- se basan el el -name- que usamos en los Tab.Screen
          case 'Proyectos':
              // Con ayuda de un operador ternario, condicionamos la version #1 (rellenada) para cuando el focused arroje true => osea cuando este seleccionado, y la versión alterna (sin relleno) para cuando el focused arroje false => osea cuando no este seleccionado
            nameIcon= focused ? 'create' : 'create-outline';
          break;
          case 'Habitos':
            nameIcon= focused ? 'trophy' : 'trophy-outline';
          break;
          case 'Tareas':
            nameIcon= focused ? 'checkmark-circle' : 'checkmark-circle-outline';
          break;
          case 'Productividad':
            nameIcon= focused ? 'bar-chart' : 'bar-chart-outline';
          break;
        }
        // Retornamos el icono en cuestion, estableciendo tres propiedades: name, color, y size
        return <Icon name={nameIcon} color={ color } size={ size } />
      }
    })}
    
    >

      {/* #5 Creamos los enlaces para los screens */}
        {/* Home == Es la Screen de PROYECTOS */}

      <Tab.Screen 
        name='Proyectos' 
        component={ ProyectsScreen } 
        options={{
          tabBarLabel: "Proyectos",
          // Al poner el -headerShown: false- ocultamos el titulo de la screen en cuestion
          // headerShown: false,
          // tabBarIcon: ({ color, size }) => {

          // }
          
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
