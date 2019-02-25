import React, { Component } from 'react';
import { SafeAreaView, Alert } from 'react-native';
import { RenderRegister } from './render';
import { areaStyles } from '../../../Util/Component Util/SafeAreaStyle';
import Strings from '../../../Util/Strings';


export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
        userName:'',
        password:'',
        rePassword:'',
    };
  }

  componentDidMount = () => {
    
  }

  onRegister(){
    // Call API Register
    if (this.state.password !== this.state.rePassword){
      Alert.alert(
        Strings.WARRING,
        Strings.INVALID_PASSWORD
      )
    }else this.props.navigation.navigate('confirmOTP')
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
