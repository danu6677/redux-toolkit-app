import React from "react";
import { DemoStack } from "../../navigationStacks";
import CounterScreen from "../../../screens/CounterScreen";
import DetailScreen from "../../../screens/DetailScreen";
import InitailScreen from "../../../screens/InitailScreen";

export const DemoTabkNavigator = () => (
  <DemoStack.Navigator>
    <DemoStack.Screen name="Initial" component={InitailScreen} />
    <DemoStack.Screen name="Counter" component={CounterScreen} />
    <DemoStack.Screen name="Detail" component={DetailScreen} />
  </DemoStack.Navigator>
);
