import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { RenderInfo } from './render';

export default class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  onGoBack(){
    console.log("goBack")
    this.props.navigation.goBack()
  }

  onGoEdit(){
    console.log("Edit")
  }

  render() {
    return (
      <RenderInfo
          onGoBack = {()=> this.onGoBack()}
          onGoEdit = {() => this.onGoEdit()}
      />
    );
  }
}
