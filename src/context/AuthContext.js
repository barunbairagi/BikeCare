import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, {createContext, useEffect, useState} from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [userInfo, setUserInfo] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [splashLoading, setSplashLoading] = useState(false);
  
    const BASE_URL = 'http://10.0.2.2:9090/loginAPI-0.0.1-SNAPSHOT/userByName/';

    const login = (userName, password) => {
      setIsLoading(true);
      var finalUrl = BASE_URL.concat(userName);
      axios
        .get(`${finalUrl}/`)
        .then(res => {
          let userInfo = res.data;
          console.log("Line 21 Inside AuthContext " + userInfo);
          setUserInfo(userInfo);
          AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
          setIsLoading(false);
        })
        .catch(e => {
          console.log(`login error ${e}`);
          setIsLoading(false);
        });
    };
  
    const isLoggedIn = async () => {
      try {
        setSplashLoading(true);
  
        let userInfo = await AsyncStorage.getItem('userInfo');
        userInfo = JSON.parse(userInfo);
  
        if (userInfo) {
          setUserInfo(userInfo);
        }
  
        setSplashLoading(false);
      } catch (e) {
        setSplashLoading(false);
        console.log(`is logged in error ${e}`);
      }
    };
  
    useEffect(() => {
      isLoggedIn();
    }, []);
  
    return (
      <AuthContext.Provider
        value={{
          isLoading,
          userInfo,
          splashLoading,
          register,
          login,
          logout,
        }}>
        {children}
      </AuthContext.Provider>
    );
  };