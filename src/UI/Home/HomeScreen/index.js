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
import { LoadAdvertisement, LoadNextGame } from '../../../Network/LoadDataAPI';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      listSlide: [],
      time_start: '',
      countUser:''
    };
  }

   async componentDidMount() {

    this.loadAdd()

    await this.loadTimeNextGame()

    var date = new Date().getDate() 
    startTime = new Date(parseInt(this.state.time_start))  
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

  async loadTimeNextGame(){
    await LoadNextGame(this.props.data.token).then(res => {
      const body = JSON.parse(res._bodyText)
      console.log(body)
      //set state
      this.setState({
        time_start: body.rows[0].frame_time,
        countUser: body.rows[0].count_user
      })
    })
  }

  loadAdd(){
    LoadAdvertisement(this.props.data.token).then(res => {
      const body = JSON.parse(res._bodyText)
      this.setState({
        listSlide:body.rows
      })
    })
  }

  onGoProfile(){
    this.props.navigation.navigate('Profile', {router:this.props.navigation})
  }

  onJoinNow(){
    console.log("Join now")
    this.setState({isLoading:true})
    // Call API get System Room
    // JoinNowGame(Global.currentUser).then(res => {
    //   this.setState({isLoading:false})
      // Goto Wait Screen
    //   this.props.navigation.navigate('WaitScreen')
    // })
  }

  onSystemRoom(){
    const {phone} = this.props.data.user_info
    if(phone === ''){
      alert("THÔNG BÁO", "Vui lòng cập nhật sđt vinaphone trước", () => this.props.navigation.navigate('UpdatePhone', {router:'fromHome'}))
    }else
    this.props.navigation.navigate('GamePlay')
  }

  onFriendsRoom(){
    console.log("Friends Room")
    this.props.navigation.navigate('ListRoom')
  }

  onTrainingRoom(){
    console.log("Training")
    this.props.navigation.navigate('TrainPlay')
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