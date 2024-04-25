import React from 'react';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { Routes } from '~/navigation/Route';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ProfileNavigator } from './ProfileNavigator';
import { StarshipNavigator } from "./StarshipNavigator";

const Tab = createBottomTabNavigator();

function Navigator() {
  const navigationRef = useNavigationContainerRef();
  
  return (
    <NavigationContainer
      ref={navigationRef} 
      onStateChange={async () => {

      const currentRouteName = navigationRef.getCurrentRoute().name;
      console.log("🚀 ~ <NavigationContaineronStateChange={ ~ currentRouteName:", currentRouteName);

    }}
>
      <Tab.Navigator>
        <Tab.Screen
          name={Routes.STARSHIP_STACK}
          component={StarshipNavigator}
        />
        <Tab.Screen name={Routes.PROFILE_STACK} component={ProfileNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
