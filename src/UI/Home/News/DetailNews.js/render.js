import React, { Component } from 'react';
import { 
    View, Text, Image, ImageBackground, TouchableOpacity
} from 'react-native';
import { styles } from './style';


export const RenderDetailNews = ({
    urlImage= '',
    titleNews = '',
    contentNews = '',
    onToProfile = () => {},
    onGoBack = () => {}
}) => {
    return(
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

