import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Initialpage from "./pages/InitialPage";
import IntroductionPage from "./pages/IntroductionPage";
import UserLogin from "./pages/UserLogin";
import FeelingsPage from "./pages/FeelingsPage";
import ConsiderPage from "./pages/ConsiderPage";
import AlonePage from "./pages/AlonePage";
import InteractInternetPage from "./pages/InteractInternetPage";
import PhysicalPage from "./pages/PhysicalPage";
import PhysicalHealthPage from "./pages/PhysicalHealthPage";
import MedicationsPage from "./pages/MedicationsPage";
import Chat from "./pages/Chat";

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Initial">
          <Stack.Screen
            name="Initial"
            component={Initialpage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Introduction"
            component={IntroductionPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="User"
            component={UserLogin}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Feelings"
            component={FeelingsPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Consider"
            component={ConsiderPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Alone"
            component={AlonePage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="InteractInternet"
            component={InteractInternetPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Physical"
            component={PhysicalPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PhysicalHealth"
            component={PhysicalHealthPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Medications"
            component={MedicationsPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Chat"
            component={Chat}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
