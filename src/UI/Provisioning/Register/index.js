import React, { Component } from 'react';
import { SafeAreaView, Alert, Platform } from 'react-native';
import { RenderRegister } from './render';
import { areaStyles } from '../../../Util/Component Util/SafeAreaStyle';
import Strings from '../../../Util/Strings';
import md5 from 'md5';
import DeviceInfo from 'react-native-device-info';

import {connect} from 'react-redux';
import {registerDefault} from '../../../actions/registerAction';
import { Loading } from '../../../Util/Component Util/LoadingScreen';


class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
        deviceId:null,
        os_id:null,
        userName:'',
        password:'',
        rePassword:'',
    };
  }

  componentDidMount = () => {
    const deviceId = DeviceInfo.getUniqueID();
    console.log("This is Device: " + deviceId)
    
    var os_id
    if (Platform.OS === 'ios'){
      os_id = 1
    }else if (Platform.OS === 'android'){
      os_id = 2
    }else{
      os_id = 1
    }

    this.setState({
      deviceId: deviceId,
      os_id: os_id
    })
  }

  onRegister(){
    // Call API Register
    const {deviceId, os_id, password, rePassword, userName} = this.state
    if (password !== rePassword){
      Alert.alert(
        Strings.WARRING,
        Strings.INVALID_PASSWORD
      )
    }else {
      const hashPass = md5(password)
      this.props.registerDefault(this,userName, hashPass, deviceId, os_id)
    }
  }

  onChangeUserName(text){
    this.setState({userName:text})
  }
  
  onChangePassword(text){
    this.setState({password:text})
  }

  onReChangePassword(text){
    this.setState({rePassword:text})
  }
  

  render() {
    const {userName, password, rePassword} = this.state

    if(this.props.data.isRegisting) return <Loading/>

    return (
      <SafeAreaView style={areaStyles.area}>
      <RenderRegister
        userName = {userName}
        password = {password}
        rePassword = {rePassword}
        onChangeUserName = {(text)=> this.onChangeUserName(text)}
        onChangePassword = {(text) => this.onChangePassword(text)}
        onReChangePassword = {(text) => this.onReChangePassword(text)}
        onRegister = {()=> this.onRegister()}
      />
      </SafeAreaView>
    );
  }
}


const mapStateToProps = (state) => {
  return {
      data: state.registerReducer
  }
};

export default connect (mapStateToProps, {registerDefault})(Register)