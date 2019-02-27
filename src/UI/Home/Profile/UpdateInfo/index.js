import React, { Component } from 'react';
import { View, SafeAreaView, Platform } from 'react-native';
import { RenderUpdateInfo } from './render';
import {CheckCameraPermission, CheckStoragePermission} from '../../../../Util/CheckPermission';
import { picker } from '../../../../Util/ImagePicker';
import { areaStyles } from '../../../../Util/Component Util/SafeAreaStyle';


export default class UpdateInfo extends Component {
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
    
  }

  onUpdate(){
    // Call API Update

  }

  async onChangeAva(){
    console.log("Change Ava")
    if(Platform.OS === 'android'){
      await CheckCameraPermission((result)=> {
        console.log(result)
        
      })
      await CheckStoragePermission((result) => {
        console.log(result)
        
      })
    }
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
      <SafeAreaView style={areaStyles.area}>
      <RenderUpdateInfo
        avatar = {avatar}
        userName = {userName}
        birthDay = {birthDay}
        CMND = {CMND}
        onChangeAva = {()=> this.onChangeAva()}
        onChangeUserName = {(text)=> this.onChangeUserName(text)}
        onChangeBirthDay = {(text)=> this.onChangeBirthDay(text)}
        onChangeCMND = {(text)=> this.onChangeCMND(text)}
        onUpdate = {()=> this.onUpdate()}
      />
      </SafeAreaView>
    );
  }
}
