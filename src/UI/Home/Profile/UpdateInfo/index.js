import React, { Component } from 'react';
import { View, SafeAreaView, Platform } from 'react-native';
import { RenderUpdateInfo } from './render';
import {CheckCameraPermission, CheckStoragePermission} from '../../../../Util/UtilFunction/CheckPermission';
import { picker } from '../../../../Util/UtilFunction/ImagePicker';
import { areaStyles } from '../../../../Util/Component Util/SafeAreaStyle';
import { getAccessToken } from '../../../../Util/UtilFunction/asyncStorage';
import { UpdateProfile } from '../../../../Network/ProvisioningAPI';
import { Loading } from '../../../../Util/Component Util/LoadingScreen';
import alertMsgErrorCallApi from '../../../../Util/Component Util/alertMsgErrorCallApi';

import {connect} from 'react-redux';
import {InfoUpdateAction} from '../../../../actions/updateInfoAction';
import {uploadAvatar} from '../../../../actions/uploadAvatarAction';

class UpdateInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
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

    if(displayName === '' && address === ''){
      this.props.navigation.goBack()
    }else{
      if (displayName === ''){
        console.log(">>>>>>>>.")
        console.log(this.props.data.info)
        const oldName = this.props.data.info.display_name
        this.props.InfoUpdateAction(this, this.props.data.info, oldName, address, gender, token)
      }else if (address === ''){
        const oldAddress = this.props.data.info.address
        this.props.InfoUpdateAction(this, this.props.data.info, displayName, oldAddress, gender, token)
      }else if(displayName !== '' && address !== '' ){
        this.props.InfoUpdateAction(this, this.props.data.info, displayName, address, gender, token)
      }
    }
  }

  async onChangeAva(){
    console.log("Change Ava")
    const token = await getAccessToken()

    if(Platform.OS === 'android'){
      await CheckCameraPermission((result)=> {
        console.log(result)
        
      })
      await CheckStoragePermission((result) => {
        console.log(result)
        
      })
    }
    await picker((source, data) =>
      {
        this.setState({
          avatar: source,
          data : data
      })

      var url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEL9z7grn7WN-lomPJalJCRB9kAMnjiHLYP5smMH3JPNezbe_4sA" 
      this.props.uploadAvatar(this, this.props.data.info, url, 1, token)
    })
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
    const {avatar, displayName, address, male, female, isLoading} = this.state

    if(this.props.data.isLoading) return <Loading/>
    
    return (
      <SafeAreaView style={areaStyles.area}>
      <RenderUpdateInfo
        avatar = {avatar}
        displayName = {displayName}
        address = {address}
        male = {male}
        female = {female}

        onChangeAva = {()=> this.onChangeAva()}
        onChangeDisplayName = {(text)=> this.onChangeDisplayName(text)}
        onChangeAddress = {(text)=> this.onChangeAddress(text)}
        onSetChecker = {() => this.onSetChecker()}
        onUpdate = {()=> this.onUpdate()}
      />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      data: state.loadInfoReducer,
  }
};

export default connect (mapStateToProps, {InfoUpdateAction, uploadAvatar})(UpdateInfo)
