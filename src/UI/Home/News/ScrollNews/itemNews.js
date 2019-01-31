import React from 'react'
import { 
    View, Text, TouchableOpacity, Image, ImageBackground, StyleSheet
 } from 'react-native';

 export const ItemNews = ({
    urlImage = '',
    description ='',
    release = ''
 })=> {
     return (
         <ImageBackground
            source={require('../../../../../Media/News/backgroundItem.png')}
            style = {styles.itemContainer}
            resizeMode='cover'
            imageStyle = {styles.imageBGStyle}>
            <Image
                source={{uri:urlImage}}
                style={styles.imageStyle}
            />
            <View style = {styles.content}>
                <Text style={styles.textDescription}>{description}</Text>
                <Text style = {styles.release}>{release}</Text>
            </View>
         </ImageBackground>
     )
 }

 const styles = StyleSheet.create({
     itemContainer: {
         width:'100%',
         height:100,
         flexDirection: 'row',
         alignItems: 'center',
         marginBottom: 5,
     },
     imageBGStyle:{
         width:'100%',
        borderRadius:10
     },
     imageStyle:{
         height:100,
         width:150,
         borderBottomLeftRadius: 10,
         borderTopLeftRadius: 10,
         margin:5
     },
     content:{
         flex:1,
         height:100,
         margin:8,
         justifyContent: 'space-between',
         
     },
     textDescription:{
         color:'#fff',
     },
     release:{
         color:'grey',
         textAlign:'right',
         margin:8,
     }
 })