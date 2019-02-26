import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { RenderSplash } from './render';

import { connect } from 'react-redux';
import {exchangeAccessToken} from '../../actions/splashAction';
import { getStatusLogin } from '../../Util/asyncStorage';





class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount = () => {
    
    setTimeout(() => {
      // getStatusLogin().then(status => {
      //   if (status){
      //     this.props.navigation.navigate('bottomTabStack')
      //   }else{
      //     this.props.navigation.navigate('Login')
      //   }
      // })
      this.props.exchangeAccessToken(this)
    }, 3000)
    
  };
  
  goToLogin(){
      this.props.navigation.navigate('Login')
  }

  render() {
    return (
      <RenderSplash/>
    );
  }
}


function mapStateToProps(state) {
  return {
      token: state.splashReducer,
  };
}


export default connect(mapStateToProps, {exchangeAccessToken})(SplashScreen);

