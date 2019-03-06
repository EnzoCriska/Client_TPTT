import React from 'react'
import { StyleSheet, Dimensions} from 'react-native';
import { pointY, pointX } from '../../../Util/Constanst';

const {width, height} = Dimensions.get('window')
export const styles = StyleSheet.create({
    container:{
        flex:1
    },
    
   slideContainer:{
        height: 126.59 * pointY,
        marginBottom:5
    },
   slideView:{
        width:'100%',
   },
   slideItemBG:{
       height: '100%', 
       width:'100%', 
       justifyContent:'flex-end'
    },
    slideItemTitle:{
        color:'#fff',
        fontSize:18,
        fontWeight:'bold',
        marginLeft:10
    },
    descriptionItemSlide:{
        color:'#fff',
        fontSize:14,
        marginLeft:10,
        marginBottom:10
    },
   bodyContainer:{
       marginTop:10,
       alignItems:'center',
       width:'100%',
       flex:1
   },
   countDownContainer:{
       flex:2, 
       width:'100%', 
    //    justifyContent:'center', 
       alignItems:'center',
       marginTop:5
    },
   countDownBG:{
       width: 310 * pointX,
       height:139 * pointY,
       justifyContent: 'center',
       alignItems: 'center',
   },
   topCountDown:{
       flex:2,
       width:'100%',
       alignItems:'center',
       justifyContent: 'center',
   },
   topCountDownTitle:{
       color:'#fff',
       fontSize:18,
       marginHorizontal:5
   },
   currentPlayerContainer:{
        flexDirection:'row',
        marginTop:5,
        alignItems: 'center',
   },
   multiUserIcon:{
        width: 14.76 * pointX,
        height: 12.42 * pointY,
        marginHorizontal:10
   },
   currentQuantityPlayer:{
        color: "#fff",
        fontSize: 15
   }, 
   bottomCountDown:{
       flex:2,
       width:"90%",
       alignItems: 'center',
       justifyContent: 'center',
       flexDirection:'row',
   },
   boxCountDown:{
       width: 38 * pointX,
       height: 38 * pointY,  
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
   touchableJoinBtn:{
       width: 207 * pointX,
       height: 42 * pointY,
       marginTop: - 30 * pointY,
   },
   joinNowBtn:{
        width: 207 * pointX,
        height: 42 * pointY,
        justifyContent: 'center',
        alignItems: 'center',
        // marginTop: - 30 * pointY,
   },
   joinBtn:{
       width:'100%',
       height:60,
       justifyContent: 'center',
       alignItems: 'center',
       flexDirection:'row'
   },
   playSelectionContainer:{
       flex:3, 
       marginTop:20
    },
   Game:{
       width:'100%',
       flex:1,
       alignItems: 'center',
   },
   playRoomBtn:{
       width:"80%",
       marginBottom:10
   },
   iconSelected:{
       width:30,
       height:30
   },
   iconSelectionContainer:{
       flex:1, 
       alignItems:'center', 
       marginLeft:3,
    },
    textSelection:{
        flex:3, 
        alignItems:'center',
    },
    flex1:{
        flex:1
    }

})