import LoginScreen from '../../../screens/LoginScreen';
import SignupScreen from '../../../screens/SignupScreen';
import {AuthStack} from '../../navigationStacks';
import React from 'react';

export const AuthStackScreen = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="Login" component={LoginScreen} />
    <AuthStack.Screen name="Signup" component={SignupScreen} />
  </AuthStack.Navigator>
);
