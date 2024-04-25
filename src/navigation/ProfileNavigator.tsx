import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Routes } from "~/navigation/Route";
import ProfileScreen from "~/screens/ProfileScreen";
import TermsScreen from "~/screens/TermScreen";

const Stack = createNativeStackNavigator();

export const ProfileNavigator = (props) => {
  return (
  <Stack.Navigator>
    <Stack.Screen name={Routes.PROFILE_SCREEN} component={ProfileScreen} />
    <Stack.Screen name={Routes.TERMS_SCREEN} component={TermsScreen} />
  </Stack.Navigator>

  )
}