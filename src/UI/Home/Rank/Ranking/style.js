import React from 'react';
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
       marginTop: 20,
   },
   topThree:{
       flexDirection:'row',
       height:'35%',
       width:'80%',
       marginVertical: 20,
   },
   threeLevel:{
       flex:1,
       justifyContent: 'flex-end',
       alignItems:'center'
   },
   crownStyle:{
       width:50, 
       height:40,
       marginBottom:-5
    },
   avatarTopContainer:{
       marginBottom:-10,
       zIndex:2, 
       backgroundColor:'#fff', 
       borderRadius:40, 
       padding:2
    },
   silverBottom:{
       height:'35%', 
       width:'100%',
       backgroundColor:'#EFEFEF',
       zIndex:1, 
       justifyContent:'flex-end', 
       alignItems:'center'
    },
    levelTextTitle:{
        fontSize:20,
        fontWeight:'bold',
        color:'black'
    },
    topUserName:{
        fontSize:16,
        color:'black'
    },
    goldenBottom:{
        height:'45%',
        width:'100%',
        backgroundColor:'#FFA927',
        alignItems:'center',
        justifyContent:'flex-end'
    },cropperBottom:{
        height:'30%',
        width:'100%',
        backgroundColor:'#CE7419',
        alignItems:'center',
        justifyContent:'flex-end'
    },
    otherTopRank:{
          flex:1,
          width:'90%'
    },
    itemRank:{
        width:'100%',
        height:60,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        marginBottom:5
    }, 
    menuDropDown:{
        width:"90%",
        alignItems:'flex-end',
        position: 'absolute',
        
    },
    buttonMenu:{
        width:80,
        height:30,
        backgroundColor:'#041650',
        borderRadius:5,
        alignItems: 'center',
        justifyContent: 'space-between',
        padding:3,
        flexDirection:'row'
    }
})  