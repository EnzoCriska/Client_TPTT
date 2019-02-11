import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { RenderWaitGame } from './render';

import Global from '../../../../Util/Global';
export default class WaitScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatValue : '',
      chatList: [{
        userName: 'Rickey',
        content:'hello'
      }]
    };
  }

  componentDidMount() {
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

  onChangeChat(text){
    this.setState({chatValue:text})
  }

  sendMessage(message){
    //Fomat message
    //Send to Firebase
    console.log(message)
    var messageItem = {
      userName: Global.currentUser.userName,
      content: message
    }

    console.log(messageItem)
    var tempList = this.state.chatList
    tempList.push(messageItem)
    this.setState({
      chatList:tempList,
      chatValue:''
    })
  }


  render() {
    const { chatValue, chatList,hours, milliseconds} = this.state

    return (
      <RenderWaitGame
          hours = {hours}
          milliseconds = {milliseconds}
          chatValue = {chatValue}
          chatList = {chatList}
          onChangeChat = {(text) => this.onChangeChat(text)}
          sendMessage = {(message) => this.sendMessage(message)}
      />
    );
  }
}
