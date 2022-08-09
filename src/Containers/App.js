import React from 'react'
import './App.css';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Pages/Home'
import Details from '../Pages/Details'

function App() {
  
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
