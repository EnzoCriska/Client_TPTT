import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { RenderInfo } from './render';

export default class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <RenderInfo/>
    );
  }
}
