import { NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { RouteProp } from '@react-navigation/native';

export type RootStackParamList = {
  Auth: undefined;
  Main: NavigatorScreenParams<MainTabParamList>;
  SpotDetails: { spotId: string };
  AddSpot: undefined;
  EditSpot: { spotId: string };
  Profile: { userId: string };
  Following: { userId: string };
  Settings: undefined;
};

export type MainTabParamList = {
  Map: undefined;
  Search: undefined;
  AddSpot: undefined;
  Activity: undefined;
  MyProfile: undefined;
};

export type RootStackNavigationProp<T extends keyof RootStackParamList> = 
  NativeStackNavigationProp<RootStackParamList, T>;

export type MainTabNavigationProp<T extends keyof MainTabParamList> = 
  BottomTabNavigationProp<MainTabParamList, T>;

export type RootStackRouteProp<T extends keyof RootStackParamList> = 
  RouteProp<RootStackParamList, T>;