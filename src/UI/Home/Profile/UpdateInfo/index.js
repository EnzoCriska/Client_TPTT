import React, { Component } from 'react';
import { View, SafeAreaView, Platform } from 'react-native';
import { RenderUpdateInfo } from './render';
import {CheckCameraPermission, CheckStoragePermission} from '../../../../Util/UtilFunction/CheckPermission';
import { picker } from '../../../../Util/UtilFunction/ImagePicker';
import { areaStyles } from '../../../../Util/Component Util/SafeAreaStyle';
import { getAccessToken } from '../../../../Util/UtilFunction/asyncStorage';
import { UpdateProfile } from '../../../../Network/ProvisioningAPI';


export default class UpdateInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
        phone:'',
        pass:'',
        avatar:null,
        displayName:'',
        address:'',
        male: true,
        female:false,
        data: null 
    };
  }

  componentDidMount = () => {
    
  }

  async onUpdate(){
    const {displayName, address, male, female} = this.state
    const token = await getAccessToken()
    // Call API Update
    var gender
    if(male){
      gender = 0
    }else{
      gender = 1
    }

    console.log(gender +" "+ token)
    UpdateProfile(displayName, address,gender, token).then(res => {
      console.log(res._bodyText)
      const body = JSON.parse(res._bodyText)
      if (body.code === 200){
        this.props.navigation.navigate('bottomTabStack')
      }
    })
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

  onChangeDisplayName(text){
    this.setState({displayName:text})
  }
  
  onChangeAddress(text){
    this.setState({address:text})
  }

  onSetChecker(){
    this.setState({
      male: !this.state.male,
      female: !this.state.female
    })
  }
  

  render() {
    const {avatar, displayName, address, male, female} = this.state
    return (
      <SafeAreaView style={areaStyles.area}>
      <RenderUpdateInfo
        avatar = {avatar}
        displayName = {displayName}
        address = {address}
        male = {male}
        female = {female}
        // CMND = {CMND}
        onChangeAva = {()=> this.onChangeAva()}
        onChangeDisplayName = {(text)=> this.onChangeDisplayName(text)}
        onChangeAddress = {(text)=> this.onChangeAddress(text)}
        onSetChecker = {() => this.onSetChecker()}

        // onChangeCMND = {(text)=> this.onChangeCMND(text)}
        onUpdate = {()=> this.onUpdate()}
      />
      </SafeAreaView>
    );
  }
}
