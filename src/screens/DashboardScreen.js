import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BookingScreen from '../screens/BookingScreen';

//import DashBoardStackScreenNavigator from '../navigator/DashBoardScreenNavigator';

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

import styles from '../stylesheet/Styles';
import { makeStyles } from 'react-native-elements';
const {width} = Dimensions.get('window');
const {height} = width * 0.8;

const ImageArr = [
  require("../assets/Image1.jpg"),
  require("../assets/Image2.jpg"),
  require("../assets/Image3.jpg"),
  require("../assets/Image4.jpg"),
  require("../assets/Image5.jpg"),
  require("../assets/Image6.jpg"),
  ]
 
   const change = ({nativeEvent})=>{
  
    const slide = Math.ceil(nativeEvent.contentOffset.x /nativeEvent.layoutMeasurement.width);
    if(slide !== active)
    {
      setActive({active: slide});
    }
 }

const DashboardScreen = ({navigation}) => {
 
  const [active, setActive] = React.useState(0);
  return (
   
     <ImageBackground
      source={require("../assets/background2.png")}
      style={{ width: "100%", height: "100%" }}
    >
    <ScrollView
          vertical
          //onScroll={change}
          showsVerticalScrollIndicator= {false}
          style={{ marginVertical: 5, marginTop: 0 }}
        >
      <View>
      <ScrollView 
      showsHorizontalScrollIndicator= {false}
      pagingEnabled horizontal 
      style={{width, height}}
     >
         {
        ImageArr.map((image, index)=>(
          <Image
              key= {index}
              source={image}
              style={{ height: 210, width: width, resizeMode: 'contain'}}
         />
        ))
      }
      </ScrollView>
      <View style={{flexDirection: 'row', position:'absolute', bottom:0, alignSelf:'center' }}>
      {
        //ImageArr.map((i,k)=>(<Text key={k} style={k == active ? style.pagingActiveText: style.pagingText}>⦿</Text>))
        ImageArr.map((i,k)=>(<Text style={styleInfo.pagingText}>⦿</Text>))
          
          //
      }
      </View>
      </View>
      <View>
      <Text
          style={{
            color: "black",
            fontFamily: "RobotoRegular",
            marginTop: 5,
            marginLeft:10,
            bottomMargin: 25,
            fontSize: 17,
          }}
        >
          Bike Service
        </Text>
      </View>
      <View style={styleInfo.bottom}> 
      <View style={styleInfo.bottomItem}>
          <View style={styleInfo.bottomItemInner}>
          <TouchableOpacity
            onPress={() => navigation.navigate('BookingScreen')}
            style={styleInfo.dashBoardButton}
           >
           <Image 
              source={require("../images/Bike_Icon.png")}     
              style={{ height: '85%', width: '100%', resizeMode:'contain' }}
            />
            <Text>General Service</Text>
          </TouchableOpacity>
          </View>
         </View>
        <View style={styleInfo.bottomItem}>
          <View style={styleInfo.bottomItemInner}>
          <TouchableOpacity
           onPress={() => navigation.navigate('BookingScreen')}
            style={styleInfo.dashBoardButton}
           >
           <Image 
              source={require("../images/GeneralService.png")}     
              style={{ height: '85%', width: '100%', resizeMode:'contain' }}
            />
            <Text>Premium Bike Service</Text>
          </TouchableOpacity>
          </View>
         </View>
         <View style={styleInfo.bottomItem}>
          <View style={styleInfo.bottomItemInner}>
          <TouchableOpacity
            onPress={() => navigation.navigate('BookingScreen')}
            style={styleInfo.dashBoardButton}
           >
           <Image 
              source={require("../images/Bike_Icon2.png")}     
              style={{ height: '85%', width: '100%', resizeMode:'contain' }}
            />
            <Text>Repair Job</Text>
          </TouchableOpacity>
          </View>
         </View>
         <View style={styleInfo.bottomItem}>
          <View style={styleInfo.bottomItemInner}>
          <TouchableOpacity
            onPress={() => navigation.navigate('BookingScreen')}
            style={styleInfo.dashBoardButton}
           >
           <Image 
              source={require("../images/Bike_maintence.png")}     
              style={{ height: '85%', width: '100%', resizeMode:'contain' }}
            />
             <Text>Doorstep Service</Text>
          </TouchableOpacity>
          </View>
         </View>
         <View style={styleInfo.bottomItem}>
          <View style={styleInfo.bottomItemInner}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("CarService")}
            style={styleInfo.dashBoardButton}
           >
           <Image 
              source={require("../images/CustomerCare.jpg")}     
              style={{ height: '85%', width: '100%', resizeMode:'contain' }}
            />
             <Text>Customer Care</Text>
          </TouchableOpacity>
          </View>
         </View>
         <View style={styleInfo.bottomItem}>
          <View style={styleInfo.bottomItemInner}>
          <TouchableOpacity
            onPress={() => navigation.navigate('BookingScreen')}
            style={styleInfo.dashBoardButton}
           >
           <Image 
              source={require("../images/DoorStep.jpg")}   
              style={{ height: '85%', width: '100%', resizeMode:'contain' }}
            />
             <Text>Bike AMC</Text>
          </TouchableOpacity>
          </View>
         </View>
       </View>
       <View style={{ paddingHorizontal: 10, marginTop: 40 }}>
         <Text
          style={{
            color: "black",
            fontFamily: "RobotoRegular",
            marginTop: 100,
            fontSize: 17
          }}
        >
        Recommended
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ marginHorizontal: -40, marginTop: 5 }}
        >
          <View
            style={{
              backgroundColor: "#FEFEFE",
              height: 200,
              width: 190,
              borderRadius: 15,
              padding: 5
            }}
          >
            <Image
              source={require("../images/Service1.jpg")}
              style={{ width: 180, borderRadius: 10, height: 130 }}
            />
            <View
              style={{
                flexDirection: "row",
                width: 150,
                alignItems: "center",
              }}
            >
              <View
                style={{
                  paddingHorizontal: 5,
                  paddingVertical: 5,
                }}
              >
                <Text
                  style={{
                    fontFamily: "RobotoRegular",
                    fontSize: 11,
                    color: "#a2a2db",
                  }}
                >
                  Lorem impsum dolor sit amet, consectetuer adipscing elit,
                </Text>
              </View>
              <Icon name="map-marker" size={25} color="#ff5c83" />
            </View>
          </View>

          <View
            style={{
              backgroundColor: "#FEFEFE",
              height: 200,
              width: 190,
              borderRadius: 15,
              padding: 5,
              marginHorizontal: 20,
            }}
          >
            <Image
              source={require("../images/Info.jpg")}
              style={{ width: 180, borderRadius: 10, height: 130 }}
            />
            <View
              style={{
                flexDirection: "row",
                width: 150,
                alignItems: "center",
              }}
            >
              <View
                style={{
                  paddingHorizontal: 5,
                  paddingVertical: 5,
                }}
              >
                <Text
                  style={{
                    fontFamily: "RobotoRegular",
                    fontSize: 11,
                    color: "#a2a2db",
                  }}
                >
                  Lorem impsum dolor sit amet, consectetuer adipscing elit,
                </Text>
              </View>
              <Icon name="map-marker" size={25} color="#5facdb" />
            </View>
          </View>

          <View
            style={{
              backgroundColor: "#FEFEFE",
              height: 200,
              width: 190,
              borderRadius: 15,
              padding: 5,
            }}
          >
            <Image
              source={require("../images/whyservice.jpg")}
              style={{ width: 180, borderRadius: 10, height: 130 }}
            />
            <View
              style={{
                flexDirection: "row",
                width: 150,
                alignItems: "center",
              }}
            >
              <View
                style={{
                  paddingHorizontal: 5,
                  paddingVertical: 5,
                }}
              >
                <Text
                  style={{
                    fontFamily: "RobotoRegular",
                    fontSize: 11,
                    color: "#a2a2db",
                  }}
                >
                  Home Screen,
                </Text>
              </View>
              <Icon name="map-marker" size={25} color="#bb32fe" />
            </View>
          </View>
        </ScrollView>
      </View>
      </ScrollView>
    </ImageBackground>
  );
  
}

export default DashboardScreen;

const styleInfo = StyleSheet.create(
{
  activePaginationText:{ 
    color:'#fff' , 
    margin:3 
  },
  pagingText:{ 
    color:'#888' ,
     margin:3 
    },
  pagingActiveText:{ 
    color:'#fff' , 
    margin:3 
  },
  bottom:{
   height:300,
   backgroundColor:'#fff',
   flexDirection:'row',
   flexWrap:'wrap',
   padding: 5

  },
  bottomItem:{
    height:'50%',
    width: '50%',
    padding: 5
 
   },
   bottomItemInner:{
    flex: 1,
    backgroundColor:'#9BD6F5'
 
   }
   ,
   dashBoardButton:
   {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 2,
    backgroundColor: 'white',
  }
})