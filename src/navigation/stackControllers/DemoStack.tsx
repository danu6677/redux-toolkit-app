import React from 'react';
import {DemoStack} from '../navigationStacks';
import NewsScreen from '../../screens/NewsScreen';
import CounterScreen from '../../screens/CounterScreen';
import DetailScreen from '../../screens/DetailScreen';
import InitailScreen from '../../screens/InitailScreen';

export const DemoStackScreen = () => (
  <DemoStack.Navigator>
    <DemoStack.Screen name="News" component={NewsScreen} />
    <DemoStack.Screen name="Initial" component={InitailScreen} />
    <DemoStack.Screen name="Counter" component={CounterScreen} />
    <DemoStack.Screen name="Detail" component={DetailScreen} />
  </DemoStack.Navigator>
);
