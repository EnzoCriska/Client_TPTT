import React from 'react'
import { 
    StyleSheet
 } from 'react-native';
import { pointX, pointY } from '../../Util/Constanst';

 export const styles = StyleSheet.create({
     container:{
         flex:1,
         width:'100%',
         alignItems: 'center',
     },
     logoApp:{
        width: 195.34 * pointX,
        height: 97.62 * pointY,
        marginTop: 129.11 * pointY,
     },
     textAppName:{
         color:'#fff',
         fontSize: 20,
         marginTop:10
     }
 })