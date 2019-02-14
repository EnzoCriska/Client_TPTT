import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { RenderListRoom } from './render';

export default class ListRoomFriends extends Component {
  constructor(props) {
    super(props);
    this.state = {
        listRoom: [{
            roomName:'wertgferg',
            roomID: '343DE565',
            security: true,
            time: '12/04/2019:12h53',
            currentQuantity: 100
        },
        {
            roomName:'wqfefvnjtgy',
            roomID: '343DE565',
            security: true,
            time: '12/04/2019:12h53',
            currentQuantity: 100
        },
        {
            roomName:'erwgytreh',
            roomID: '343DE565',
            security: true,
            time: '12/04/2019:12h53',
            currentQuantity: 100
        },
        {
            roomName:'fgerghh',
            roomID: '343DE565',
            security: false,
            time: '12/04/2019:12h53',
            currentQuantity: 100
        },
        {
            roomName:'hrt',
            roomID: '343DE565',
            security: false,
            time: '12/04/2019:12h53',
            currentQuantity: 100
        },
        {
            roomName:'iukrgt',
            roomID: '343DE565',
            security: false,
            time: '12/04/2019:12h53',
            currentQuantity: 100
        }
    ],
        
        joinRoomVisible : false,
        createRoomVisible : false,
        joinModalValuePassword: '',
        createModalValueRoomName: '',
        createModalValuePassword: ''
    };
  }

  componentDidMount = () => {
    // Call API get List Room
    // Set State List Room
  };
  

  showModalJoinRoom() {
      this.setState({joinRoomVisible:true})
  }

  hideModalJoinRoom() {
      this.setState({joinRoomVisible:false})
  }

  onChangePasswordModalJoin(text){
      this.setState({
        joinModalValuePassword:text
      })
  }

  joinToRoom(){
      console.log(this.state.joinModalValuePassword)
      this.hideModalJoinRoom()
  }

  showModalCreateRoom(){
      this.setState({createRoomVisible:true})
  }

  hideModalCreateRoom(){
    this.setState({createRoomVisible:false})
  }

  onChangeRoomNameModalCreate(text){
      this.setState({createModalValueRoomName:text})
  }

  onChangePasswordModalCreate(text){
      this.setState({createModalValuePassword:text})
  }

  createRoom(){
      console.log("Create Room " + this.state.createModalValueRoomName)
      this.hideModalCreateRoom()
    //   Call Api Create new Room
      var listTpm = this.state.listRoom
  }


  render() {
      const {listRoom, joinRoomVisible, createRoomVisible, joinModalValuePassword, createModalValueRoomName, createModalValuePassword} = this.state
    return (
      <RenderListRoom
          listRoom = {listRoom}
          goBack = {() => this.props.navigation.goBack()}

          joinRoomVisible = {joinRoomVisible}
          showModalJoinRoom = {() => this.showModalJoinRoom()}
          hideModalJoinRoom = {() => this.hideModalJoinRoom()}
          onChangePasswordModalJoin = {(text) => this.onChangePasswordModalJoin(text)}
          joinModalValuePassword = {joinModalValuePassword}
          joinToRoom = {() => this.joinToRoom()}

          createRoomVisible = {createRoomVisible}
          showModalCreateRoom = {() => this.showModalCreateRoom()}
          hideModalCreateRoom = {() => this.hideModalCreateRoom()}
          createModalValueRoomName = {createModalValueRoomName}
          createModalValuePassword = {createModalValuePassword}
          onChangeRoomNameModalCreate = {(text) => this.onChangeRoomNameModalCreate(text)}
          onChangePasswordModalCreate = {(text) => this.onChangePasswordModalCreate(text)}
          createRoom = {() => this.createRoom()}
        
      />
    );
  }
}
