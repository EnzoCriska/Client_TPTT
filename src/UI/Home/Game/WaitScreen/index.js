import React, { Component } from 'react';
import { View, SafeAreaView } from 'react-native';
import { RenderWaitGame } from './render';

import Global from '../../../../Util/Global';
import { SendMessageFirebase, ReadMessageData } from '../../../../Network/Firebase';
import { areaStyles } from '../../../../Util/Component Util/SafeAreaStyle';
export default class WaitScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatValue : '',
      chatList: [{
        userName: '',
        content:''
      }]
    };
  }

  componentDidMount() {
    this.updateMessage()

    var date = new Date().getDate()    
    startTime = new Date(2019, 1, date, 20, 0, 0)
     console.log(startTime)
    setInterval( () => {
        var time = new Date()
        var timeDiff = Math.abs(startTime - time);
        var diffHours = Math.round(timeDiff/(1000 * 3600))
        var diffMilliseconds = Math.round((timeDiff%(1000 * 3600)) / (1000*60))

      this.setState({
        hours : diffHours,
        milliseconds: diffMilliseconds,
      })
    },1000)
    
  }

  updateMessage(){

    ReadMessageData((list) =>{
      this.setState({chatList:list})
      console.log(this.setState.chatList)
    }
    )
  }

  onChangeChat(text){
    this.setState({chatValue:text})
  }

  sendMessage(message){
    //Fomat message
    //Send to Firebase
    console.log(message)
    if (message != ''){
      var messageItem = {
        userName: Global.currentUser.userName,
        content: message
      }
  
      SendMessageFirebase(messageItem)
  
     this.setState({chatValue:''})
    }
    
    
  }

  goToBack(){
    this.props.navigation.goBack()
  }

  onGoProfile(){
    this.props.navigation.navigate('Profile', {router:this.props.navigation})
  }


  render() {
    const { chatValue, chatList,hours, milliseconds} = this.state

    return (
      <SafeAreaView style={areaStyles.area}>
      <RenderWaitGame

          onGoProfile = {() => this.onGoProfile()}

          hours = {hours}
          milliseconds = {milliseconds}
          chatValue = {chatValue}
          chatList = {chatList}
          onChangeChat = {(text) => this.onChangeChat(text)}
          sendMessage = {(message) => this.sendMessage(message)}
          goToBack = {() => this.goToBack()}
      />
      </SafeAreaView>
    );
  }
}
