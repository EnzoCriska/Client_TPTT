import React, { Component } from 'react';
import { View, SafeAreaView } from 'react-native';
import { RenderFriend } from './render';
import { areaStyles } from '../../../../Util/SafeAreaStyle';

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
      <SafeAreaView style={areaStyles.area}>
      <RenderFriend
        onGoProfile = {() => this.onGoProfile()}
      />
      </SafeAreaView>
    );
  }
}
