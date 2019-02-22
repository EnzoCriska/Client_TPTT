import React, { Component } from 'react';
import { 
    View, Text, Image, ImageBackground, TouchableOpacity
} from 'react-native';
import { styles } from './style';
import { HeaderComponent } from '../../../../Util/Component Util/HeaderComponent';


export const RenderDetailNews = ({
    urlImage= '',
    titleNews = '',
    contentNews = '',
    onGoProfile = () => {},
    onGoBack = () => {}
}) => {
    return(
        <ImageBackground
            source={require('../../../../../Media/background.png')}
            style = {styles.container}>

            <HeaderComponent
                onGoProfile = {() => onGoProfile()}
            />
            <View style= {styles.titleHeader}>
                <TouchableOpacity
                    onPress = {() => onGoBack()}>
                    <Image
                        source = {require('../../../../../Media/Profile/leftArrow.png')}
                        style = {styles.scoreIcon}
                        resizeMode = 'center'
                    />
                </TouchableOpacity>
                <Text style= {styles.textTitle}>Tin tức</Text>
            </View>

            <ImageBackground
                source = {require('../../../../../Media/News/backgroundNews.png')}
                style = {styles.bodyContainer}
                imageStyle  = {styles.imageBodyBG}
                resizeMode = "stretch">

                <Image
                    source = {{uri:urlImage}}
                    style = {styles.imageNews}
                    resizeMode = "cover"
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

