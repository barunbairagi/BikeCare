import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { View, Text, Button, StyleSheet, SafeAreaView, TouchableOpacity,Alert } from 'react-native';

const ConfirmScreen = ({navigation, route}) => {
  const [bookingData, setBookingData] = React.useState({
    userId: 2000,
    userName: '',
    phoneNo: '',
    bookingType: '',
    registrationNo: '',
    bookingTimeSlot: '',
    bookingDatetime: '',
    comments: '',
    bookingStatus:'Success'
})
   onButtonPress = () => {
    console.log("Ln 30 Inside onButtonPress()..");
    navigation.navigate('DashBoardScreen');
   }
   //onButtonPressFail
   onButtonPressFail = () => {
    console.log("Ln 30 Inside onButtonPressFail()..");
    navigation.navigate('BookingScreen');
   }

 // Code to update Signup details and call Service
function  componentDidMount(bookingDataBundle) {
  //console.log("Ln 63 Inside componentDidMount of Confirm Screen" + bookingDataBundle.RegistrationNo +" -Mobile No - "+bookingDataBundle.MobileNo);
     errCode = 'failure';
  // POST request using fetch with error handling
  const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        userId: 2000,
        userName: "Barun Kumar Bairagi",
        phoneNo: bookingDataBundle.MobileNo,
        bookingType: "Basic Service",
        registrationNo: bookingDataBundle.RegistrationNo,
        bookingTimeSlot: bookingDataBundle.selectedTimeSlot,
        bookingDatetime: bookingDataBundle.bookingDate,
        comments: bookingDataBundle.comment })
  };
  fetch('http://10.0.2.2:9090/loginAPI-0.0.1-SNAPSHOT/booking/', requestOptions)
  .then(async response => {
      if(response.status >= 400) {
        throw new Error("Server responds with error!");
    }
      const isJson = response.headers.get('content-type')?.includes('application/json');
      const data = isJson && await response.json();
      //console.log("Line 83 data" + data.toString());
      // check for error response
      if (!response.ok) {
          // get error message from body or default to response status
          const error = (data && data.message) || response.status;
          errCode = response.status;
          return Promise.reject(error);
      }
      else
      {
        errCode == 'Success';
        route.params.clear();
        bookingDataBundle.MobileNo ="";
        bookingDataBundle.RegistrationNo="";
        bookingDataBundle.selectedTimeSlot="";
        bookingDataBundle.bookingDate="";
        bookingDataBundle.comment="";
      }
      
      //this.setState({ postId: data.id })
  })
  .catch(error => {
      this.setState({ errorMessage: error.toString() });
      setBookingData({
          ...bookingData,
          bookingStatus:error.toString()

      });
      console.error('There was an error!', error.toString());
  });

     //console.error('Line 105');
}
  const ConfirmHandle = (bookingDataBundle) => {
        componentDidMount(bookingDataBundle);
        if ( bookingData.bookingStatus =='Success' ) {
          Alert.alert('Success!', 'Booking is Confirmed... Congratulations..', [
              {text: 'Okay',onPress: onButtonPress}
          ]);
          return;
      }
      else{
  
          Alert.alert('Failure!', 'Booking Failed.. Please try again after some time', [
              {text: 'Okay',onPress: onButtonPressFail}
              
          ]);
      }
  
 }
bookingDataBundle = route.params;   
   return (
       <SafeAreaView style={stylesConfirm.container}>
       <View style={stylesConfirm.container}>
        <Text style={stylesConfirm.titleStyle}>
        Confirm Screen
        </Text>
        <Text style={stylesConfirm.text_header}>Booking Date: {bookingDataBundle.bookingDate}</Text>
        <Text style ={stylesConfirm.text_header}>Time Slot : {bookingDataBundle.selectedTimeSlot}</Text>
        <Text style ={stylesConfirm.text_header}>RegistrationNo : {bookingDataBundle.RegistrationNo}</Text>
        <Text style ={stylesConfirm.text_header}>MobileNo : {bookingDataBundle.MobileNo}</Text>
        <Text style ={stylesConfirm.text_header}>Comments : {bookingDataBundle.comment}</Text>
          
      </View>
      <View style={stylesConfirm.button}>
            <TouchableOpacity
                style={stylesConfirm.signIn}
                onPress={() => {ConfirmHandle(bookingDataBundle)}}
            >
            <LinearGradient
                colors={['#08d4c4', '#01ab9d']}
                style={stylesConfirm.signIn}
            >
                <Text style={[stylesConfirm.textSign, {
                    color:'#fff'
                }]}>Confirm Booking</Text>
            </LinearGradient>
            </TouchableOpacity>
            </View>
      </SafeAreaView>
    );
};

export default ConfirmScreen;

const stylesConfirm = StyleSheet.create({
  titleStyle: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 30
  },
  signIn: {
    width: '80%',
    height: 50,
    justifyContent: 'center',
    backgroundColor: '#eef4ff',
    alignItems: 'center',
    borderRadius: 10
  },
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: '#ffffff',
    padding: 10,
  },
  text_header: {
    margin: 5,
     fontSize: 15,
   },
   button: {
    paddingTop: 10,
    alignItems: 'center',
    backgroundColor: '#eef4ff',
    margin: 5
},
});
