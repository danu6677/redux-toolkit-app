import {MainTab} from '../navigationStacks';
import {HomeStackScreen} from './HomeStack';
import React from 'react';

//Home Screens goes inside this stack
export const MainApp = () => (
  <MainTab.Navigator>
    <MainTab.Screen name="HomeStack" component={HomeStackScreen} />
  </MainTab.Navigator>
);
