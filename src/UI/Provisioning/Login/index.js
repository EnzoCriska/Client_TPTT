import React, { Component } from 'react';
import {SafeAreaView , Platform } from 'react-native';
// import {SafeAreaView} from 'react-navigation';

import {RenderLogin} from './render';
import { Loading } from '../../../Util/Component Util/LoadingScreen';
import { SigIn } from '../../../Network/API';

import Global from '../../../Util/Global';
import { areaStyles } from '../../../Util/Component Util/SafeAreaStyle';

import {connect} from 'react-redux';
import {loginDefault} from '../../../actions/loginAction';

import md5 from 'md5';
import DeviceInfo from 'react-native-device-info';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
        deviceId:null,
        os_id:null,
        phone : null,
        pass : null, 
        isLoading : false
    };
  }

  componentDidMount = () => {
    const deviceId = DeviceInfo.getUniqueID();
    
    var os_id
    if (Platform.OS === 'ios'){
      os_id = 1
    }else if (Platform.OS === 'android'){
      os_id = 2
    }else{
      os_id = 1
    }

    this.setState({
        phone:'',
        pass: '',
      deviceId: deviceId,
      os_id: os_id
    })
  }

  onChangePhone(text){
      this.setState({phone:text})
  }

  onChangePass(text){
      this.setState({pass:text})
  }

  onLogin(){
      const {phone, pass, deviceId, os_id} = this.state
      if (phone === '' || pass === ''){
        Alert.alert(
          Strings.WARRING,
          Strings.NULL_IN_USER_PASS_REPASS
        )
      }else if(pass.length < 6 ){
          Alert.alert(
            Strings.WARRING,
            Strings.MIN_LENGTH_OF_PASS
          )
        }else{
        const hashPass = md5(md5(pass))
        this.props.loginDefault(this, phone, hashPass, deviceId, os_id)
    }
  }

  onFBLogin(){
      console.log(" FB Login")
      this.props.navigation.navigate('updatePhone')
  }

  onRegister(){
      console.log("Register")
      this.props.navigation.navigate('Register')
  }

  onForgotPassword(){
      console.log("Forgot Pass")
  }

  render() {
    const {phone, pass, isLoading} = this.state;
    if (this.props.data.isLoading) return (<Loading/>)
    
    return (
        <SafeAreaView style={areaStyles.area}>
        <RenderLogin
            phone = {phone}
            password = {pass}
            onChangePhone =  {(text) => this.onChangePhone(text)}
            onChangePass = {(textPass) => this.onChangePass(textPass)}
            onLogin = {()=> this.onLogin()}
            onFBLogin = {()=> this.onFBLogin()}
            onRegister = {() => this.onRegister()}
            onForgotPassword = {()=> this.onForgotPassword()}
        />
        </SafeAreaView>
    );
  }
}


const mapStateToProps = (state) => {
    return {
        data: state.loginReducer,
    }
};

export default connect (mapStateToProps, {loginDefault})(Login)