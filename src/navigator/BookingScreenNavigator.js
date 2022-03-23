import React, {Component} from 'react'

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import DashboardScreen from '../screens/DashboardScreen';
import ConfirmScreen from '../screens/ConfirmScreen';
import BookingScreen from '../screens/BookingScreen';
const BookingStack = createStackNavigator();

const BookingStackScreen = ({navigation}) => (
      <BookingStack.Navigator headerMode='none'>
      <BookingStack.Screen name= {'BookingScreen'} component ={BookingScreen}/>
      <BookingStack.Screen name= {'ConfirmScreen'} component ={ConfirmScreen}/>
      <BookingStack.Screen name= {'DashBoardScreen'} component ={DashboardScreen}/>
    </BookingStack.Navigator>
 );

export default BookingStackScreen;