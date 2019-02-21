import React, { Component } from 'react';
import { View, SafeAreaView } from 'react-native';
import { RenderConfirmOTP } from './render';
import { areaStyles } from '../../../Util/SafeAreaStyle';

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
      <SafeAreaView style={areaStyles.area}>
      <RenderConfirmOTP
          OTP = {OTP}
          onChangeOTP = {(text) =>this.onChangeOTP(text)}
          onConfirm = {() => this.onConfirm()}
      />
      </SafeAreaView>
    );
  }
}
