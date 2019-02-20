import React from 'react'
import { StyleSheet } from 'react-native';
import { pointX, pointY } from '../../../../../Util/Constanst';

export const styles = StyleSheet.create({
    rootContainer:{
        flex:1, width:'100%',
        marginTop: 10,
    },
    itemFriendBG:{
        width: 345 * pointX,
        height: 55 * pointY,
        flexDirection:'row',
        marginBottom: 3,
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
        flex:1,
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
    rightItemIcon:{
        width: 13.22 * pointX,
        height: 17 * pointY
    }
})