import React, {useState} from 'react';

import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import CalendarPicker from 'react-native-calendar-picker';
import SelectDropdown from 'react-native-select-dropdown'
import BookingScreenNavigator from '../navigator/BookingScreenNavigator';

import { 
  View, 
  Text, 
  Button,
   TouchableOpacity,
   Dimensions,
  TextInput,
  Platform,
  StyleSheet,
  ScrollView,
  StatusBar,
  Alert,
  SafeAreaView
  } from 'react-native';
  widthCalc: {(Dimensions.get('window').width)};

const BookingScreen = ({navigation}) => {

  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  const [timeSlot, setTimeSlot] = useState(null);
  const [registrationNo, setRegistrationNo] = useState(null);
  const [comment, setComment] = useState(null);
  const [mobileNo, setMobileNo] = useState(null);
  //setMobileNo
  const [number, onChangeNumber] = React.useState(null);
  const startDate  =  selectedStartDate ? selectedStartDate.toString() : new Date();
 

  const [bookingData, setBookingData] = React.useState({
    bookingServiceDate: '',
    timeSlot: '',
    comment: '',
    bikeModel: '',
    bikeRegNo:'',
    });
  const onDateChange = (date, type) => {
    //function to handle the date change
    if (type === 'END_DATE') {
      setSelectedEndDate(date);
    } else {
      setSelectedEndDate(null);
      let result = date.toString().substr(0, 16);
      
      setSelectedStartDate(result);
      
    }
  };
  const textInputChange = (val) => {
    
    if( val.trim().length >= 2 ) {
        setComment(val);
    } else {
        setComment(val);
    }
}
//
const textInputChangeBikeReg = (val) => {
  
  if( val.trim().length >= 2 ) {
    setRegistrationNo(val);
  } else {
    setRegistrationNo(val);
  }
}
//
const textInputChangeMobileNo = (val) => {
  if ( val.length == 0 ) {
    Alert.alert('Wrong Input!', 'Mobile Number cannot be empty.', [
        {text: 'Okay'}
    ]);
    return;
}
  if( val.trim().length == 10 ) {
      setMobileNo(val);
  } 
}
const saveTimeSlot=(value) => {
    //console.log("saveTimeSlot :" + value);
    setTimeSlot(value);
  
}
const bookingServiceDateSelect = (val) => {
  if( val.trim().length >= 2 ) {
    // Trim the date only here.
    setBookingData({
      ...bookingData,
      bookingServiceDate: val,
   
  });
  }
 }
  const TimeSlots = ["10 AM", "11 AM", "12 Noon", "1 PM","2 PM","3 PM","4 PM"];
  onButtonPress = () => {navigation.navigate('ConfirmScreen',{
    bookingDate: selectedStartDate, 
    selectedTimeSlot: timeSlot,
    RegistrationNo: registrationNo,
    MobileNo: mobileNo,
    comment: comment});
      
 }
  const SignupHandle = (data) => {
    if (selectedStartDate == null) {
      Alert.alert('Wrong Input!', 'Booking Date cannot be empty.', [
          {text: 'Okay'}
      ]);
      return;
      }
  
    //timeSlot
    if ( timeSlot == null ) {
     Alert.alert('Wrong Input!', 'Booking TimeSlot can not be empty.', [
        {text: 'Okay'}
      ]);
    return;
    }
    if ( registrationNo == null ) {
      Alert.alert('Wrong Input!', 'Registration Number cannot be empty.', [
          {text: 'Okay'}
      ]);
      return;
  }
  if ( mobileNo == null ) {
    Alert.alert('Wrong Input!', 'Mobile Number cannot be empty.', [
        {text: 'Okay'}
    ]);
    return;
}
  //

      Alert.alert('Booking Confirm!', 'Please wait to review your booking..', [
        {text: 'Okay',onPress: onButtonPress}
      ]);
   return;
 
}
  return (

    <ScrollView
    vertical
    //onScroll={change}
    showsVerticalScrollIndicator= {false}
    style={{ marginVertical: 5, marginTop: 0 }}
  >
      <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.titleStyle}>
          Select Booking Date
        </Text>
        <CalendarPicker
          startFromMonday={true}
          allowRangeSelection={false}
          //minDate={new Date(2018, 1, 1)}
          minDate={new Date()}
          maxDate={new Date(2025, 6, 3)}
          weekdays={
            [
              'Mon', 
              'Tue', 
              'Wed', 
              'Thur', 
              'Fri', 
              'Sat', 
              'Sun'
            ]}
          months={[
            'January',
            'Febraury',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
          ]}
          //previousTitle="Previous"
          nextTitle="Next"
          todayBackgroundColor="#e6ffe7"
          selectedDayColor="#66ff33"
          selectedDayTextColor="#000000"
          scaleFactor={375}
          textStyle={{
            fontFamily: 'Cochin',
            color: '#000000',
          }}
          onDateChange={onDateChange}
        />
       </View>
      
          <Text style={styles.textStyleSelBookingDate}>
           Booking Date: {selectedStartDate ? selectedStartDate.toString() : ''}
           </Text>
             
          <Text style={styles.textStyleSelBookingDate}>
           Booking Slot:
           </Text>
           <SelectDropdown style={styles.dropDown} data={TimeSlots} 
           onSelect={(selectedItem, index) => {
            //console.log(selectedItem, index);
            setTimeSlot(selectedItem);
             (selectedItem) => saveTimeSlot(selectedItem)}}
               
	    buttonTextAfterSelection={(selectedItem, index) => {
		// text represented after item is selected
		// if data array is an array of objects then return selectedItem.property to render after item is selected
		return selectedItem
	}}
  
	rowTextForSelection={(item, index) => {
		// text represented for each item in dropdown
		// if data array is an array of objects then return item.property to represent item in dropdown
		return item
	}}
/>   
      </SafeAreaView>
  
       <View style={styles.containerComments}>
    <Text style={styles.textStyleComments}>Enter Bike  Registration No</Text>
        <TextInput
        style={styles.input} 
        placeholder="Registration Number"
        onChangeText={(val) => textInputChangeBikeReg(val)}
      />
      </View>
      <View style={styles.containerComments}>
    <Text style={styles.textStyleComments}>Enter Mobile No</Text>
        <TextInput
        style={styles.input} 
        placeholder="Mobile Number"
        onChangeText={(val) => textInputChangeMobileNo(val)}
      />
      </View>
    <View style={styles.containerComments}>
    <Text style={styles.textStyleComments}>Enter Comments</Text>
        <TextInput
        style={styles.input} 
        placeholder="Comments"
        onChangeText={(val) => textInputChange(val)}
      />
      </View>
    <View style={styles.button}>
            <TouchableOpacity
                style={styles.signIn}
                onPress={() => {SignupHandle(bookingData)}}
            >
            <LinearGradient
                colors={['#08d4c4', '#01ab9d']}
                style={styles.signIn}
            >
                <Text style={[styles.textSign, {
                    color:'#fff'
                }]}>Confirm</Text>
            </LinearGradient>
            </TouchableOpacity>
            </View>
    </ScrollView>
  );
};

