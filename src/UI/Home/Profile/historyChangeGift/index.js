import React, { Component } from 'react';
import { View, SafeAreaView } from 'react-native';
import { RenderHistoryChangeGift } from './render';
import { areaStyles } from '../../../../Util/SafeAreaStyle';

export default class HistoryChangeGift extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listHistoryChangeGift: []
    };
  }

  componentDidMount = () => {
    var list = [
        {
          dealID: '21345HD3',
          time: '28/01/2019 10h30',
          changeScore: 14000,
          giftChanged: 'Card 10.000 đ'
        },
        {
            dealID: '768FR34',
          time: '28/01/2019 10h30',
          changeScore: 14000,
          giftChanged: 'Card 10.000 đ'
        },
        {
            dealID: '1234DH45',
          time: '28/01/2019 10h30',
          changeScore: 14000,
          giftChanged: 'Card 10.000 đ'
        },
        {
            dealID: '90AH2134',
          time: '28/01/2019 10h30',
          changeScore: 14000,
          giftChanged: 'Card 10.000 đ'
        },
        {
            dealID: '1240IJ67',
          time: '28/01/2019 10h30',
          changeScore: 14000,
          giftChanged: 'Card 10.000 đ'
        },
        {
            dealID: '096KK856',
          time: '28/01/2019 10h30',
          changeScore: 14000,
          giftChanged: 'Card 10.000 đ'
        },
        {
            dealID: '1244DH45',
          time: '28/01/2019 10h30',
          changeScore: 14000,
          giftChanged: 'Card 10.000 đ'
        },
        {
            dealID: '91AH2134',
          time: '28/01/2019 10h30',
          changeScore: 14000,
          giftChanged: 'Card 10.000 đ'
        },
        {
            dealID: '432AS45',
          time: '28/01/2019 10h30',
          changeScore: 14000,
          giftChanged: 'Card 10.000 đ'
        },
        {
            dealID: '68GH435D',
          time: '28/01/2019 10h30',
          changeScore: 14000,
          giftChanged: 'Card 10.000 đ'
        },
      ]
    
    this.setState({listHistoryChangeGift:list})


  };
  

  onGoBack(){
      this.props.navigation.goBack()
  }

  render() {
    const {listHistoryChangeGift} = this.state
    return (
      <SafeAreaView style={areaStyles.area}>
      <RenderHistoryChangeGift
          onGoBack = {() => this.onGoBack()}
          listHistoryChangeGift = {listHistoryChangeGift}
      />
      </SafeAreaView>
    );
  }
}
