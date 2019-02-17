import { StyleSheet } from 'react-native';
import { pointX, pointY, width, height } from '../../../../Util/Constanst';

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
   TopContainer:{
       width:'100%',
       marginTop:10,
       paddingHorizontal: 10,
   },
   leftArrowStyle:{
       width:30,
       height:20
   },
   titleContainer:{
       width:'100%', 
       height:'100%',
       position: 'absolute',
       justifyContent:'center',
       alignItems:'center'
   },
   textTitle:{
       color:'#fff',
       fontSize:18,
       fontWeight:'200'
   },
   flatListStyle:{
        width:'100%',
        height:'100%',
   },
   containerItem:{
       alignItems:'center', 
       width:'100%'
    },
   itemListRoomBG:{
       width:342.46 * pointX,
       height:108 *  pointY,
       paddingHorizontal:10,
   },
   imageBackgroundStyle:{
       width:'100%', 
       height:'100%'
    },
   topRightItemContainer:{
        flexDirection:'row'
   },
   topItemRoomContainer:{
       flex:1,
       flexDirection:'row',
       justifyContent: 'space-between',
       alignItems:'center',
       marginTop:10,
       marginHorizontal: 10,
   },
   textRoomName:{
        color:'#FF9626',
        fontSize:14
   },
   lineStyle:{
    width:'100%',
    height:5
   },
   midItemRoomContainer:{
        flex:2,
        marginHorizontal:10
   },
   textQuantityPlayer:{
       color:'#fff',
       fontSize:14,
       fontWeight:'200'
   },
   bottomItemRoomContainer:{
       flex:1,
       flexDirection:'row',
       justifyContent: 'space-between',
       alignItems:'center',
       marginHorizontal:10,
       marginBottom:10,
   },
   bottomRightItemContainer:{
       flexDirection:'row'
   },
   hideImage:{
       width: 0,
       height:0
   },
   buttonCreateRoomContainer:{
       position:'absolute',
        alignSelf: 'flex-end',
        justifyContent: 'flex-end',
        bottom:25.79 * pointY,
        right: 21.57 * pointX
   },
   createRoomBtn:{
       width:54.43 * pointX,
       height:54.43 * pointY
   },
   modalJoinRoomStyle:{
       backgroundColor: '#041650',
       borderRadius:5,
       marginHorizontal: (width - 348 * pointX)/2,
       marginVertical: (height - 194.36 * pointY)/2 ,
       padding: 10,
   },
   closeBtnContainer:{
        alignSelf:'flex-end',
        marginTop:-(18 * pointX),
        marginRight:-13 * pointY,
   },
   closeBtn:{
        width:26 * pointX, 
        height:26 * pointY,
   },
   textPlaceHolderModal:{
        color:'#fff',
        fontSize: 17,
    },
   textTitleModal:{
        color:'#fff',
        fontSize: 17,
        fontWeight:'bold',
        alignSelf:'center',
        flex:1
    },
    joinBtn:{
        width: 126 * pointX,
        height: 39.15 * pointY,
        borderRadius: 10,
        backgroundColor: '#FF9626',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInputStyleModal:{
        marginTop:5,
        backgroundColor:'#000A29',
        borderRadius:5,
        height:39 * pointY,
        color:'#fff'
    },
    confirmContainer:{
        flex:2, 
        justifyContent:'space-between',
        flexDirection:'row'
    },
    textConfirmBtn:{
        color:'#fff',
        fontSize:17,
        fontWeight:'bold'
    },
    modalCreateRoomStyle:{
        backgroundColor: '#041650',
        borderRadius:5,
        marginHorizontal: (width - 348 * pointX)/2,
        marginVertical: (height - 273.36 * pointY)/2 ,
        padding: 10,
    },
    timePickerContainer:{
        width:157.75 * pointX,
        height: 39.15 * pointY,
        backgroundColor: '#000A29',
        borderRadius:5,
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'space-between',
        paddingHorizontal:3
    },
    textTimePicker:{
        color:'#fff',
        fontSize:15
    },
    timePickerIcon:{
        width: 15.57 * pointX,
        height: 15.57 * pointY
    }
   
})