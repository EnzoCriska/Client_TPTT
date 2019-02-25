import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { RenderSplash } from './render';

import { connect } from 'react-redux';
import {exchangeAccessToken} from '../../actions/splashAction';


class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.props.exchangeAccessToken(this)
    }, 3000)
    
  };
  
  goToLogin(){
      this.props.navigation.navigate('Login')
  }

  render() {
    console.log(this.props)
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

