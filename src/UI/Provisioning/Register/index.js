import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { RenderRegister } from './render';
import {CheckCameraPermission, CheckStoragePermission} from '../../../Util/CheckPermission';
import { picker } from '../../../Util/ImagePicker';


export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
        phone:'',
        pass:'',
        avatar:null,
        userName:'',
        birthDay:'',
        CMND:'',
        data: null 
    };
  }

  componentDidMount = () => {
    var {navigation} = this.props
    this.setState({
        phone: navigation.getParam('phone', null),
        pass : navigation.getParam('password', null)
    })
  }

  onRegister(){
    // Call API Register
    this.props.navigation.navigate('confirmOTP')
  }

  async onChangeAva(){
    console.log("Change Ava")
    await CheckCameraPermission((result)=> {
      console.log(result)
      
    })
    await CheckStoragePermission((result) => {
      console.log(result)
      
    })
    await picker((source, data) =>
      this.setState({
        avatar: source,
        data : data
      }))
  }

  onChangeUserName(text){
    this.setState({userName:text})
  }
  
  onChangeBirthDay(text){
    this.setState({birthDay:text})
  }

  onChangeCMND(text){
    this.setState({CMND:text})
  }
  

  render() {
    const {avatar, userName, birthDay, CMND} = this.state
    return (
      <RenderRegister
        avatar = {avatar}
        userName = {userName}
        birthDay = {birthDay}
        CMND = {CMND}
        onChangeAva = {()=> this.onChangeAva()}
        onChangeUserName = {(text)=> this.onChangeUserName(text)}
        onChangeBirthDay = {(text)=> this.onChangeBirthDay(text)}
        onChangeCMND = {(text)=> this.onChangeCMND(text)}
        onRegister = {()=> this.onRegister()}
      />
    );
  }
}
