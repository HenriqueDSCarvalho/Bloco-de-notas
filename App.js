import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Home from "./screns/Home";
import Notas from "./screns/Notas";
import Config from "./screns/Config";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Notas" component={Notas} />
        <Stack.Screen name="Config" component={Config} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}