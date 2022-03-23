import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SettingsScreen from '../screens/SettingsScreen';
import ProfileScreen from '../screens/ProfileScreen';


const BottomTab = createBottomTabNavigator();

export function BottomTabNavigator(){

   return(
             <BottomTab.Navigator>
             <BottomTab.Screen name= {'Settings'} component ={SettingsScreen}/>
             <BottomTab.Screen name= {'Profile'} component ={ProfileScreen}/>
             </BottomTab.Navigator>
         );

}