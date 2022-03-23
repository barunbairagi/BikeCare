import {Dimensions, StyleSheet} from 'react-native';
const {width: WIDTH} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#87CEEB',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 5,
  },
  backgroundcontainer: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    alignItems: 'center'
  },
  logocontainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5
  },
  logoText:
  {
    color: 'white',
    fontSize: 30,
    fontWeight:'300',
    marginTop: 5,
    opacity: 0.5,
    marginBottom: 2
  },
  btnText:
  {
    color: 'white',
    fontSize: 20,
    opacity: 0.5,
    justifyContent: 'center',
    alignContent:'center'
  },
  textInput:{
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    paddingLeft: 10,
    backgroundColor: 'rgba(0,0,0,0.35)',
    color: 'rgba(255,255,255,0.7)',
  },
  inputIcons: {
    position: 'absolute',
    top:6,
    left:37,
  },
  signInText:{
    marginTop: 2,
    color: 'white',
    fontSize: 30,
    fontWeight:'100',

  },
  inputContainer: {
    marginTop: 15,
  },
  inputContainerSignup: {
    marginTop: 95,
  },
  btnLogin:
  {
    width:WIDTH -100,
    backgroundColor:'#191970',
    borderRadius:25,
    height:50,
    alignItems:'center',
    justifyContent:'center',
    marginTop:40,
    marginBottom:10
  },
  forgot:{
    color:'blue',
    fontSize:15,
    marginTop: 10,
    justifyContent: 'flex-end',
    alignItems:'flex-end',
  },
  btnTextSignup:{
    color:'blue',
    marginTop:5

  }
});

export default styles;
