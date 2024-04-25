import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '~/screens/LoginScreen';
import TermsScreen from '~/screens/TermScreen';
import StarshipFeedScreen from '~/screens/StarshipFeedScreen';
import StarshipDetailsScreen from '~/screens/StarshipDetailsScreen';
import { Routes } from '~/navigation/Route';
import { ProfileScreen } from '~/screens/ProfileScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


function Navigator() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName={Routes.LOGIN_SCREEN}>
        <Stack.Screen name={Routes.LOGIN_SCREEN} component={LoginScreen} />
        <Stack.Screen name={Routes.TERMS_SCREEN} component={TermsScreen} />
        <Stack.Screen name={Routes.STARSHIP_FEED_SCREEN} component={StarshipFeedScreen} />
        <Stack.Screen name={Routes.STARSHIP_DETAIL_SCREEN} component={StarshipDetailsScreen} />
        <Stack.Screen name={Routes.PROFILE_SCREEN} component={ProfileScreen} />
      </Stack.Navigator> */}
      <Tab.Navigator>
        <Tab.Screen name={Routes.STARSHIP_FEED_SCREEN} component={StarshipFeedScreen} />
        <Tab.Screen name={Routes.PROFILE_SCREEN} component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
