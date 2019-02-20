import React from 'react'
import { StyleSheet } from 'react-native';
import { pointX, pointY } from '../../../../Util/Constanst';

export const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    headerContainer:{
        width:'100%',
        height:80,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent:'space-between'
   },
   leftHeader:{
       flexDirection:'row',
       alignItems:'center'
   },
   headerAvatar:{
       width:60,
       height:60,
       borderRadius: 30,
       marginLeft: 10,
       justifyContent: 'flex-end',
       alignItems:'flex-end'
   },
   imgBGAvatar:{
       borderRadius:30,
       borderColor:'#fff',
       borderWidth: 0.5
   },
   textHeader:{
       fontFamily: 'Roboto',
       color:'#fff',
       fontSize: 16,
       margin:5
   },
   rankIcon:{
       width:30,
       height:30,
       marginRight: -10,
       marginBottom: -5,
   },
   scoreContainer:{
       height:30,
       backgroundColor: '#1A2146',
       borderColor:'#020824',
       borderRadius:3,
       borderWidth:1,
       flexDirection:'row',
       alignItems:'center',
       marginRight:10
   },
   scoreIcon:{
       width:23,
       height:20,
       margin:3,
       resizeMode:'center'
   },
   bodyContainer:{
       flex:1,
       width:'100%',
       alignItems: 'center',
       marginTop: 10,
   },
   headerRoom:{
       flexDirection:'row',
       width:'100%',
       justifyContent: 'space-between',
       alignItems:'center',
       padding: 10,
   },
   headerLeftContainer:{
        flex:1,
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems:'center'
   },
   headerBackIcon:{
       width: 10.36 * pointX,
       height: 16.08 * pointY
   },
   headerRoomTitle:{
       color:'#fff',
       fontSize:16
   },
   headerRoomMidContainer:{
       flex:1,
       justifyContent: 'center',
       flexDirection:'row',
       alignItems:'center'
   },
   headerMidIcon:{
       width:15.97 * pointX,
       height:13.44 * pointY
   },
   headerRoomRightContainer:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center'
   },
   inviteBtn:{
       backgroundColor:'#02B514',
       borderRadius:5,
       width: 108 * pointX,
       height: 39.15 * pointY,
       justifyContent: 'center',
       alignItems: 'center',
   },
   countDownContainer:{
       flexDirection:'row',
       paddingVertical: 20,
   },
   countDownItemBG:{
        width: 38 * pointX,
        height: 38 * pointY,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 4 * pointX,
   },
   midCountdownIcon:{
        width: 5 * pointX,
        height: 32 * pointY
   },
   timeCountDown:{
        fontFamily:"Quartz",
        color:'red',
        fontSize:28,
        marginBottom:5
   },
   flatListContainer:{
       flex:1,
       width:347 * pointX,
       marginHorizontal: 14 * pointX,
   },
   showStartBtn:{
       marginTop:10,
       width:295.47 * pointX,
       height:54.68 * pointY,
       justifyContent: 'center',
       marginBottom:5
    //    alignSelf: 'center',
   },
   hideStartBtn:{
       width:0,
       height:0
   },
   textStartBtn:{
       color:'#fff',
       fontSize:23,
       fontWeight:'bold',
       alignSelf: 'center',
   },
   itemUser:{
       width : 347 * pointX,
       height: 55 * pointY,
       flexDirection:'row',
       marginBottom:5
   },
   sttContainer:{
       flex:1,
       justifyContent: 'center',
       alignItems: 'center',
   },
   avatarItemContainer:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
   },
   ItemInfoContainer:{
       flex:5,
       marginLeft:10,
       justifyContent: 'center',
   },
   avatarItem:{
       width:38.68 * pointX,
       height:38.68 * pointY,
       borderRadius: 38.68 * pointX/2
   },
   index:{
       color: '#FFA927',
       fontSize: 17
   },
   textUserName:{
       fontSize:16,
       color:'#fff'
   },
   textLevel:{
       fontSize:10,
       color:'grey'
   },
   imageItemUserStyle:{
       borderRadius:5
   },
   


})