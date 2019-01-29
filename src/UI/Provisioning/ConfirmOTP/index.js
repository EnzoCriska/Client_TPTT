import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { RenderConfirmOTP } from './render';

export default class ConfirmOTP extends Component {
  constructor(props) {
    super(props);
    this.state = {
        OTP :''
    };
  }

  onChangeOTP(text){
      this.setState({OTP:text})
  }

  onConfirm(){

  }

  render() {
      const {OTP} = this.state
    return (
      <RenderConfirmOTP
          OTP = {OTP}
          onChangeOTP = {(text) =>this.onChangeOTP(text)}
          onConfirm = {() => this.onConfirm()}
      />
    );
  }
}
