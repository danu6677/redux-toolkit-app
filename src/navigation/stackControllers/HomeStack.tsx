import HomeScreen from '../../screens/HomeScreen';
import {HomeStack} from '../navigationStacks';
import React from 'react';

export const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={HomeScreen} />
  </HomeStack.Navigator>
);
