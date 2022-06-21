import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from "./screns/Home";
import Notas from "./screns/Notas";
import Config from "./screns/Config";
import LoginScreen from './screns/LoginScreen';

import DataBaseInit from './src/DB/DataBaseInit';
import DBInitNotas from './src/DB/DBInitNotas';

const Stack = createNativeStackNavigator();

export default function App() {

  useEffect(() => {
    new DataBaseInit();
    new DBInitNotas();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Notas" component={Notas} />
        <Stack.Screen name="Config" component={Config} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}