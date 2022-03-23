import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import ProfileScreen from './ProfileScreen';
import DashboardScreen from './DashboardScreen';
import ExploreScreen from './ExploreScreen';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import ConfirmScreen from './ConfirmScreen';
import BookingScreenNavigator from '../navigator/BookingScreenNavigator';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createStackNavigator();
const DetailsStack = createStackNavigator();
const BookingStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

import {
  View,
  Text,
  Image,
  StatusBar,
  Button,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import bgImage from '../assets/back2.png';
import logoImage from '../assets/logo1.jpg';
import styles from '../stylesheet/Styles';
import BookingScreen from './BookingScreen';

const HomeStackScreen = ({navigation}) => (
  <Stack.Navigator screenOptions={{
          headerStyle: {
          backgroundColor: '#009387',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
          fontWeight: 'bold'
          }
      }}>
        <Stack.Screen name="Home" component={DashboardScreen} options={{
          title:'Bike Care',
          headerRight:()=>(
            <View style={styles.iconContainer}>
              <Image
                 source={require('../assets/Helmate.jpg')}
                 style={{ width: 60, borderRadius: 5, height: 50 }}
             />
            </View>
          ),
            headerLeft: () => (
              <Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
          ),
          
          }} />
          <Stack.Screen name="BookingScreen" component={BookingScreenNavigator} options={{
          title:'Bike Care',
          headerRight:()=>(
            <View style={styles.iconContainer}>
              <Image
                 source={require('../assets/Helmate.jpg')}
                 style={{ width: 60, borderRadius: 5, height: 50 }}
             />
            </View>
          ),
            headerLeft: () => (
              <Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.navigate()}></Icon.Button>
          ),
          
          }} />
          
  </Stack.Navigator>
  );
  
  const DetailsStackScreen = ({navigation}) => (
    <DetailsStack.Navigator screenOptions={{
            headerStyle: {
            backgroundColor: '#1f65ff',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold'
            }
        }}>
            <DetailsStack.Screen name="Details" component={DetailsScreen} options={{
            headerLeft: () => (
                <Icon.Button name="ios-menu" size={25} backgroundColor="#1f65ff" onPress={() => navigation.openDrawer()}></Icon.Button>
            )
            }} />
    </DetailsStack.Navigator>
    );
    
    const ProfileStackScreen = ({navigation}) => (
        <BookingStack.Navigator screenOptions={{
                headerStyle: {
                backgroundColor: '#1f65ff',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                fontWeight: 'bold'
                }
            }}>
                <DetailsStack.Screen name="Profile" component={ProfileScreen} options={{
                headerLeft: () => (
                    <Icon.Button name="ios-menu" size={25} backgroundColor="#1f65ff" onPress={() => navigation.openDrawer()}></Icon.Button>
                )
                }} />
        </BookingStack.Navigator>
        );

const LogInStackScreen = ({navigation}) => {
  return (
    <LoginStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#009387',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          alignContent: 'center',
        },
      }}>
      <LoginStack.Screen name="Home Stack Screen" component={LogInScreen} />
    </LoginStack.Navigator>
  );
};

const SignUpScreenStackScreen = ({navigation}) => {
  return (
    <SignUpStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#009387',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          alignContent: 'center',
        },
      }}>
      <SignUpStack.Screen
        name="Details Stack Screen"
        component={SignUpScreen}
      />
    </SignUpStack.Navigator>
  );
};

const MainTabScreen=()=>{
  return(
  <Tab.Navigator
    initialRouteName="Home"
    activeColor="#fff"
  >
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarColor: '#009387',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Notifications"
      component={DetailsStackScreen}
      options={{
        tabBarLabel: 'Updates',
        tabBarColor: '#1f65ff',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-notifications" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileStackScreen}
      options={{
        tabBarLabel: 'Profile',
        tabBarColor: '#694fad',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-person" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Explore"
      component={ExploreScreen}
      options={{
        tabBarLabel: 'Explore',
        tabBarColor: '#d02860',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-aperture" color={color} size={26} />
        ),
      }}
    />
      <Tab.Screen
      name="Booking"
      component={BookingScreen}
      options={{
        tabBarLabel: 'Explore',
        tabBarColor: '#d02860',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-aperture" color={color} size={26} />
        ),
      }}
    />
   </Tab.Navigator>
  );
  
}

export default MainTabScreen;
