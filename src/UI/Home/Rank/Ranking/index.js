import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { RenderRank } from './render';

const listRanking = [
  {
    userName:'Mina',
    avatarUrl:'https://2sao.vietnamnetjsc.vn/images/2017/02/03/10/09/1300028516969909872191338115146386630243253n--Copy-1.jpg',
    level:450
  },
  {
    userName:'Jee',
    avatarUrl:'https://topanhdepnhat.net/wp-content/uploads/2018/08/hinh-anh-girl-xinh-viet-nam-15.jpg',
    level:300
  },
  {
    userName:'Kim',
    avatarUrl:'https://i.pinimg.com/736x/0c/51/2a/0c512a0f02ee081c1dbc82a2a2a85ca8.jpg',
    level:250
  },
  {
    userName:'Chris',
    avatarUrl:'https://i.pinimg.com/236x/55/5c/ae/555caeb819981081b1c2725a7a093999.jpg',
    level:100
  },
  {
    userName:'Chris kilian',
    avatarUrl:'https://i.pinimg.com/236x/4b/fb/72/4bfb72eb5d75515915dce3f8391c5fc0.jpg',
    level:100
  },
  {
    userName:'Chris topher',
    avatarUrl:'https://i.pinimg.com/236x/6f/a9/ce/6fa9ced854c1eb53f2b5710efe2f7fc1.jpg',
    level:100
  },
  {
    userName:'Chris aler',
    avatarUrl:'https://i.pinimg.com/236x/e4/2a/4e/e42a4eb8d76d13ecab7f2bd251f6be6c.jpg',
    level:100
  },
  {
    userName:'Chris mail',
    avatarUrl:'https://i.pinimg.com/236x/36/07/d5/3607d51590bd3cd2141e1a6a3346fd3e.jpg',
    level:100
  }
]
const currentRanking = {
  userName: "niregf",
  avatarUrl:'https://2sao.vietnamnetjsc.vn/images/2017/10/03/10/09/huyen-trang-11.jpg',
  level:100,
  index:100
}
export default class RankComponent extends Component {
  _menu = null
  constructor(props) {
    super(props);
    this.state = {
      thisRank : 'Total',
      list : [],
      currentUserRank : {}
     };
  }

  componentWillMount(){
    //Call API get list Ranking
    //Call API get Current Ranking
    //Set state list Ranking, current Ranking

    this.setState({
      list :listRanking,
      currentUserRank:currentRanking
    })
  }

  showMenu(){
    this._menu.show()
  }

  hideMenu(){
    this._menu.hide()
  }

  setMenuRef = ref =>{
    this._menu = ref
  }

  showRankTotal(){
    // Call API Get total Rank
    // Set state new data
    this.setState({thisRank:'Total'})
    this.hideMenu()
  }

  showRankMonth(){
    // Call API Get total Rank
    // Set state new data
    this.setState({thisRank:'Month'})
    this.hideMenu()
  }

  showRankWeek(){
    // Call API Get total Rank
    // Set state new data
    this.setState({thisRank:'Week'})
    this.hideMenu()
  }

  showRankDay(){
    // Call API Get total Rank
    // Set state new data
    this.setState({thisRank:'Day'})
    this.hideMenu()
  }

  render() {
    const {thisRank,list, currentUserRank} = this.state
    return (
      <RenderRank
        thisRank = {thisRank}
        listRanking = {list}
        currentUserRank = {currentUserRank}
        showMenu = {() => this.showMenu()}
        setMenuRef = {(ref) => this.setMenuRef(ref)}
        showRankTotal = {() => this.showRankTotal()}
        showRankMonth = {() => this.showRankMonth()}
        showRankWeek = {() => this.showRankWeek()}
        showRankDay = {() => this.showRankDay()}
      />
    );
  }
}
