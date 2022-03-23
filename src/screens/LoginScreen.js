import React, {Component, useEffect, useState} from 'react';
import LoginService from '../Service/LoginService';
import axios from 'axios'; 
import AsyncStorage from '@react-native-community/async-storage';

import {
  View,
  Text,
  Image,
  StatusBar,
  Button,
  ImageBackground,
  Platform,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet
} from 'react-native';

import bgImage from '../assets/back2.png';
import logoImage from '../assets/logo1.jpg';
import styles from '../stylesheet/Styles';

import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import { useTheme } from 'react-native-paper';
import { AuthContext } from '../components/context';
import Users from '../model/Users';

const baseUrl = 'http://10.0.2.2:9090/loginAPI-0.0.1-SNAPSHOT/userByName/';
const LoginScreen = ({navigation}) => {
const[signal, setSignal] = useState(false);
const [loading, setLoading] = useState(false);
const [hasError, setHasError] = useState(false);
  // Declaring state variables starts below ...

  const [fetchingData, setFetchingDataState] = React.useState({
    userIdService:'',
    userNameService: '',
    userPwdService: '',
    userPhService:'',
    userTokenService:''
    });

// Declaring state variables ends above ...
  const [data, setData] = React.useState({
    username: '',
    password: '',
    userNameService: '',
    userPwdService: '',
    loginFinalURL:'',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
    });
    
    const [userName, setUserName] = React.useState('');
    const [userNameService, setUserNameService] = React.useState('');
    const [userPasswordService, setUserPasswordService] = React.useState('');
    const [userTokenService, setUserTokenService] = React.useState('');
    const [URL, setURL] = React.useState('');
    const [items, setItems] = React.useState([]);
    const { colors } = useTheme();

    const { signIn } = React.useContext(AuthContext);

    const textInputChange = (val) => {
      if( val.trim().length >= 4 ) {
          setData({
              ...data,
              username: val,
              loginFinalURL: baseUrl.concat(val),
              check_textInputChange: true,
              isValidUser: true
          });
      } else {
          setData({
              ...data,
              username: val,
              check_textInputChange: false,
              isValidUser: false
          });
      }
  }
  
  const handlePasswordChange = (val) => {
    if( val.trim().length >= 8 ) {
        setData({
            ...data,
            password: val,
            isValidPassword: true
        });
    } else {
        setData({
            ...data,
            password: val,
            isValidPassword: false
        });
    }
}
const updateSecureTextEntry = () => {
  setData({
      ...data,
      secureTextEntry: !data.secureTextEntry
  });
}
const handleValidUser = (val) => {
  if( val.trim().length >= 4 ) {
      setData({
          ...data,
          isValidUser: true
      });
  } else {
      setData({
          ...data,
          isValidUser: false
      });
  }
}



   /*     useEffect(()=>{
            console.log("Start of useEffect() Ln 129, Value of Signal =" + signal); 
            fetch(data.loginFinalURL)
        .then(response=>response.json())
        .then((data)=>{
            setFetchingDataState({
                ...fetchingData,
                userIdService: data.userId,
                userNameService: data.userName,
                userPwdService: data.passWord,
                userPhService: data.phoneNo,
                userTokenService: data.userToken
              })
        setSignal(false);
        console.log("Ln 141 Inside useEffect() : fetchingData = " + JSON.stringify(fetchingData));
       // AsyncStorage.setItem("@UserData", JSON.stringify(fetchingData));
        }
      ).then(
          setTimeout(()=>{CompareUserDataFromService()}, 2000)
          
          );
    },[signal]);
     */    

    useEffect(()=>{
        console.log("Start of useEffect() Ln 129, Value of Signal =" + signal); 
        fetch(data.loginFinalURL).then(async response=>{
            if(response.status == 200) // Process Data
            {
                response.json().then(data=>{
                    setFetchingDataState({
                        ...fetchingData,
                        userIdService: data.userId,
                        userNameService: data.userName,
                        userPwdService: data.passWord,
                        userPhService: data.phoneNo,
                        userTokenService: data.userToken
                      })
                      console.log("Ln 165 Inside useEffect() : fetchingData = " + JSON.stringify(fetchingData));
                      setSignal(false);
                });
                if(JSON.stringify(fetchingData).length != 0)
                {
                    setTimeout(()=>{CompareUserDataFromService()}, 1000);
                }
                

            }
            else{

                console.log("***** Error : Failure to call Service *****Error Code = " + response.Text);
            }

        }).catch((err) => {
            console.log(err);
        })
     },[signal]);

const CompareUserDataFromService=()=>{

console.log("Ln 145 Inside CompareUserDataFromService() : fetchingData = " + fetchingData.userNameService);
const foundUser={id: 0, username:'', password:'', userToken:''};
 if(data.username ==fetchingData.userNameService && data.password == fetchingData.userPwdService)   
   {
    console.log("Ln 156 Inside CompareUserDataFromService()");
    foundUser.id = fetchingData.userIdService;
    foundUser.username = fetchingData.userNameService;
    foundUser.password = fetchingData.userPwdService;
    foundUser.userToken = fetchingData.userTokenService;

  }
  if ( foundUser.username.length == 0 || foundUser.password.length == 0  ) {
      Alert.alert('Invalid User!', 'Username or password is incorrect.', [
          {text: 'Okay'}
      ]);
      return;
  }
  signIn(foundUser);
}
 const loginHandle =()=> {
     
    // ********* Code for Service Call starts below *********//
    console.log("Ln 168 Final url = "+ data.loginFinalURL);
    setSignal(true);
    console.log("Ln 170 Inside loginHandle() : fetchingData = " + fetchingData.userNameService);
    //CompareUserDataFromService();
  }
return (
  <View style={stylesLogIn.container}>
      <StatusBar backgroundColor='#009387' barStyle="light-content"/>
    <View style={stylesLogIn.header}>
        <Text style={stylesLogIn.text_header}>Welcome!</Text>
    </View>
    <Animatable.View 
        animation="fadeInUpBig"
        style={[stylesLogIn.footer, {
            backgroundColor: colors.background
        }]}
    >
        <Text style={[stylesLogIn.text_footer, {
            color: colors.text
        }]}>Username</Text>
        <View style={stylesLogIn.action}>
            <FontAwesome 
                name="user-o"
                color={colors.text}
                size={20}
            />
            <TextInput 
                placeholder="Your Username"
                placeholderTextColor="#666666"
                style={[styles.textInput, {
                    color: colors.text
                }]}
                autoCapitalize="none"
                onChangeText={(val) => textInputChange(val)}
                onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}
            />
            {data.check_textInputChange ? 
            <Animatable.View
                animation="bounceIn"
            >
                <Feather 
                    name="check-circle"
                    color="green"
                    size={20}
                />
            </Animatable.View>
            : null}
        </View>
        { data.isValidUser ? null : 
        <Animatable.View animation="fadeInLeft" duration={500}>
        <Text style={stylesLogIn.errorMsg}>Username must be 4 characters long.</Text>
        </Animatable.View>
        }
        <Text style={[stylesLogIn.text_footer, {
            color: colors.text,
            marginTop: 35
        }]}>Password</Text>
        <View style={stylesLogIn.action}>
            <Feather 
                name="lock"
                color={colors.text}
                size={20}
            />
            <TextInput 
                placeholder="Your Password"
                placeholderTextColor="#666666"
                secureTextEntry={data.secureTextEntry ? true : false}
                style={[stylesLogIn.textInput, {
                    color: colors.text
                }]}
                autoCapitalize="none"
                onChangeText={(val) => handlePasswordChange(val)}
            />
            <TouchableOpacity
                onPress={updateSecureTextEntry}
            >
                {data.secureTextEntry ? 
                <Feather 
                    name="eye-off"
                    color="grey"
                    size={20}
                />
                :
                <Feather 
                    name="eye"
                    color="grey"
                    size={20}
                />
                }
            </TouchableOpacity>
        </View>
        { data.isValidPassword ? null : 
        <Animatable.View animation="fadeInLeft" duration={500}>
        <Text style={stylesLogIn.errorMsg}>Password must be 8 characters long.</Text>
        </Animatable.View>
        }
        <TouchableOpacity>
            <Text style={{color: '#009387', marginTop:15}}>Forgot password?</Text>
        </TouchableOpacity>
        <View style={stylesLogIn.button}>
            <TouchableOpacity
                style={stylesLogIn.signIn}
                onPress={() => {loginHandle()}}
        >
            <LinearGradient
                colors={['#08d4c4', '#01ab9d']}
                style={stylesLogIn.signIn}
            >
                <Text style={[stylesLogIn.textSign, {
                    color:'#fff'
                }]}>Sign In</Text>
            </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate('SignUpScreen')}
                style={[stylesLogIn.signIn, {
                    borderColor: '#009387',
                    borderWidth: 1,
                    marginTop: 15
                }]}
            >
                <Text style={[stylesLogIn.textSign, {
                    color: '#009387'
                }]}>Sign Up</Text>
            </TouchableOpacity>
        </View>
    </Animatable.View>
  </View>
);

}

export default LoginScreen;

const stylesLogIn = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#009387'
  },
  header: {
      flex: 1,
      justifyContent: 'flex-end',
      paddingHorizontal: 20,
      paddingBottom: 20
  },
  footer: {
      flex: 3,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingHorizontal: 20,
      paddingVertical: 20
  },
  text_header: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 30
  },
  text_footer: {
      color: '#05375a',
      fontSize: 18
  },
  action: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#f2f2f2',
      paddingBottom: 5
  },
  actionError: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#FF0000',
      paddingBottom: 5
  },
  textInput: {
      flex: 1,
      marginTop: Platform.OS === 'ios' ? 0 : -12,
      paddingLeft: 10,
      color: '#05375a',
  },
  errorMsg: {
      color: '#FF0000',
      fontSize: 14,
  },
  button: {
      alignItems: 'center',
      marginTop: 30
  },
  signIn: {
      width: '100%',
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10
  },
  textSign: {
      fontSize: 18,
      fontWeight: 'bold'
  }
});