import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity
} from "react-native";
import { pointY, pointX } from "../Constanst";

import {connect} from 'react-redux';
import {loginDefault} from '../../actions/loginAction';


const HeaderComponent = ({
    onGoProfile  = () => {}
}) => {
  return (
      <ImageBackground
        source={require("../../../Media/Home/HeaderBG.png")}
        style={styles.headerContainer}
      >
        <View style={styles.leftHeader}>
          <TouchableOpacity onPress={onGoProfile}>
            <Image
              source={{
                uri:
                  "https://2sao.vietnamnetjsc.vn/images/2017/10/03/10/09/huyen-trang-11.jpg"
              }}
              style={styles.headerAvatar}
            />
          </TouchableOpacity>

          <Text style={styles.textHeader}>Phạm Huyền Trang</Text>
        </View>

        <View style={styles.scoreContainer}>
          <Image
            source={require("../../../Media/Home/heart.png")}
            style={styles.scoreIcon}
          />
          <Text style={styles.textHeader}>100.000</Text>
        </View>
      </ImageBackground>
  );
};

const styles = StyleSheet.create({
    headerContainer:{
        width:'100%',
        height:47.75 * pointY,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent:'space-between',
        marginTop: 25,
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
       margin:3
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
       marginRight:10
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