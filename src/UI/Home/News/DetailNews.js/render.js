import React, { Component } from 'react';
import { 
    View, Text, Image, ImageBackground, TouchableOpacity
} from 'react-native';
import { styles } from './style';
import { HeaderComponent } from '../../../../Util/Component Util/HeaderComponent';

import * as IMG from '../../../../Util/Common/Image';
import Strings from '../../../../Util/Common/Strings';

export const RenderDetailNews = ({
    urlImage= '',
    titleNews = '',
    contentNews = '',
    onGoProfile = () => {},
    onGoBack = () => {}
}) => {
    return(
        <ImageBackground
            source={IMG.BACKGROUND_IMG}
            style = {styles.container}>

            <HeaderComponent
                onGoProfile = {() => onGoProfile()}
            />
            <View style= {styles.titleHeader}>
                <TouchableOpacity
                    onPress = {() => onGoBack()}>
                    <Image
                        source = {IMG.LEFT_ARROW_ICON_IMG}
                        style = {styles.scoreIcon}
                        resizeMode = {Strings.CENTER}
                    />
                </TouchableOpacity>
                <Text style= {styles.textTitle}>{Strings.NEWS_VI}</Text>
            </View>

            <ImageBackground
                source = {IMG.NEWS_BACKGROUND_NEWS_IMG}
                style = {styles.bodyContainer}
                imageStyle  = {styles.imageBodyBG}
                resizeMode = {Strings.STRETCH}>

                <Image
                    source = {{uri:urlImage}}
                    style = {styles.imageNews}
                    resizeMode = {Strings.COVER}
                />

                <View style = {styles.newsTitleContainer}>
                    <Text style={styles.textTitle}>{titleNews}</Text>
                </View>

                <View style = {styles.newsTitleContainer}>
                    <Text style = {styles.textContentNew}>{contentNews}</Text>
                </View>

            </ImageBackground>
            

        </ImageBackground>
    )
}

