import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { RenderUpdatePhoneNumber } from './render';

export default class UpdatePhoneNumber extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <RenderUpdatePhoneNumber/>
    );
  }
}
