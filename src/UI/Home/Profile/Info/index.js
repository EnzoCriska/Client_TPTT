import React, { Component } from 'react';
import { View, SafeAreaView } from 'react-native';
import { RenderInfo } from './render';
import { areaStyles } from '../../../../Util/Component Util/SafeAreaStyle';
var GameRouter 
    
export default class Info extends Component {
  constructor(props) {
    super(props);
    GameRouter = this.props.navigation.getParam('router')
    this.state = {
    };
  }

  onGoBack(){
    console.log("goBack")
    GameRouter.pop()
  }

  onGoEdit(){
    console.log("Edit")
  }

  onGoHistoryGame(){
    this.props.navigation.navigate('HistoryGame')
    
  }

  onGoHistoryChangeGift(){
    this.props.navigation.navigate('HistoryChangeGift')
  }

  componentDidMount(){
    
  }

  render() {
    return (
      <SafeAreaView style={areaStyles.area}>
      <RenderInfo
          onGoBack = {()=> this.onGoBack()}
          onGoEdit = {() => this.onGoEdit()}
          onGoHistoryGame = {() => this.onGoHistoryGame()}
          onGoHistoryChangeGift = {() => this.onGoHistoryChangeGift()}
      />
      </SafeAreaView>
    );
  }
}
