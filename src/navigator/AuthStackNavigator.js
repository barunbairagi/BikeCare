import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {LoginScreen} from '../screens/LoginScreen';
import {SignUpScreen} from '../screens/SignUpScreen';
import {DashboardScreen} from '../screens/DashboardScreen';
import {SplashScreen} from '../screens/SplashScreen';

import { createBottomTabNavigator } from '../navigator/BottomTabNavigator';


const AuthStack = createStackNavigator();

export function AuthStackNavigator(){

   return(
             <AuthStack.Navigator screenOptions={{
               headerShown:false,
             }} >
             <AuthStack.Screen name= {'Splash'} component ={SplashScreen}/>
             <AuthStack.Screen name= {'LogIn'} component ={LoginScreen}/>
             <AuthStack.Screen name= {'SignUp'} component ={SignUpScreen}/>
             <AuthStack.Screen name= {'DashBoard'} component ={DashboardScreen}/>
           </AuthStack.Navigator>
         );

}