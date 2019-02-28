import React, { Component } from 'react';
import { View, SafeAreaView } from 'react-native';
import { RenderInfo } from './render';
import { areaStyles } from '../../../../Util/Component Util/SafeAreaStyle';
import { CheckNetwork } from '../../../../Util/UtilFunction/CheckNetworkConnection';

import {Loading} from '../../../../Util/Component Util/LoadingScreen';
import { LogOut } from '../../../../Network/ProvisioningAPI';
import { getAccessToken } from '../../../../Util/UtilFunction/asyncStorage';

var GameRouter 
    
export default class Info extends Component {
  constructor(props) {
    super(props);
    GameRouter = this.props.navigation.getParam('router')
    this.state = {
      isLoading :false,
      avatarUrl: null,
      userName: null,
      pointValue: 0,
      rankValue: 0,
      gameValue: 0,
      r_gValue: 0,
      birthdayValue: null,
      phonenumberValue:null
    };
  }

  componentDidMount(){
    // Call API
  }

  onGoBack(){
    console.log("goBack")
    GameRouter.pop()
  }

  onGoEdit(){
    console.log("Edit")
    this.props.navigation.navigate('Edit')
  }

  onGoHistoryGame(){
    this.props.navigation.navigate('HistoryGame')
    
  }

  onGoHistoryChangeGift(){
    this.props.navigation.navigate('HistoryChangeGift')
  }

  onGoChangePassword(){
    this.props.navigation.navigate('ChangePassword')
  }

  async onLogout(){
    const token = await getAccessToken()

    CheckNetwork().then(connection => {
      if (connection.type === 'none'){
        alert(Strings.FAIL, 
              Strings.INTERNET_NOT_CONNECTED  , 
                () => console.log("please connect"))
    }else{
        this.setState({isLoading: true})
        LogOut(token).then(res => {
          console.log(res)
          this.props.navigation.navigate('Login')})
        .catch(err => console.log(err))
        this.setState({isLoading:false})
    }
    })
  }

  render() {
    const {isLoading,avatarUrl, userName, pointValue, gameValue, rankValue, r_gValue, birthdayValue, phonenumberValue} = this.state
    if (isLoading) return <Loading/>
    return (
      <SafeAreaView style={areaStyles.area}>
      <RenderInfo
          onGoBack = {()=> this.onGoBack()}
          onGoEdit = {() => this.onGoEdit()}
          onGoHistoryGame = {() => this.onGoHistoryGame()}
          onGoHistoryChangeGift = {() => this.onGoHistoryChangeGift()}
          onGoChangePassword = {() => this.onGoChangePassword()}
          onLogout = {() => this.onLogout()}
          avartarUrl = {avatarUrl}
          userName = {userName}
          pointValue = {pointValue}
          gameValue = {gameValue}
          rankValue = {rankValue}
          r_gValue = {r_gValue}
          birthdayValue = {birthdayValue}
          phonenumberValue = {phonenumberValue}
      />
      </SafeAreaView>
    );
  }
}
