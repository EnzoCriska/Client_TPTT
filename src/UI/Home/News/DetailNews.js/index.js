import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { RenderDetailNews } from './render';

export default class DetailNews extends Component {
  constructor(props) {
    super(props);
    var url = this.props.navigation.getParam('urlImage')
    this.state = {
      urlImage: url,
      titleNews:'Chương trình phần thưởng tháng 10',
      contentNews: 'Aquaman: Đế vương Atlantis là phim điện ảnh siêu anh hùng của Mỹ dựa trên nhân vật Aquaman của DC Comics. Đây là phần phim thứ sáu thuộc DC Extended Universe'
    };
  }

  componentDidMount(){
    
  }

  onToProfile(){
      this.props.navigation.navigate('Profile')
  }

  onGoBack(){
    this.props.navigation.goBack()
  }

  render() {
      const { urlImage, titleNews, contentNews} = this.state
    return (
      <RenderDetailNews
        urlImage = {urlImage}
        titleNews = {titleNews}
        contentNews = {contentNews}
        onToProfile = {()=> this.onToProfile()}
        onGoBack = {() => this.onGoBack()}
      />
    );
  }
}
