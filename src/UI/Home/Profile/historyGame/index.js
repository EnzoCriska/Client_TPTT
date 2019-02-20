import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { RenderHistoryGame } from './render';

export default class HistoryGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listHistoryGame: []
    };
  }

  componentDidMount = () => {
    var list = [
      {
        gameID: '21345HD3',
        time: '28/01/2019 10h30',
        achievements: 5,
        accumulation: 14000
      },
      {
        gameID: '768FR34',
        time: '28/01/2019 10h30',
        achievements: 5,
        accumulation: 14000
      },
      {
        gameID: '1234DH45',
        time: '28/01/2019 10h30',
        achievements: 5,
        accumulation: 14000
      },
      {
        gameID: '90AH2134',
        time: '28/01/2019 10h30',
        achievements: 5,
        accumulation: 14000
      },
      {
        gameID: '1240IJ67',
        time: '28/01/2019 10h30',
        achievements: 5,
        accumulation: 14000
      },
      {
        gameID: '096KK856',
        time: '28/01/2019 10h30',
        achievements: 5,
        accumulation: 14000
      },
      {
        gameID: '1244DH45',
        time: '28/01/2019 10h30',
        achievements: 5,
        accumulation: 14000
      },
      {
        gameID: '91AH2134',
        time: '28/01/2019 10h30',
        achievements: 5,
        accumulation: 14000
      },
      {
        gameID: '432AS45',
        time: '28/01/2019 10h30',
        achievements: 5,
        accumulation: 14000
      },
      {
        gameID: '68GH435D',
        time: '28/01/2019 10h30',
        achievements: 5,
        accumulation: 14000
      },
    ]
    this.setState({listHistoryGame:list})


  };
  

  onGoBack(){
      this.props.navigation.goBack()
  }

  render() {
    const {listHistoryGame} = this.state
    return (
      <RenderHistoryGame
          onGoBack = {() => this.onGoBack()}
          listHistoryGame = {listHistoryGame}
      />
    );
  }
}
