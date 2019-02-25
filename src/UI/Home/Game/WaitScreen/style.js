import React from 'react'
import { StyleSheet } from 'react-native';
import { pointX, pointY } from '../../../../Util/Constanst';

export const styles = StyleSheet.create({
    container:{
        flex:1,
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
        width: 40 * pointX,
        height: 40 * pointY,  
        margin:5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    midBoxCountDown:{
         width: 6 * pointX,
         height: 29 * pointY,
         marginBottom:10
    },
    timeCountDown:{
        fontFamily:"Quartz",
        color:'red',
        fontSize:28,
        marginBottom:5
    },
    chatBackground:{
        flex:1,
        marginBottom: 10,
        width:'90%',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 3,
    },
    itemContainerChat:{
        flexDirection:'row', 
        width:'100%', 
        margin:5,
    },
    userNameChat:{
        marginHorizontal:5, 
        color:'#FF9626'
    },
    contentChat:{
        color:'#fff', 
        flex:1, 
        marginRight:10
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