import React, { Component } from 'react';
import {SafeAreaView  } from 'react-native';
// import {SafeAreaView} from 'react-navigation';

import {RenderLogin} from './render';
import { Loading } from '../../../Util/Component Util/LoadingScreen';
import { SigIn } from '../../../Network/API';

import Global from '../../../Util/Global';
import { areaStyles } from '../../../Util/Component Util/SafeAreaStyle';
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
        phone : '',
        pass : '', 
        isLoading : false
    };
  }

  onChangePhone(text){
      console.log(text)
      this.setState({phone:text})
  }

  onChangePass(text){
    console.log(text)
      this.setState({pass:text})
  }

  onLogin(){
      console.log("Login")
      this.setState({isLoading:true})
      SigIn(this.state.phone, this.state.pass)
      .then((res)=> {
        // console.log(res)
        Global.currentUser = res
        this.setState({isLoading:false})
        this.props.navigation.navigate('bottomTabStack')
      })
  }

  onFBLogin(){
      console.log(" FB Login")
      this.props.navigation.navigate('updatePhone')
  }

  onRegister(){
      console.log("Register")
      this.props.navigation.navigate('Register', {phone: this.state.phone, password: this.state.pass})
  }

  onForgotPassword(){
      console.log("Forgot Pass")
  }

  render() {
    const {phone, pass, isLoading} = this.state;
    if (isLoading) return (<Loading/>)
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
