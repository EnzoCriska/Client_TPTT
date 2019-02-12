import React, { Component } from 'react';
import { RenderPlayGame } from './render';

import answer from '../../../../../Media/Game/anwes.png'
import selected from '../../../../../Media/Game/selectedAnwes.png'

export default class GamePlay extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      sourceA : answer,
      sourceB : answer,
      sourceC : answer,
    };
    
  }
  _ref  = null

  onPressA(){
    console.log("Press A")
    this.setState({
      sourceA: selected,
      sourceB:answer,
      sourceC:answer
    })
  }

  onPressB(){
    this.setState({
      sourceA: answer,
      sourceB:selected,
      sourceC:answer
    })
  }

  onPressC(){
    this.setState({
      sourceA: answer,
      sourceB:answer,
      sourceC:selected
    })
  }
  setRefProgress(ref){
    this._ref = ref
  }

  componentDidMount(){
    this._ref.animate(100, 15000);
  }

  overTime(){
    console.log("Over Time")
    // Send Answer to server and wait KQ and Next Question
  }


  render() {
    const {sourceA, sourceB, sourceC} = this.state
    return (
      <RenderPlayGame
        sourceA = {sourceA}
        sourceB = {sourceB}
        sourceC = {sourceC}
        onPressA = {() => this.onPressA()}
        onPressB = {() => this.onPressB()}
        onPressC = {() => this.onPressC()}
        setRefProgress = {(ref) => this.setRefProgress(ref)}
        overTime = {() => this.overTime()}
      />
    );
  }
}
