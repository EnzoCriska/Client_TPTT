import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Platform
} from "react-native";
import { pointY, pointX } from "../Constanst";

import {connect} from 'react-redux';
import {loginDefault} from '../../actions/loginAction';

import * as IMG from '../../Util/Common/Image';
import { getStatusLogin } from "../UtilFunction/asyncStorage";


class HeaderComponent extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    getStatusLogin().then(status => console.log(JSON.parse(status)))
  }
  

  onGoProfile = this.props.onGoProfile
  render(){
    const {username, avatar, point} = this.props.data.data.user_info

    let img = avatar == null ? 
        <Image
            source= {IMG.DEFAULT_AVATAR_IMG}
            style={styles.headerAvatar}
        />
    : 
        <Image
            source= {{uri:avatar}}
            style={styles.headerAvatar}
        />
      
    return (
      <ImageBackground
        source={IMG.HEADER_PROFILE_BACKGROUND_IMG}
        style={styles.headerContainer}
      >
        <View style={styles.leftHeader}>
          <TouchableOpacity onPress={this.onGoProfile}>
              {img}
          </TouchableOpacity>

          <Text style={styles.textHeader}>{username}</Text>
        </View>

        <View style={styles.scoreContainer}>
          <Image
            source={IMG.POINT_ICON_HEADER_IMG}
            style={styles.scoreIcon}
          />
          <Text style={styles.textHeader}>{point}</Text>
        </View>
      </ImageBackground>
  );
};
}
const styles = StyleSheet.create({
    headerContainer:{
        width:'100%',
        height:47.75 * pointY,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent:'space-between',
        marginTop: Platform.OS === 'android' ? 25 : 0,
   },
   leftHeader:{
       flexDirection:'row',
       alignItems:'center'
   },
   headerAvatar:{
       width:38.93,
       height:38.93,
       borderRadius: 19.46,
       marginLeft: 10,
       marginRight:10,
       justifyContent: 'flex-end',
       alignItems:'flex-end'
   },
   textHeader:{
       fontFamily: 'Roboto',
       color:'#fff',
       fontSize: 14,
       margin:3,
       textAlign:'right'
   },

   scoreContainer:{
       height:20 * pointY,
       width: 78 * pointX,
       backgroundColor: '#1A2146',
       borderColor:'#020824',
       borderRadius:3,
       borderWidth:1,
       flexDirection:'row',
       alignItems:'center',
       marginRight:10,
       justifyContent:'space-between'
   },
   scoreIcon:{
       width:13.61 * pointX,
       height:13 * pointX,
       margin:3,
   },
});

const mapStateToProps = (state) => {
  return {
      data: state.loginReducer
  }
};

export default connect (mapStateToProps, {loginDefault})(HeaderComponent)