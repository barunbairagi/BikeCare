import React, {Component, useEffect, useState} from 'react';

import {
  View,
  Text,
  Image,
  StatusBar,
  Button,
  ImageBackground,
  TextInput,
  Dimensions,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '@react-navigation/native';

import bgImage from '../assets/back2.png';
import logoImage from '../assets/logo1.jpg';
import styles from '../stylesheet/Styles';
import {useInternetStatus} from '../utility/NetworkUtility'
import NetInfo from '@react-native-community/netinfo'
//import { useNetInfo } from '@react-native-community/netinfo'


const SplashScreen = ({navigation}) => {
    const { colors } = useTheme();
    const [netInfo, setNetInfo] = React.useState('');

   useEffect(() => {
    // Subscribe to network state updates
    const unsubscribe = NetInfo.addEventListener((state) => {
      setNetInfo(
        `Connection type: ${state.type}
        Is connected?: ${state.isConnected}`,
      );
    });

    return () => {
      // Unsubscribe to network state updates
      unsubscribe();
    };
  }, []);
  //();
  const getNetInfo=()=>{
    NetInfo.fetch().then((state) => {
      alert(
        `Connection type: ${state.type}
        Is connected?: ${state.isConnected}`,
      );
    });
  }
  // console.log("Connection Status: "+ connectionStatus.toString());
  return (
    <View style={stylesSplash.container}>
        <StatusBar backgroundColor='#009387' barStyle="light-content"/>
      <View style={stylesSplash.header}>
          <Animatable.Image 
              animation="bounceIn"
              duraton="1500"
          source={require('../assets/logo.png')}
          style={stylesSplash.logo}
          resizeMode="stretch"
          />
      </View>
      <Animatable.View 
          style={[stylesSplash.footer, {
              backgroundColor: colors.background
          }]}
          animation="fadeInUpBig"
      >
          <Text style={[stylesSplash.title, {
              color: colors.text
          }]}>Stay connected with everyone!</Text>
          <Text style={stylesSplash.text}>Sign in with account</Text>
        
          {netInfo.isConnected === true && <Text style={stylesSplash.text}>Please connect Internet</Text>}
                    
          <View style={stylesSplash.button}>
          <TouchableOpacity onPress={()=>navigation.navigate('LoginScreen')}>
              <LinearGradient
                  colors={['#08d4c4', '#01ab9d']}
                  style={stylesSplash.signIn}
              >
                  <Text style={stylesSplash.textSign}>Get Started</Text>
                  <MaterialIcons 
                      name="navigate-next"
                      color="#fff"
                      size={20}
                  />
              </LinearGradient>
          </TouchableOpacity>
          </View>
      </Animatable.View>
    </View>
  );
};
export default SplashScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const stylesSplash = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#009387'
  },
  header: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center'
  },
  footer: {
      flex: 1,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 30
  },
  logo: {
      width: height_logo,
      height: height_logo
  },
  title: {
      color: '#05375a',
      fontSize: 30,
      fontWeight: 'bold'
  },
  text: {
      color: 'grey',
      marginTop:5
  },
  button: {
      alignItems: 'flex-end',
      marginTop: 30
  },
  signIn: {
      width: 150,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row'
  },
  textSign: {
      color: 'white',
      fontWeight: 'bold'
  }
});
