import React, { Component } from 'react';
import { RenderPlayGame } from './render';

import answer from '../../../../../Media/Game/anwes.png'
import selected from '../../../../../Media/Game/selectedAnwes.png'

export default class GamePlay extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      GameOverModalVisible : false,
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
    this.showGameOverModal()
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
    // this.showGameOverModal()
    // Send Answer to server and wait KQ and Next Question
  }

  hideGameOverModal(){
    this.setState({GameOverModalVisible:false})
  }

  showGameOverModal(){
    this.setState({GameOverModalVisible:true})
  }

  GameOver(){
    this.hideGameOverModal()
    this.props.navigation.navigate('HomeScreen')
  }


  render() {
    const {sourceA, sourceB, sourceC, GameOverModalVisible} = this.state
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

        GameOverModalVisible = {GameOverModalVisible}
        hideGameOverModal = {()=>  this.hideGameOverModal()}
        showGameOverModal = {() => this.showGameOverModal()}
        GameOver = {() => this.GameOver()}
      />
    );
  }
}
