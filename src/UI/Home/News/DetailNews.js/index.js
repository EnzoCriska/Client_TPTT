import React, { Component } from 'react';
import { View, SafeAreaView } from 'react-native';
import { RenderDetailNews } from './render';
import { areaStyles } from '../../../../Util/Component Util/SafeAreaStyle';

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

  onGoProfile(){
      this.props.navigation.navigate('__Profile', {router:this.props.navigation})
  }

  onGoBack(){
    this.props.navigation.goBack()
  }

  render() {
      const { urlImage, titleNews, contentNews} = this.state
    return (
      <SafeAreaView style={areaStyles.area}>
      <RenderDetailNews
        urlImage = {urlImage}
        titleNews = {titleNews}
        contentNews = {contentNews}
        onGoProfile = {()=> this.onGoProfile()}
        onGoBack = {() => this.onGoBack()}
      />
      </SafeAreaView>
    );
  }
}
