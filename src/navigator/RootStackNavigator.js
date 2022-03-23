import React, {Component} from 'react'

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import SplashScreen from '../screens/SplashScreen';

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator headerMode='none'>
         <RootStack.Screen name= {'SplashScreen'} component ={SplashScreen}/>
             <RootStack.Screen name= {'LoginScreen'} component ={LoginScreen}/>
             <RootStack.Screen name= {'SignUpScreen'} component ={SignUpScreen}/>
    </RootStack.Navigator>
);

export default RootStackScreen;