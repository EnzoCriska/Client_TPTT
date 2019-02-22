import React, { Component } from 'react';
import { View, SafeAreaView } from 'react-native';
import { RenderListRoom } from './render';
import { areaStyles } from '../../../../Util/Component Util/SafeAreaStyle';

export default class ListRoomFriends extends Component {
  constructor(props) {
    super(props);
    this.state = {
        listRoom: [
            {
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
        
        isSelected: {},
        joinRoomVisible : false,
        createRoomVisible : false,
        TimePickerVisible : false,

        joinModalValuePassword: '',
        createModalValueRoomName: '',
        createModalValuePassword: '',

        timeStartValue : 'Thời gian bắt đầu'
    };
  }

  componentDidMount = () => {
    // Call API get List Room
    // Set State List Room
  };
  

  showModalJoinRoom(item) {
      this.setState({joinRoomVisible:true,
                    isSelected: item
                    })
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
    //     // Call API Join Room
    this.goToRoom(this.state.isSelected)
      
  }

  goToRoom(item){
    this.props.navigation.navigate('WaitFriendRoom', 
                    {   isRoot: false,
                        infoRoom: item
                        })
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

      this.props.navigation.navigate('WaitFriendRoom', 
                    {   isRoot: true,
                        })
  }

  _showTimePicker(){
      this.setState({TimePickerVisible:true})
  }

  _hideDateTimePicker(){
      console.log("cancle")
      this.setState({TimePickerVisible:false})
  }

  _handleDatePicked(time){
      console.log(time)
      var timeStart = time.getHours() + 'h' + time.getMinutes()
      console.log(">>>>>>>>>>" + timeStart)

      this.setState({timeStartValue: timeStart})
      this._hideDateTimePicker()
  }

  onGoProfile(){
      this.props.navigation.navigate('Profile', {router:this.props.navigation})
  }

  render() {
      const {
          listRoom, 
          joinRoomVisible, 
          createRoomVisible, 
          joinModalValuePassword, 
          createModalValueRoomName, 
          createModalValuePassword,
          TimePickerVisible,
          timeStartValue
        } = this.state
    return (

        <SafeAreaView style={areaStyles.area}>
      <RenderListRoom
          listRoom = {listRoom}
          goBack = {() => this.props.navigation.goBack()}
          onGoProfile = {() => this.onGoProfile()}
          joinRoomVisible = {joinRoomVisible}
          showModalJoinRoom = {(item) => this.showModalJoinRoom(item)}
          hideModalJoinRoom = {() => this.hideModalJoinRoom()}
          onChangePasswordModalJoin = {(text) => this.onChangePasswordModalJoin(text)}
          joinModalValuePassword = {joinModalValuePassword}
          joinToRoom = {() => this.joinToRoom()}
          goToRoom = {(item) => this.goToRoom(item)}
        
          createRoomVisible = {createRoomVisible}
          showModalCreateRoom = {() => this.showModalCreateRoom()}
          hideModalCreateRoom = {() => this.hideModalCreateRoom()}
          createModalValueRoomName = {createModalValueRoomName}
          createModalValuePassword = {createModalValuePassword}
          onChangeRoomNameModalCreate = {(text) => this.onChangeRoomNameModalCreate(text)}
          onChangePasswordModalCreate = {(text) => this.onChangePasswordModalCreate(text)}

          timeStartValue = {timeStartValue}

          TimePickerVisible = {TimePickerVisible}
          _showTimePicker = {() => this._showTimePicker()}
          _hideDateTimePicker = {() => this._hideDateTimePicker()}
          _handleDatePicked = {(time) => this._handleDatePicked(time)}

          createRoom = {() => this.createRoom()}
        
      />
      </SafeAreaView>
    );
  }
}
