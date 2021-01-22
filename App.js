import 'react-native-gesture-handler';
import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './app/screens/Home';
import PlanDive from './app/screens/PlanDive';
import { navigationRef } from './rootNavigation';

function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer ref = {navigationRef}>
      <Stack.Navigator initialRouteName = "home">
        <Stack.Screen
          name = "home"
          component = {Home}
          options = {{title: 'Home Screen', headerShown: false}}
        />
        <Stack.Screen 
          name = "planDive"
          component = {PlanDive}
          options = {{title: 'Plan a Dive', headerShown: true, gestureEnabled: true}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default App;