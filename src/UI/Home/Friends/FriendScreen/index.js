import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { RenderFriend } from './render';

export default class Friends extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  onGoProfile(){
    this.props.navigation.navigate('_Profile' , {router: this.props.navigation})
  }

  render() {
    return (
      <RenderFriend
        onGoProfile = {() => this.onGoProfile()}
      />
    );
  }
}
