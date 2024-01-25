import { MainTab } from "../../navigationStacks";
import { HomeTabNavigator } from "./HomeStack";
import { DemoTabkNavigator } from "./DemoStack";
import React from "react";

//Home Screens goes inside the HomeStack of Type BottomTabNavigator
export const MainApp = () => (
  <MainTab.Navigator screenOptions={{ headerShown: false }}>
    <MainTab.Screen name="HomeTab" component={HomeTabNavigator} />
    <MainTab.Screen name="DetailTab" component={DemoTabkNavigator} />
  </MainTab.Navigator>
);
