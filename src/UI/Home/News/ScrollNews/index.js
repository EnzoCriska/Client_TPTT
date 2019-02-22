import React, { Component } from 'react';
import { View, SafeAreaView } from 'react-native';
import { RenderScrollNew } from './render';
import { areaStyles } from '../../../../Util/Component Util/SafeAreaStyle';

export default class ScrollNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
        listNews : [
          {
            urlImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWJbFvJgBgnpoZUjccW7e6EqTXh6dm2ZLtHRZNJLtMpO3FepGJ',
            description: 'Aquaman: Đế vương Atlantis là phim điện ảnh siêu anh hùng',
            release:'20/01/2018'
          },
          {
            urlImage:'http://cdn.nhanh.vn/cdn/store/5407/artCT/30049/600x537.png',
            description: 'Aquaman: Đế vương Atlantis là phim điện ảnh siêu anh hùng',
            release:'20/01/2018'
          },
          {
            urlImage:'https://www.canvietnhat.com/images/upload/mung-xuan-2018-sale-off-10-_1513693116.jpg',
            description: 'Aquaman: Đế vương Atlantis là phim điện ảnh siêu anh hùng',
            release:'20/01/2018'
          },
          {
            urlImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpNzIu6ii3Z7UZw3EujiCUkZlpFYkDnG6CBcLWv__8pMcLvGJ9',
            description: 'Aquaman: Đế vương Atlantis là phim điện ảnh siêu anh hùng',
            release:'20/01/2018'
          },
          {
            urlImage:'https://vn-test-11.slatic.net/p/19dd81b857b620c0cdb565a7d52cbb98.jpg',
            description: 'Aquaman: Đế vương Atlantis là phim điện ảnh siêu anh hùng',
            release:'20/01/2018'
          },
          {
            urlImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJS2OgbkM1rIodyRGb4CYhsna68_1gMf0lJCNDikfIeQUIS3hQdA',
            description: 'Aquaman: Đế vương Atlantis là phim điện ảnh siêu anh hùng',
            release:'20/01/2018'
          },
            
        ]
    };
  }

  onGoProfile(){
    console.log("Profile")
    this.props.navigation.navigate('__Profile', {router:this.props.navigation})
  }

  onToDetailNews(item){
    console.log("Detail")
    this.props.navigation.navigate('Detail', item)
  }

  render() {
    const {listNews} = this.state
    return (
      <SafeAreaView style={areaStyles.area}>
      <RenderScrollNew
          listNews = {listNews}
          onGoProfile = {()=> {this.onGoProfile()}}
          onToDetailNews = {(item) => {this.onToDetailNews(item)}}
      />
      </SafeAreaView>
    );
  }
}

