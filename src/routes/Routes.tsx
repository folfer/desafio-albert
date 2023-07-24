import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, Post } from "~/pages";

const Stack = createNativeStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Home"
        component={Home}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Post"
        component={Post}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default function Routes() {
  return <App />;
}
