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
   headerTitleContainer:{
        width:"100%",
        marginVertical:20,
        // padding: 10,
        justifyContent: 'center',
   },
   goBackIcon:{
        width: 10.36 * pointX,
        height: 16.08 * pointY,
        marginLeft: 10
   },
   titleContainer:{
        width:'100%',
        height:'100%',
        position: 'absolute',
        justifyContent: 'center',
        alignItems:'center',
   },
   titleStyle:{
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily:'Roboto'
   },
   bodyContainer:{
       flex:1,
       width:'100%',
       alignItems: 'center',
       marginTop: 10,
       
   },
   itemFriendContainer:{
       width:'100%',
       alignItems: 'center',
       marginBottom: 5,
       
   },
   itemFriendBG:{
       width: 347 * pointX,
       height: 55 * pointY,
       flexDirection:'row'
   },
   leftItemContainer:{
       flex:1,
       justifyContent: 'center',
       alignItems: 'center',
       flexDirection:'row'
   },
   midItemContainer:{
       flex:2,
       justifyContent: 'center',
   },
   rightItemContainer:{
       flex:1.5,
       justifyContent: 'center',
       alignItems: 'center',
   },
   itemAvatar:{
       width:40,
       height: 40,
       borderRadius: 20
   },
   childLeftItemContainer:{
        flexDirection:'row',
        alignItems: 'flex-end',
   },
   onLineStatus:{
        width: 10 * pointX,
        height: 10 * pointY,
        borderRadius:5,
        borderColor:'#fff',
        borderWidth:1,
        marginLeft: -10,
        backgroundColor: '#02B514',
   },
   offLineStatus:{
        width: 10 * pointX,
        height: 10 * pointY,
        borderRadius:5,
        borderColor:'#fff',
        borderWidth:1,
        marginLeft: -10,
        backgroundColor: 'grey'
   },
   itemTextUserName:{
       color:'#fff',
       fontSize: 14,
       fontFamily:'Roboto'
   },
   inviteBtnContainer:{
       width: 88 * pointX,
       height: 34.15 * pointY,
       justifyContent: 'center',
       alignItems: 'center',
   },
   hideBtn: {
       width: 0,
       height: 0
   }


})