export default BookingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#ffffff',
    padding: 16,
  },
  containerComments: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: '#ffffff',
    padding: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#eef4ff',
    marginTop: 20
},
signIn: {
  width: '80%',
  height: 50,
  justifyContent: 'center',
  backgroundColor: '#eef4ff',
  alignItems: 'center',
  borderRadius: 10
},
textSign: {
  fontSize: 20,
  fontWeight: 'bold'
},
  textStyleComments: {
    marginLeft: 1,
    marginBottom: 8,
    fontSize: 15,
  },
  textStyleSelBookingDate:{
    marginTop: 5,
    width: "100%",
    fontSize: 15,
   },
  textStyleBookingDate:{
    marginTop: 10,
    textAlign: 'left',
    marginLeft:0
  },
  titleStyle: {
    textAlign: 'center',
    fontSize: 15,
    marginLeft:1
  },
  titleStyleBookingSlot: {
    marginTop: 10,
    marginLeft:5,  
    textAlign: 'center',
    fontSize: 15,
   
  },
  input: {
    borderColor: "gray",
    paddingTop: 5,
    marginLeft:5,
    width: "90%",
    borderWidth: 1,
    borderRadius: 10,
    
  },
  inputComments: {
    borderColor: "gray",
    marginLeft:5,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom:10
    
  },
  dropDown: {
    color: '#72d5cd',  
    justifyContent: 'center',
    borderColor: "gray",
    marginTop: 8,
    paddingTop: 10,
    width: "100%",
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,

  }

});
