import React, { Component } from 'react';
import { View, SafeAreaView } from 'react-native';
import { RenderUpdatePhoneNumber } from './render';
import { areaStyles } from '../../../Util/SafeAreaStyle';

export default class UpdatePhoneNumber extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: ''
    };
  }

  onChangePhone(text){
      this.setState({phone: text})
  }

  onUpdate(){

  }

  render() {
    const {phone} = this.state
    return (
      <SafeAreaView style={areaStyles.area}>
      <RenderUpdatePhoneNumber
          phone = {phone}
          onChangePhone = {(text) => this.onChangePhone(text)}
          onUpdate = {() => this.onUpdate()}
      />
      </SafeAreaView>
    );
  }
}
