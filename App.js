// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Login,
       Dashboard} from './src/screens';
const Stack = createNativeStackNavigator();

const  App=()=>{
  return (
    <NavigationContainer >
      <Stack.Navigator
        initialRouteName="Login" 
        screenOptions={{headerShown:false}}>
        <Stack.Screen name="Login" component={Login}
         />
        <Stack.Screen name="Dashboard" component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;