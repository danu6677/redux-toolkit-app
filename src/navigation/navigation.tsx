import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { RootStackParamList } from "./types"; //Stacks types
import { AuthStackScreen } from "./stackControllers/Stacks/AuthStack";
import { MainApp } from "./stackControllers/Tabs/MainTab"; //tabs
const RootStack = createNativeStackNavigator<RootStackParamList>();
const chooseStack = () => {
  const isLoggedIn = true; //Default value for demo purpose

  return isLoggedIn ? (
    <RootStack.Screen name="Home" component={MainApp} />
  ) : (
    <RootStack.Screen name="Auth" component={AuthStackScreen} />
  );
};
const NavigationContainerComponent = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        {chooseStack()}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationContainerComponent;
