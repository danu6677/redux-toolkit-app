import HomeScreen from "../../../screens/HomeScreen";
import { HomeStack } from "../../navigationStacks";
import NewsScreen from "../../../screens/NewsScreen";
import React from "react";

export const HomeTabNavigator = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="News" component={NewsScreen} />
    <HomeStack.Screen name="Home" component={HomeScreen} />
  </HomeStack.Navigator>
);
