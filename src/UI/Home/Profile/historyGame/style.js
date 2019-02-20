import React from 'react'
import { StyleSheet } from 'react-native';
import { pointX, pointY } from '../../../../Util/Constanst';

export const styles = StyleSheet.create({
    rootContainer:{
        flex:1,
        width:'100%',
        alignItems: 'center',
    },
    headerBackground :{
        width:  375 * pointX,
        height: 45.75 * pointY,
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
    leftArrowIcon:{
        width: 10.36 * pointX,
        height: 16.08 * pointY
    },
    titleContainer:{
        position: 'absolute',
        width:'100%',
        height:'100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleText:{
        color:'#fff',
        fontSize: 18,
    },
    bodyContainer:{
        marginTop: 10,
        alignItems: 'center',
        flex:1,
        width:'100%'
    },
    historyBackground:{
        width: 362.46 * pointX,
        height : 470 * pointY,
    },
    titleTableContainer:{
        width:'100%',
        height: 50 * pointY,
        borderBottomColor: '#707070',
        borderBottomWidth: 1,
        flexDirection: 'row',
    },
    outColumnContainer:{
        flex:1,
        height: '100%',
        justifyContent:'center',
        alignItems: 'center',
    },
    midColumnContainer:{
        flex:1,
        height:'100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRightColor: '#707070',
        borderLeftColor: '#707070',
        borderRightWidth: 1,
        borderLeftWidth: 1,
    },
    titleTableText:{
        color: '#FF9626',
        fontSize:14
    },
    contentTableText:{
        color : '#fff',
        fontSize:14,
        textAlign: 'center'
    }
})