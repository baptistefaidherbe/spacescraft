import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Routes } from "./Route";
import { ProfileScreen } from "../screens/ProfileScreen";

const Stack = createNativeStackNavigator();

export function ProfileNavigator() {
  <Stack.Navigator>
    <Stack.Screen name={Routes.PROFILE_SCREEN} component={ProfileScreen} />
  </Stack.Navigator>
}