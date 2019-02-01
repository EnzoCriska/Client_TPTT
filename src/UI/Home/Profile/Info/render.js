import React from 'react';
import { 
    View, Text, TouchableOpacity, Image, ImageBackground, StyleSheet
 } from 'react-native';
import { styles } from '../../News/DetailNews.js/style';

 export const RenderInfo = ({
    onGoBack = () => {},
    onGoEdit = () => {}
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
                        onPress = {() => {onGoBack()}}>
                        <Image
                            source = {require('../../../../../Media/Profile/leftArrow.png')}
                            style = {styles.iconHeader}
                            resizeMode = 'center'
                        />
                    </TouchableOpacity>
                </View>

                <View style = {styles.midHeader}>
                    <Text style={styles.titleHeader}>Profile</Text>
                </View>

                <View style = {styles.rightHeader}>
                    <TouchableOpacity
                        onPress = {() => {onGoEdit()}}>
                        <Image
                            source = {require('../../../../../Media/Profile/editProfile.png')}
                            style = {styles.iconHeader}
                            resizeMode="center"
                        />
                    </TouchableOpacity>
                </View>

            </ImageBackground>

            <View style = {styles.body}>
                <Image
                    source={{uri: 'https://2sao.vietnamnetjsc.vn/images/2017/10/03/10/09/huyen-trang-11.jpg'}}
                    style={styles.avatarStyle}
                />

                <Text style={styles.titleHeader}>Phạm Huyền Trang</Text>

                <View style= {styles.Parameter}>

                    <View style = {styles.dataParameter}>
                        <Image
                            source = {require('../../../../../Media/Home/heart.png')}
                            style = {styles.iconData}
                            resizeMode='center'
                        />
                        <Text style={styles.textData}>100.000</Text>
                    </View>

                    <View style = {styles.dataParameter}>
                        <Text style={styles.textData}>Rank</Text>
                        <Text style={styles.textValue}>100</Text>
                    </View>

                     <View style = {styles.dataParameter}>
                        <Text style={styles.textData}>Game</Text>
                        <Text style={styles.textValue}>30</Text>
                    </View>

                    <View style = {styles.dataParameter}>
                        <Text style={styles.textData}>R/G</Text>
                        <Text style={styles.textValue}>100</Text>
                    </View>

                </View>

                <View style = {styles.moreInfo}>

                    <TouchableOpacity style={styles.selectMore}>
                        <Text style ={styles.textData}>Ngày sinh</Text>
                        <Text style ={styles.textData}>15/09/1996</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.selectMore}>
                        <Text style ={styles.textData}>Số điện thoại</Text>
                        <Text style ={styles.textData}>090 41 23 123</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.selectMore}>
                        <Text style ={styles.textData}>Lịch sử chơi</Text>
                        <Image
                            source = {require('../../../../../Media/Profile/rightArrow.png')}
                            style = {styles.iconData}
                            resizeMode = 'center'
                        />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.selectMore}>
                        <Text style ={styles.textData}>Lịch sử đổi quà</Text>
                        <Image
                            source = {require('../../../../../Media/Profile/rightArrow.png')}
                            style = {styles.iconData}
                            resizeMode = 'center'
                        />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.selectMore}>
                        <Text style ={styles.textData}>Sigout</Text>
                        <Text style ={styles.textData}></Text>
                    </TouchableOpacity>

                </View>

            </View>
         </ImageBackground>
     )
 }

