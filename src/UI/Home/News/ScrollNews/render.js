import React from 'react'
import { 
    View, Text, TouchableOpacity, Image, ImageBackground, StyleSheet
 } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { ItemNews } from './itemNews';

import {YellowBox} from 'react-native';
YellowBox.ignoreWarnings(['Warning: ReactNative.createElement']);

 export const RenderScrollNew = ({
    listNews = [],
    onRenderItem = () => {},
    onToProfile = ()=> {},
    onToDetailNews = () => {}
 }) => {
     return (
        <ImageBackground
            source={require('../../../../../Media/background.png')}
            style = {styles.container}>
            <ImageBackground
                source= {require('../../../../../Media/Home/HeaderBG.png')}
                style={styles.headerContainer}>
                <View style = {styles.leftHeader}>
                    <TouchableOpacity 
                        onPress = {onToProfile}
                        style = {styles.headerAvatar}>
                        <ImageBackground
                            source = {{uri:'https://2sao.vietnamnetjsc.vn/images/2017/10/03/10/09/huyen-trang-11.jpg'}}
                            style = {styles.headerAvatar}
                            imageStyle = {styles.imgBGAvatar}>

                            <Image
                                source = {require('../../../../../Media/Home/master-rank.png')}
                                style = {styles.rankIcon}
                            />

                        </ImageBackground>
                    </TouchableOpacity>

                    <Text style={styles.textHeader}>Phạm Huyền Trang</Text>
                </View>
                

                <View style = {styles.scoreContainer}>
                    <Image
                        source = {require('../../../../../Media/Home/heart.png')}
                        style = {styles.scoreIcon}
                    />
                    <Text style = {styles.textHeader}>100.000</Text>
                </View>
            </ImageBackground>
            
            <View style = {styles.bodyContainer}>
                <View style= {styles.scrollView}>
                    <FlatList
                        data = {listNews}
                        style = {styles.flatlistStyle}
                        showsVerticalScrollIndicator = {false}
                        keyExtractor = {(item) => item.toString()}
                        renderItem = {({item})=>(
                            <TouchableOpacity
                                onPress = {() =>{onToDetailNews(item)}}>
                                <ItemNews
                                    urlImage = {item.urlImage}
                                    description = {item.description}
                                    release = {item.release}
                                />
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </View>

            
        </ImageBackground>
     )
 }

 const styles = StyleSheet.create({
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
        alignItems:'center',
        width:'100%'
    },
   scrollView:{
       width:'95%',
       flex:1,
       marginTop: 10,
   },
   flatlistStyle:{

   }
})