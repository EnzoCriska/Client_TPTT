import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import { RenderPlayGame } from './render';

import answer from '../../../../../Media/Game/anwes.png'
import selected from '../../../../../Media/Game/selectedAnwes.png'
import { areaStyles } from '../../../../Util/Component Util/SafeAreaStyle';

export default class GamePlay extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      GameOverModalVisible : false,
      sourceA : answer,
      sourceB : answer,
      sourceC : answer,
      question :'Nỏ thần An Dương Vương được làm từ phần nào của con rùa?',
      answerA :'Mai Rùa',
      answerB : 'Móng rùa'
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
    // Send answer to server
    this.setState({
      sourceA: answer,
      sourceB:answer,
      sourceC:answer,
      question : 'CLB xuất sắc nhất thế kỷ XX',
      answerA : 'Barcelona',
      answerB: 'RealMadrid'
    })
    this._ref.animate(100, 15000);
  }

  onPressC(){
    this.setState({
      sourceA: answer,
      sourceB:answer,
      sourceC:selected
    })

    this.showGameOverModal()
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

  onGoProfile() {
    this.props.navigation.navigate('Profile', {router:this.props.navigation})
  }


  render() {
    const {sourceA, sourceB, sourceC, GameOverModalVisible, question, answerA, answerB} = this.state
    return (
      <SafeAreaView style={areaStyles.area}>
      <RenderPlayGame
        onGoProfile = {() => this.onGoProfile()}

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

        question = {question}
        answerA = {answerA}
        answerB = {answerB}
      />

      </SafeAreaView>
    );
  }
}
