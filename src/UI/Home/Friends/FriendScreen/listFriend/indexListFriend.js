import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { RenderListFriend } from './renderListFriend';
import { connect } from 'react-redux';
import { listFriendActions } from '../../../../../actions/loadListFriendAction';

class ListFriend extends Component {
  constructor(props) {
    super(props);
    this.state = {
        listFriend : []
    };
  }

  componentDidMount(){
    this.props.listFriendActions(this, 'refresh', this.props.data.token, 0, 10)
    var list = [
            {
                avatar: 'https://images.kienthuc.net.vn/zoomh/500/uploaded/manhtu/2017_06_12/3/gai-xinh-dong-nai-khien-dan-mang-chao-dao.jpg',
                userName: "Pham Thu Uyen",
                online: true,
                selected: false
              },
              {
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8F7mu07B5sfnngeTzDbE6zM6JcIAbidfK5bKXpt_1glLDQv3l',
                userName: "Tran Thanh Tra",
                online: true,
                selected: false
              },
              {
                avatar: 'https://danongonline.com.vn/wp-content/uploads/2018/02/anh-girl-xinh-9.jpg',
                userName: "Ha Huyen Nhi",
                online: true,
                selected: false
              },
              {
                avatar: 'http://a9.vietbao.vn/images/vn999/22/2017/12/20171201-xu-huong-toc-nu-dep-cho-nam-2018-1.jpg',
                userName: "Ha Thanh Thanh",
                online: false,
                selected: false
              },
              {
                avatar: 'http://s1.img.yan.vn/YanNews/2167221/201606/20160627-052832-6166_573607999459145_4758278395648320203_n_600x900.jpg',
                userName: "Pham Thu Uyen",
                online: true,
                selected: false
              },
              {
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSKOL3GdAHWK-lqIb1UE_u37WrFMS04ylCAM-CeLQ80W4HlvUo',
                userName: "Pham Thu Uyen",
                online: false,
                selected: false
              },
    ]
    this.setState({listFriend:list})
    
}

selectItemToDelete(item){
    var tmpList = this.state.listFriend
    for (var i = 0; i < tmpList.length; i++){
        if (tmpList[i] === item){
            console.log("delete" + tmpList.length)
            tmpList.splice(i, 1)
            console.log(tmpList.length)
            break;
        }
    }

    this.setState({listFriend:tmpList})
}

onLoadMore(){
  // console.log("loadmore")
  // this.props.listFriendActions(this, 'loadMore', this.props.data.token, this.props.data.user_info.length-1, 10)
}

  render() {
      // const {listFriend} = this.state
      const {list_friend, isLoading} = this.props.data
      // console.log(this.props.data)
    return (
      <RenderListFriend
            isLoading = {isLoading}
            parentState = {this.state}
            listFriend = {list_friend}
            selectItemToDelete = {(item) => this.selectItemToDelete(item)}
            onLoadMore = {() => this.onLoadMore()}
      />
    );
  }
}

const mapStateToProps = (state) =>{
  return {
    data: state.loginReducer
  }
}

export default connect(mapStateToProps, {listFriendActions})(ListFriend)