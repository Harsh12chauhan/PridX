import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Logo from "./components/Logo";
import Game from "./components/Game";
import Letsplay from "./components/Letsplay";
import Win from "./components/Win";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Game"
          component={Game}
          options={{
            title: "Game",
            headerTintColor: "black",
            headerStyle: {
              backgroundColor: "black",
            },
          }}
        />
        <Stack.Screen
          name="Letsplay"
          component={Letsplay}
          options={{
            title: "Letsplay",
            headerTintColor: "black",
            headerStyle: {
              backgroundColor: "black",
            },
            headerRight: () => <Logo/>
          }}
        />
        <Stack.Screen
          name="Win"
          component={Win}
          options={{
            title: "Letsplay",
            headerTintColor: "black",
            headerStyle: {
              backgroundColor: "black",
            },
            headerRight: () => <Logo/>
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
