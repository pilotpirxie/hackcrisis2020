import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import { AsyncStorage, Alert } from 'react-native';

import Home from './containers/Home';
import Settings from './containers/Settings';
import Status0 from './containers/Status0';
import Status1 from './containers/Status1';
import Status2 from './containers/Status2';
import Needs from './containers/Needs';
import Submitted from './containers/Submitted';
import Article from './containers/Article';

const Stack = createStackNavigator();

export default class App extends Component {
  async componentDidMount() {
    try {
      const { status } = await Permissions.askAsync(Permissions.LOCATION);
      if (status !== 'granted') {
        throw Error('Nie udało się pobrać lokalizacji');
      }
      const location = await Location.getCurrentPositionAsync({});
      await AsyncStorage.setItem('location', JSON.stringify(location));
    } catch (error) {
      Alert.alert('Uwaga', 'Nie udało się pobrać lokalizacji');
    }
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false,

        }}
        >
          <Stack.Screen
            name="Home"
            component={Home}
          />
          <Stack.Screen
            name="Needs"
            component={Needs}
          />
          <Stack.Screen
            name="Settings"
            component={Settings}
          />
          <Stack.Screen
            name="Status0"
            component={Status0}
          />
          <Stack.Screen
            name="Status1"
            component={Status1}
          />
          <Stack.Screen
            name="Status2"
            component={Status2}
          />
          <Stack.Screen
            name="Submitted"
            component={Submitted}
            options={{
              headerLeft: null,
              gestureEnabled: false,
            }}
          />
          <Stack.Screen
            name="Article"
            component={Article}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
