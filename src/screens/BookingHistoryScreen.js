import React from 'react';

import {
  View,
  Text,
  Image,
  StatusBar,
  Button,
  ImageBackground,
  TextInput,
  StyleSheet,
  Dimensions,
  useState,
  useEffect,
  Alert,
  } from 'react-native';

import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';


const {width} = Dimensions.get('window');
const {height} = width * 0.8;
const BookingHistoryScreen = () => {
    return (
      <ScrollView
          vertical
          //onScroll={change}
          showsVerticalScrollIndicator= {false}
          style={{ marginVertical: 5, marginTop: 0 }}
        >
        <View style={stylesLogIn.container}>
      <StatusBar backgroundColor='#009387' barStyle="light-content"/>
    <View style={stylesLogIn.header}>
        <Text style={stylesLogIn.text_header}>Welcome!</Text>
    </View>
    </View>
        </ScrollView>
      
    );
};

export default BookingHistoryScreen;

const stylesLogIn = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
 textSign: {
    fontSize: 18,
    fontWeight: 'bold'
},
header: {
  flex: 1,
  justifyContent: 'flex-end',
  paddingHorizontal: 10,
  paddingBottom: 10
},
text_header: {
  color: '#fff',
  fontWeight: 'bold',
  fontSize: 20
}
});
