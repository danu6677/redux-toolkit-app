import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {RootStackParamList} from './types';
import {DemoStackScreen} from './stackControllers/DemoStack';
import {AuthStackScreen} from './stackControllers/AuthStack';

const RootStack = createNativeStackNavigator<RootStackParamList>();
const chooseStack = () => {
  return true ? (
    <RootStack.Screen name="Home" component={DemoStackScreen} />
  ) : (
    <RootStack.Screen name="Auth" component={AuthStackScreen} />
  );
};
const NavigationContainerComponent = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{headerShown: false}}>
        {chooseStack()}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationContainerComponent;
