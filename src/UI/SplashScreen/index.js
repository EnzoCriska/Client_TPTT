import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { RenderSplash } from './render';

import { connect } from 'react-redux';
import {exchangeAccessToken} from '../../actions/splashAction';
import { getStatusLogin, getAccessToken } from '../../Util/UtilFunction/asyncStorage';
// import { ws } from '../../Util/WS/connector';






class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    
  }

  async componentDidMount(){
    // ws.onopen = () => ws.send(JSON.stringify({type: 'greet', payload: 'Hello Mr. Server!'}));
    // ws.onmessage = ({data}) =>  console.log(data)
    
    const token = await getAccessToken()
    const status = await getStatusLogin()
    const user_info = JSON.parse(status)

    setTimeout(() => {      
      this.props.exchangeAccessToken(this, token, user_info)
    }, 3000)
}
  
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

