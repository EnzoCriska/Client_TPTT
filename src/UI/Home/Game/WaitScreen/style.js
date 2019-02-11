import React from 'react'
import { StyleSheet } from 'react-native';

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
   bottomHeaderContainer:{
        width:'100%',
        flexDirection:'row',
        marginBottom:5
   },
    iconHeader:{
        width:50,
        height:50,
        flex:1
    },
    midHeaderTitle: {
        flex:5,
        justifyContent:'center',
        alignItems:'center'
    },
    titleHeader:{
        color:'#fff',
        fontSize:16
    },
    quantityPlayerContainer:{
        flexDirection:'row'
    },
    quantityPlayerIcon:{
        width:30, 
        height:30,
        marginHorizontal: 10,
    },
    quantityPlayerValue:{
        color:"#fff",
        fontSize:20,
        fontWeight: 'bold'
    },
    nextGameTimeContainer:{
        width:'80%',
        height:'30%',
        justifyContent: 'center',
        alignItems:'center',
    },
    nextTimeTitle:{
        color:'#fff',
        fontSize:18,
        marginVertical: 10,
    },
    bottomCountDown:{
        width:"90%",
        justifyContent: 'center',
        flexDirection:'row',
    },
    boxCountDown:{
        // width:60,
        flex:1,
        height:50,  
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
    chatBackground:{
        flex:1,
        marginBottom: 10,
        width:'90%',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 3,
    },
    inputChatBG:{
        width:'98%',
        height:50,
        marginBottom:'0.5%',
        flexDirection:'row',
        alignItems: 'center',
    },
    iconChat:{
        width:40, 
        height:40
    },
    textInputChat:{
        flex:1,
        height: 'auto',
        color:'#fff'
    },
    sendIcon:{
        marginHorizontal:15
    }


})