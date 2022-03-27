import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ServiceScreen from '../screens/ServiceScreen';
import BookingScreen from '../screens/BookingScreen';
import ConfirmScreen from '../screens/ConfirmScreen';
import HistoryScreen from '../screens/BookingHistoryScreen';


const dashBoardStackNavigator = createStackNavigator();

const DashBoardStackScreenNavigator = ({navigation}) => (
    <dashBoardStackNavigator.Navigator headerMode='none'>
         <dashBoardStackNavigator.Screen name= {'ServiceScreen'} component ={ServiceScreen}/>
             <dashBoardStackNavigator.Screen name= {'BookingScreen'} component ={BookingScreen}/>
             <dashBoardStackNavigator.Screen name= {'Screen'} component ={BookingScreen}/>
             <dashBoardStackNavigator.Screen name= {'BookingHistoryScreen'} component ={BookingHistoryScreen}/>
    </dashBoardStackNavigator.Navigator>
);

export default DashBoardStackScreenNavigator;