import React from 'react'
import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    container:{
        flex:1
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
       marginTop:10,
       alignItems:'center',
       width:'100%',
       flex:1
   },
   countDownBG:{
       width:'80%',
       height:200,
       justifyContent: 'center',
       alignItems: 'center',
   },
   topCountDown:{
       flex:1,
       width:'100%',
       alignItems:'center',
       justifyContent: 'center',
   },
   topCountDownTitle:{
       color:'#fff',
       fontSize:20,
       marginHorizontal:5
   },
   bottomCountDown:{
       flex:2,
       width:"90%",
       justifyContent: 'center',
       flexDirection:'row',
   },
   boxCountDown:{
       // width:60,
       flex:1,
       height:60,  
       borderRadius:5,
       backgroundColor: '#01081E',
       borderColor:'#3A535B',
       borderWidth:1,
       margin:5,
       justifyContent: 'center',
       alignItems: 'center',
   },
   timeCountDown:{
       fontFamily:"Quartz",
       color:'red',
       fontSize:30
   },
   touchableJoinBtn:{
       width:"60%",
       marginTop:-55,
   },
   joinBtn:{
       width:'100%',
       height:80,
       justifyContent: 'center',
       alignItems: 'center',
       flexDirection:'row'
   },
   Game:{
       width:'100%',
       flex:1,
       alignItems: 'center',
   },
   playRoomBtn:{
       width:"80%",
   },
   iconSelected:{
       width:30,
       height:30
   }

})