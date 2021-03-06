import React from 'react'
import { 
    View, Text, TouchableOpacity, Image, ImageBackground, StyleSheet
 } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { ItemNews } from './itemNews';
import { styles } from './style';
import HeaderComponent from '../../../../Util/Component Util/HeaderComponent';

import * as IMG from '../../../../Util/Common/Image';
 export const RenderScrollNew = ({
    listNews = [],
    onRenderItem = () => {},
    onGoProfile = ()=> {},
    onToDetailNews = () => {}
 }) => {
     return (
        <ImageBackground
            source={IMG.BACKGROUND_IMG}
            style = {styles.container}>

            <HeaderComponent
                onGoProfile = {() => onGoProfile()}
            />
            
            <View style = {styles.bodyContainer}>
                <View style= {styles.scrollView}>
                    <FlatList
                        data = {listNews}
                        style = {styles.flatlistStyle}
                        showsVerticalScrollIndicator = {false}
                        keyExtractor = {(item) => item.urlImage.toString()}
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

 