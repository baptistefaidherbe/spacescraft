import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Routes } from '~/navigation/Route';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ProfileNavigator } from './ProfileNavigator';
import { StarshipNavigator } from "./StarshipNavigator";

const Tab = createBottomTabNavigator();

function Navigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name={Routes.STARSHIP_STACK}
          component={StarshipNavigator}
        />
        <Tab.Screen name={Routes.PROFILE_SCREEN} component={ProfileNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
