import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  AuthStackParamList,
  HomeStackParamList,
  MainTabParamList,
  RootStackParamList,
  DemoStackParamList,
} from './types';

const AuthStack = createNativeStackNavigator<AuthStackParamList>();
const HomeStack = createNativeStackNavigator<HomeStackParamList>();
const MainTab = createBottomTabNavigator<MainTabParamList>();
const RootStack = createNativeStackNavigator<RootStackParamList>();
const DemoStack = createNativeStackNavigator<DemoStackParamList>();

export {AuthStack, DemoStack, HomeStack, MainTab, RootStack};
