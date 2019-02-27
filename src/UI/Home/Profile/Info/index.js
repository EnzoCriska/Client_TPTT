import React, { Component } from 'react';
import { View, SafeAreaView } from 'react-native';
import { RenderInfo } from './render';
import { areaStyles } from '../../../../Util/Component Util/SafeAreaStyle';
var GameRouter 
    
export default class Info extends Component {
  constructor(props) {
    super(props);
    GameRouter = this.props.navigation.getParam('router')
    this.state = {
      avatarUrl: null,
      userName: null,
      pointValue: null,
      rankValue: null,
      gameValue: null,
      r_gValue: null,
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

  render() {
    const {avatarUrl, userName, pointValue, gameValue, rankValue, r_gValue, birthdayValue, phonenumberValue} = this.state
    return (
      <SafeAreaView style={areaStyles.area}>
      <RenderInfo
          onGoBack = {()=> this.onGoBack()}
          onGoEdit = {() => this.onGoEdit()}
          onGoHistoryGame = {() => this.onGoHistoryGame()}
          onGoHistoryChangeGift = {() => this.onGoHistoryChangeGift()}
          onGoChangePassword = {() => this.onGoChangePassword()}
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
