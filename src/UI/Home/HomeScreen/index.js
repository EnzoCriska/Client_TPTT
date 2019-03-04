import React, { Component } from 'react';
import { View, SafeAreaView } from 'react-native';
import { RenderHomeScreen } from './render';
import { Loading } from '../../../Util/Component Util/LoadingScreen';
import { JoinNowGame } from '../../../Network/API';

import Global from '../../../Util/Global';
import { areaStyles } from '../../../Util/Component Util/SafeAreaStyle';

import {connect} from 'react-redux';
import {loginDefault} from '../../../actions/loginAction';
import {alert} from '../../../Util/Component Util/alert'

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      listSlide: [{
        uriImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQheIi0r-k7dbFxbpD1-40LzbhZ2tdzpOWSelMhbfJb5W60j-Tj',
        title: 'Supper Mario',
        description:'supper league'
      },{
        uriImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSFF9TWtTDJ86p47eVym1tNS4kF1httkO52ic-ShOGGCm3iot-',
        title: 'Supper Mario 2',
        description:'supper league'
      },{
        uriImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq4uGjMj9L8vRacfMmIjU3YvQ7Vr3utRzbfrhrwdpQULjYL7cR',
        title: 'Supper Mario 3',
        description:'supper league'
      },

    ]
    };
  }

  componentDidMount() {
    var date = new Date().getDate()    
    startTime = new Date(2019, 2, date, 20, 0, 0)
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
    this.props.navigation.navigate('Profile', {router:this.props.navigation})
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
    const {phone} = this.props.data.data.user_info
    if(phone === ''){
      alert("THÔNG BÁO", "Vui lòng cập nhật sđt vinaphone trước", 
            () => this.props.navigation.navigate('UpdatePhone', {router:'fromHome'}))
    }else
    this.props.navigation.navigate('GamePlay')
  }

  onFriendsRoom(){
    console.log("Friends Room")
    this.props.navigation.navigate('ListRoom')
  }

  onTrainingRoom(){
    console.log("Training")
  }

  render() {
    const { isLoading,listSlide, hours, milliseconds} = this.state
    if(isLoading){
      return (<Loading/>)
    }
    return (
      <SafeAreaView style={areaStyles.area}>
        <RenderHomeScreen
          hours = {hours}
          milliseconds = {milliseconds}
          listSlide = {listSlide}
          onGoProfile = {() => this.onGoProfile()}
          onJoinNow = {()=> this.onJoinNow()}
          onSystemRoom = {() => this.onSystemRoom()}
          onFriendsRoom = {() => this.onFriendsRoom()}
          onTrainingRoom = {() => this.onTrainingRoom()}
        />
        </SafeAreaView>
    );
  }
}


const mapStateToProps = (state) => {
  return {
      data: state.loginReducer
  }
};

export default connect (mapStateToProps, {loginDefault})(HomeScreen)