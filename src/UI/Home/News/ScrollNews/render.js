import React from 'react'
import { 
    View, Text, TouchableOpacity, Image, ImageBackground, StyleSheet
 } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { ItemNews } from './itemNews';
import { styles } from './style';

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

 