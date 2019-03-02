import React, { Component } from 'react';
import { View, SafeAreaView } from 'react-native';
import { RenderInfo } from './render';
import { areaStyles } from '../../../../Util/Component Util/SafeAreaStyle';
import { CheckNetwork } from '../../../../Util/UtilFunction/CheckNetworkConnection';

import {Loading} from '../../../../Util/Component Util/LoadingScreen';
import { LogOut } from '../../../../Network/ProvisioningAPI';
import { getAccessToken } from '../../../../Util/UtilFunction/asyncStorage';

var GameRouter
import {connect} from 'react-redux'
import {loadInfoAction} from '../../../../actions/InfoAction'


class Info extends Component {
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

  async  componentWillMount(){
    // Call API
    const pre = {
      userName: null,
      point: null
    }

    const token = await getAccessToken()

    await this.props.loadInfoAction(this, pre, token)

    
  }

  componentDidMount = () => {
    console.log("This is Info")
    console.log(this.props)
  };
  

  onGoBack(){
    console.log("goBack")
    GameRouter.pop()
  }

  onGoEdit(){
    console.log("Edit")
    this.props.navigation.navigate('Edit', {router: 'goBack'})
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

  onChangePhone(){
    this.props.navigation.navigate('UpdatePhone',{router:'fromInfo'})
  }

  render() {
    const {isLoading,avatarUrl, userName, pointValue, gameValue, rankValue, r_gValue, birthdayValue, phonenumberValue} = this.state
    
    console.log(this.props)
    if (this.props.data.isLoading) return <Loading/>
    const {display_name, money, point, system_point, total_trans, phone, address, avatar} = this.props.data.info
    return (
      <SafeAreaView style={areaStyles.area}>
      <RenderInfo
          onGoBack = {()=> this.onGoBack()}
          onGoEdit = {() => this.onGoEdit()}
          onChangePhone = {() => this.onChangePhone()}
          onGoHistoryGame = {() => this.onGoHistoryGame()}
          onGoHistoryChangeGift = {() => this.onGoHistoryChangeGift()}
          onGoChangePassword = {() => this.onGoChangePassword()}
          onLogout = {() => this.onLogout()}
          avartarUrl = {avatar}
          userName = {display_name}
          pointValue = {point}
          gameValue = {gameValue}
          rankValue = {system_point}
          r_gValue = {r_gValue}
          birthdayValue = {address}
          phonenumberValue = {phone}
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

export default connect (mapStateToProps, {loadInfoAction})(Info)
