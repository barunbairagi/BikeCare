import React, {Component} from 'react';

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
  } from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { Form, TextValidator } from 'react-native-validator-form';



import bgImage from '../assets/back2.png';
import logoImage from '../assets/logo1.jpg';
import styles from '../stylesheet/Styles';

const SignUpScreen = ({navigation}) => {
  const [data, setData] = React.useState({
    username: '',
    password: '',
    confirm_password: '',
    phoneNo:0,
    check_textInputChange: false,
    check_MobileInputChange: false,
    isValidUser: true,
    isValidPassword: true,    
    isConfirmPassword: true,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
    signupStatus:'Success'
});

const textInputChange = (val) => {
    if( val.length !== 0 ) {
        setData({
            ...data,
            username: val,
            check_textInputChange: true
        });
    } else {
        setData({
            ...data,
            username: val,
            check_textInputChange: false
        });
    }
}

const textInputMobile = (val) => {
    if( val.length !== 0 ) {
        setData({
            ...data,
            phoneNo: val,
            check_MobileInputChange: true
        });
    } else {
        setData({
            ...data,
            phoneNo: val,
            check_MobileInputChange: false
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

const handleConfirmPasswordChange = (val) => {
    if( val.trim().length >= 8 && data.password == val) {
        setData({
            ...data,
            confirm_password: val,
            isConfirmPassword: true
        });
    } else {
        setData({
            ...data,
            confirm_password: val,
            isConfirmPassword: false
        });
    }
}

const updateSecureTextEntry = () => {
    setData({
        ...data,
        secureTextEntry: !data.secureTextEntry
    });
}

const updateConfirmSecureTextEntry = () => {
    setData({
        ...data,
        confirm_secureTextEntry: !data.confirm_secureTextEntry
    });

    
}
// Ends above
onButtonPress = () => {
   /* this.props.navigator.push({
       name: 'LoginScreen',
       title: 'LoginScreen',
    });
    */
   console.log("Ln 110 Inside onButtonPress()..");
    navigation.navigate('LoginScreen');
}
const SignupHandle = (data) => {
    componentDidMount(data);
    if ( data.signupStatus =='Success' ) {
        Alert.alert('Success!', 'Successful Signed up.. Congratulations..', [
            {text: 'Okay',onPress: onButtonPress}
        ]);
        return;
    }
    else{

        Alert.alert('Failure!', 'Signup Failed.. Please try again after some time', [
            {text: 'Okay'}
        ]);
    }
}
// Code to update Signup details and call Service
function  componentDidMount(data) {
    console.log("Ln 85 Inside componentDidMount "); 
       errCode = 'failure';
    // POST request using fetch with error handling
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
        userName: data.username,
        phoneNo: data.phoneNo,
        passWord: data.password,
        oldPassword: data.password,
        userToken: data.username.substring(0, 3)+data.password,
        wrong_login_attempt: 0,
        today_login_Attempt: 1,
        is_now_login: "No",
        datetime: new Date().toLocaleString(),
        id: null 
    })
    };
    fetch('http://10.0.2.2:9090/loginAPI-0.0.1-SNAPSHOT/addUser/', requestOptions)
        .then(async response => {
            const isJson = response.headers.get('content-type')?.includes('application/json');
            const data = isJson && await response.json();

            // check for error response
            if (!response.ok) {
                // get error message from body or default to response status
                const error = (data && data.message) || response.status;
                errCode = response.status;
                return Promise.reject(error);
            }
            else
            errCode == 'Success';
            //this.setState({ postId: data.id })
        })
        .catch(error => {
            this.setState({ errorMessage: error.toString() });
            setData({
                ...data,
                signupStatus:error.toString()

            });
            console.error('There was an error!', error.toString());
        });
        //console.error('Line 95 Error Code ='+ data.signupStatus);
}

return (
  <View style={stylesSignUp.container}>
      <StatusBar backgroundColor='#009387' barStyle="light-content"/>
    <View style={stylesSignUp.header}>
        <Text style={stylesSignUp.text_header}>Register Now!</Text>
    </View>
    <Animatable.View 
        animation="fadeInUpBig"
        style={stylesSignUp.footer}
    >
        <ScrollView>
        <Text style={stylesSignUp.text_footer}>Username</Text>
        <View style={stylesSignUp.action}>
            <FontAwesome 
                name="user-o"
                color="#05375a"
                size={20}
            />
            <TextInput 
                placeholder="Your Username"
                style={stylesSignUp.textInput}
                autoCapitalize="none"
                onChangeText={(val) => textInputChange(val)}
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


        <Text style={[stylesSignUp.text_footer, {
            marginTop: 35
        }]}>Mobile No</Text>
        <View style={stylesSignUp.action}>
            <FontAwesome 
                name="user-o"
                color="#05375a"
                size={20}
            />
            <TextInput 
                placeholder="Your Mobile No"
                style={stylesSignUp.textInputMobile}
                autoCapitalize="none"
                onChangeText={(val) => textInputMobile(val)}
            />
            {data.check_MobileInputChange ? 
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

        <Text style={[stylesSignUp.text_footer, {
            marginTop: 35
        }]}>Password</Text>
        <View style={stylesSignUp.action}>
            <Feather 
                name="lock"
                color="#05375a"
                size={20}
            />
            <TextInput 
                placeholder="Your Password"
                secureTextEntry={data.secureTextEntry ? true : false}
                style={stylesSignUp.textInput}
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
            { data.isValidPassword ? null : 
                <Animatable.View animation="fadeInLeft" duration={500}>
                <Text style={stylesSignUp.errorMsg}>Password must be 8 characters long.</Text>
                </Animatable.View>
            }
        </View>

        <Text style={[stylesSignUp.text_footer, {
            marginTop: 35
        }]}>Confirm Password</Text>
        <View style={stylesSignUp.action}>
            <Feather 
                name="lock"
                color="#05375a"
                size={20}
            />
            <TextInput 
                placeholder="Confirm Your Password"
                secureTextEntry={data.confirm_secureTextEntry ? true : false}
                style={stylesSignUp.textInput}
                autoCapitalize="none"
                onChangeText={(val) => handleConfirmPasswordChange(val)}
            />
            <TouchableOpacity
                onPress={updateConfirmSecureTextEntry}
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
            { data.confirm_secureTextEntry ? null : 
              <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={stylesSignUp.errorMsg}>Password must Same...</Text>
              </Animatable.View>
        }
        </View>
        <View style={stylesSignUp.textPrivate}>
            <Text style={stylesSignUp.color_textPrivate}>
                By signing up you agree to our
            </Text>
            <Text style={[stylesSignUp.color_textPrivate, {fontWeight: 'bold'}]}>{" "}Terms of service</Text>
            <Text style={stylesSignUp.color_textPrivate}>{" "}and</Text>
            <Text style={[stylesSignUp.color_textPrivate, {fontWeight: 'bold'}]}>{" "}Privacy policy</Text>
        </View>
        <View style={stylesSignUp.button}>
            <TouchableOpacity
                style={stylesSignUp.signIn}
                onPress={() => {SignupHandle( data )}}
            >
            <LinearGradient
                colors={['#08d4c4', '#01ab9d']}
                style={stylesSignUp.signIn}
            >
                <Text style={[stylesSignUp.textSign, {
                    color:'#fff'
                }]}>Sign Up</Text>
            </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={[stylesSignUp.signIn, {
                    borderColor: '#009387',
                    borderWidth: 1,
                    marginTop: 15
                }]}
            >
                <Text style={[stylesSignUp.textSign, {
                    color: '#009387'
                }]}>Sign In</Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
    </Animatable.View>
  </View>
);
  
}
export default SignUpScreen;


const stylesSignUp = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#009387'
  },
  header: {
      flex: 1,
      justifyContent: 'flex-end',
      paddingHorizontal: 20,
      paddingBottom: 50
  },
  footer: {
      flex: Platform.OS === 'ios' ? 3 : 5,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingHorizontal: 20,
      paddingVertical: 30
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
  textInput: {
      flex: 1,
      marginTop: Platform.OS === 'ios' ? 0 : -12,
      paddingLeft: 10,
      color: '#05375a',
  },
  textInputMobile:{
      flex: 1,
      marginTop: Platform.OS === 'ios' ? 0 : -12,
      paddingLeft: 10,
      color: '#05375a'
  },
  button: {
      alignItems: 'center',
      marginTop: 50
  },
  signIn: {
      width: '100%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10
  },
  textSign: {
      fontSize: 18,
      fontWeight: 'bold'
  },
  textPrivate: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginTop: 20
  },
  color_textPrivate: {
      color: 'grey'
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
},
});
