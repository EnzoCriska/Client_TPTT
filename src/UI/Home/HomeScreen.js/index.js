import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { RenderHomeScreen } from './render';
import { Loading } from '../../../Util/LoadingScreen';
import { JoinNowGame } from '../../../Network/API';

import Global from '../../../Util/Global';
export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
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

  onGoProfile(){
    this.props.navigation.navigate('Profile')
  }

  onJoinNow(){
    console.log("Join now")
    this.setState({isLoading:true})
    // Call API get System Room
    JoinNowGame(Global.currentUser).then(res => {
      this.setState({isLoading:false})
      // Goto Wait Screen
      this.props.navigation.navigate('WaitScreen')
    })
  }

  onSystemRoom(){
    console.log("System Room")
  }

  onFriendsRoom(){
    console.log("Friends Room")
  }

  onTrainingRoom(){
    console.log("Training")
  }

  render() {
    const { isLoading, hours, milliseconds} = this.state

    if(isLoading){
      return (<Loading/>)
    }
    return (
        <RenderHomeScreen
          hours = {hours}
          milliseconds = {milliseconds}
          onGoProfile = {() => this.onGoProfile()}
          onJoinNow = {()=> this.onJoinNow()}
          onSystemRoom = {() => this.onSystemRoom()}
          onFriendsRoom = {() => this.onFriendsRoom()}
          onTrainingRoom = {() => this.onTrainingRoom()}
        />
    );
  }
}
