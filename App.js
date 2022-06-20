import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from "./screns/Home/Home";
import Notas from "./screns/Notas/Notas";
import Config from "./screns/Config/Config";
import LoginScreen from './screns/Login/LoginScreen';

import DataBaseInit from './src/DB/DataBaseInit';

const Stack = createNativeStackNavigator();


export default function App() {

  useEffect(() => {
    new DataBaseInit(); 
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Notas" component={Notas} />
      <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Config" component={Config} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}