import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { RenderInviteJoinRoom } from './render';

const list  = [
  {
    avatar: 'https://images.kienthuc.net.vn/zoomh/500/uploaded/manhtu/2017_06_12/3/gai-xinh-dong-nai-khien-dan-mang-chao-dao.jpg',
    userName: "Pham Thu Uyen",
    status: 'online',
    selected: false
  },
  {
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8F7mu07B5sfnngeTzDbE6zM6JcIAbidfK5bKXpt_1glLDQv3l',
    userName: "Tran Thanh Tra",
    status: 'online',
    selected: false
  },
  {
    avatar: 'https://danongonline.com.vn/wp-content/uploads/2018/02/anh-girl-xinh-9.jpg',
    userName: "Ha Huyen Nhi",
    status: 'online',
    selected: false
  },
  {
    avatar: 'http://a9.vietbao.vn/images/vn999/22/2017/12/20171201-xu-huong-toc-nu-dep-cho-nam-2018-1.jpg',
    userName: "Ha Thanh Thanh",
    status: 'online',
    selected: false
  },
  {
    avatar: 'http://s1.img.yan.vn/YanNews/2167221/201606/20160627-052832-6166_573607999459145_4758278395648320203_n_600x900.jpg',
    userName: "Pham Thu Uyen",
    status: 'online',
    selected: false
  },
  {
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSKOL3GdAHWK-lqIb1UE_u37WrFMS04ylCAM-CeLQ80W4HlvUo',
    userName: "Pham Thu Uyen",
    status: 'online',
    selected: false
  },
]

export default class InviteJoinRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listFriend: []
    };
  }

  componentDidMount(){
    this.setState({
      listFriend : list
    })
  }
 selectItemToInvite(item){
  //  Call API send invite item
      var tempList = this.state.listFriend
      for (var i = 0 ; i < tempList.length; i++){
        if (tempList[i].avatar === item.avatar){           
          tempList[i].selected  = true
          break;
        }
      }
      this.setState({
        listFriend: tempList
      })
  }

  goBack(){
    this.props.navigation.goBack()
  }

  render() {
    const {listFriend} = this.state
    return (
      <RenderInviteJoinRoom
          parrentState = {this.state}
          listFriend = {listFriend}
          selectItemToInvite = {(item) => this.selectItemToInvite(item)}
          goBack = {() => this.goBack()}
      />
    );
  }
}
