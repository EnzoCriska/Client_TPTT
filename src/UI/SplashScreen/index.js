import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { RenderSplash } from './render';

export default class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount = () => {

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
