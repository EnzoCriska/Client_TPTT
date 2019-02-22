import React, { Component } from 'react';
import { View, SafeAreaView } from 'react-native';
import { RenderWaitFriendRoom } from './render';
import {Loading} from '../../../../Util/Component Util/LoadingScreen';
import { areaStyles } from '../../../../Util/Component Util/SafeAreaStyle';
export default class WaitFriendRoom extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isRoot : this.props.navigation.getParam('isRoot'),
      roomInfo: this.props.navigation.getParam('infoRoom'),
      listPlayerJoined: [],
      hours:'',
      milliseconds:''
    };
  }

  goToBack(){
    this.props.navigation.goBack()
  }

  componentDidMount(){
    
    var list = [
      {
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQakdZtH_lxyBNe-7n5vGi8a7fUc6dHq23LLq241XNuLUOqhsHKdQ",
        userName: "Ta Thuy Linh",
        level: 88
      },
      {
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQscW7HKwpordocvJMGKx26-Dd58sHZvUoUen_DSozVg_whFSiqqQ",
        userName: "Tran Tu Hy",
        level: 49
      },
      {
        avatar: "https://znews-photo.zadn.vn/w660/Uploaded/neg_rtlzofn/2017_01_17/32170714692_3c45efdeef_o.jpg",
        userName: "Nguyen Mai Quyen",
        level: 94
      },
      {
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3bXWE_z11q5YmuCwhUpoBMSMnN2XmanaUzE0CMmzMKJByG_G2",
        userName: "Nguyen Thuy Thuy",
        level: 99
      },
      {
        avatar: "https://i.pinimg.com/236x/92/05/f5/9205f5bdc78e20d8b6db83b68d84d620.jpg",
        userName: "Tran Bich Ngoc",
        level: 89
      },
      {
        avatar: "http://nguyenthang.com.vn/wp-content/uploads/2018/03/kieu-toc-ngan-dep-nhat-2018-12.jpg",
        userName: "Tong Linh Linh",
        level: 67
      }, 
      
    ]
    this.setState({
      listPlayerJoined: list
    })
    
    var date = new Date()    
    startTime = new Date(2019, date.getMonth(),date.getDate(), 20, 0, 0)
    //  console.log(startTime)
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

  onStartGame(){
    this.props.navigation.navigate('GamePlay')
  }
  onToInvite(){
    this.props.navigation.navigate('InviteJoin')
  }

  onGoProfile() {
    this.props.navigation.navigate('Profile', {router:this.props.navigation})
  }

  render() {
    const {isRoot, roomInfo, listPlayerJoined, hours, milliseconds} = this.state
    if (!listPlayerJoined.length > 0) return <Loading/>
    return (
      <SafeAreaView style={areaStyles.area}>
      <RenderWaitFriendRoom
        goToBack = {() => this.goToBack()}
        onGoProfile = {() => this.onGoProfile()}

        isRoot =  {isRoot}
        listPlayerJoined = {listPlayerJoined}
        roomInfo = {roomInfo}
        hours = {hours}
        milliseconds = {milliseconds}
        onStartGame = {() => this.onStartGame()}
        onToInvite = {() => this.onToInvite()}
      />
      </SafeAreaView>
    );
  }
}
