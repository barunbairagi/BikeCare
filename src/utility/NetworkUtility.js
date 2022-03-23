import React, { PureComponent, useEffect, useState } from 'react';
import NetInfo from "@react-native-community/netinfo";
import { Alert } from 'react-native';

export const useInternetStatus = () => {
  Alert.alert("Check Connection...");
    return NetInfo.fetch().then(state => {
        return state.isConnected;
      });
    
};