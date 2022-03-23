import React, { useEffect, Component  } from 'react';
import { View, ActivityIndicator, Alert } from 'react-native';
import { useNavigationState,  } from '@react-navigation/native'  


import { 
  NavigationContainer, 
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme
} from '@react-navigation/native';

import { createDrawerNavigator } from '@react-navigation/drawer';

import { 
  Provider as PaperProvider, 
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme 
} from 'react-native-paper';

 import LoginScreen from './screens/LoginScreen';
 import SignUpScreen from './screens/SignUpScreen';
 import DashboardScreen from './screens/DashboardScreen';
 import AuthStackNavigator from '../src/navigator/AuthStackNavigator';

 import SplashScreen from './screens/SplashScreen';

 import {DrawerContent} from './screens/DrawerContent';

 import MainTabScreen from './screens/MainTabScreen';
 import SupportScreen from './screens/SupportScreen';
 import SettingsScreen from './screens/SettingsScreen';
 import BookmarkScreen from './screens/BookmarkScreen';
 
 import { AuthContext } from '../src/components/context';
 
 import RootStackScreen from '../src/navigator/RootStackNavigator';
 
 import AsyncStorage from '@react-native-community/async-storage';
 

 
const Drawer = createDrawerNavigator();
//const RootStack = createStackNavigator();

const App = () =>{
  
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);
  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };
  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: '#ffffff',
      text: '#333333'
    }
  }
  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: '#333333',
      text: '#ffffff'
    }
  }

  // ....Code to check Internet Connection here starts below ....//
  
/*
const netInfo = useNetInfo({
    reachabilityUrl: 'https://www.google.com/',
    reachabilityTest: async (response) => response.status === 204,
    reachabilityLongTimeout: 60 * 1000, // 60s
    reachabilityShortTimeout: 5 * 1000, // 5s
    reachabilityRequestTimeout: 15 * 1000, // 15s
    reachabilityShouldRun: () => true,
    shouldFetchWiFiSSID: true // met iOS requirements to get SSID
  });
  */
// ....Code to check Internet Connection here ends above ....//
  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;
  const loginReducer = (prevState, action) => {
    switch( action.type ) {
      case 'RETRIEVE_TOKEN': 
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN': 
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };

      case 'LOGOUT': 
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER': 
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };
 
  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);
  const authContext = React.useMemo(() => ({
   
    signIn: async(foundUser) => {
      // setUserToken('fgkj');
      // setIsLoading(false);
      /*const userToken = String(foundUser[0].userToken);
      const userName = foundUser[0].username;
      */
      const userToken = String(foundUser.userToken);
      const userName = foundUser.username;
      
      try {
        await AsyncStorage.setItem('userToken', userToken);
        await AsyncStorage.setItem('userName', userName);
      } catch(e) {
        console.log(e);
      }
      //console.log('App.js Line: 114: user token: ', userToken);
      dispatch({ type: 'LOGIN', id: userName, token: userToken });
    },
    signOut: async() => {
      // setUserToken(null);
      // setIsLoading(false);
      try {
        await AsyncStorage.removeItem('userToken');
        await AsyncStorage.removeItem('userName');
      } catch(e) {
        console.log(e);
      }
      dispatch({ type: 'LOGOUT' });
    },
    signUp: async() => {
      // setUserToken('fgkj');
      // setIsLoading(false);
      dispatch({ type: 'REGISTER' });
    },
    getCurrentScreen:()=>{
      const routes = useNavigationState(state => state.routes);
      const currentRoute = routes[routes.length -1].name;
      console.log('App.js Line 138, currentRoute: ',currentRoute);

    },
    toggleTheme: () => {
      setIsDarkTheme( isDarkTheme => !isDarkTheme );
    }
  }), []);
 
  useEffect(() => {
      setTimeout(async() => {
      // setIsLoading(false);
      let userToken;
      userToken = null;
      try {
        //console.log('App.js Line 148: user token: ', userToken);
        userToken = await AsyncStorage.getItem('userToken');
      } catch(e) {
        console.log(e);
      }
      // console.log('user token: ', userToken);
      dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });
    }, 1000);
  }, []);
  
   if( loginState.isLoading ) {
    return(
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator size="large"/>
      </View>
    );
    
  }
  return(
    <PaperProvider theme={theme}>
		<AuthContext.Provider value={authContext}>
		<NavigationContainer theme={theme}>
		  { loginState.userToken !== null ? (
			<Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
			  <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
			  <Drawer.Screen name="SupportScreen" component={SupportScreen} />
			  <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
			  <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} />
			</Drawer.Navigator>
		  )
		:
		  <RootStackScreen/>
		}
		</NavigationContainer>
		</AuthContext.Provider>
		</PaperProvider>

    );

 }
 export default App;