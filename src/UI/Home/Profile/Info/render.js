import React from 'react';
import { 
    View, Text, TouchableOpacity, Image, ImageBackground, StyleSheet
 } from 'react-native';
import { styles } from './style';
import Strings from '../../../../Util/Common/Strings';
import * as IMG from '../../../../Util/Common/Image';

 export const RenderInfo = ({
    onGoBack = () => {},
    onGoEdit = () => {},
    onGoHistoryGame = () => {},
    onGoHistoryChangeGift = () => {},
    onGoChangePassword = () => {},
    onLogout = () => {},
    avartarUrl = '',
    userName = '',
    pointValue = '',
    rankValue = '',
    gameValue = '',
    r_gValue = '',
    birthdayValue = '',
    phonenumberValue = ''
 }) => {
    let img = avartarUrl == null ? 
        <Image
            source = {IMG.DEFAULT_AVATAR_IMG}
            style = {styles.avatarStyle}
        />
    :   <Image
            source = {{uri:avartarUrl}}
            style = {styles.avatarStyle}
    />

     return (
         
        <ImageBackground
            source={IMG.BACKGROUND_IMG}
            style = {styles.container}>
           
            <ImageBackground
                source= {IMG.HEADER_PROFILE_BACKGROUND_IMG}
                style={styles.headerContainer}>
                
                <View style = {styles.leftHeader}>
                    <TouchableOpacity
                        onPress = {() => {onGoBack()}}>
                        <Image
                            source = {IMG.LEFT_ARROW_ICON_IMG}
                            style = {styles.iconHeader}
                            resizeMode = {Strings.CENTER}
                        />
                    </TouchableOpacity>
                </View>

                <View style = {styles.midHeader}>
                    <Text style={styles.titleHeader}>{Strings.PROFILE}</Text>
                </View>

                <View style = {styles.rightHeader}>
                    <TouchableOpacity
                        onPress = {() => onGoEdit()}>
                        <Image
                            source = {IMG.EDIT_PROFILE_ICON_IMG}
                            style = {styles.iconHeader}
                            resizeMode={Strings.CENTER}
                        />
                    </TouchableOpacity>
                </View>

            </ImageBackground>

            <View style = {styles.body}>
                {img}

                <Text style={styles.titleHeader}>{userName}</Text>

                <View style= {styles.Parameter}>

                    <View style = {styles.dataParameter}>
                        <Image
                            source = {IMG.POINT_ICON_HEADER_IMG}
                            style = {styles.iconData}
                            resizeMode={Strings.CENTER}
                        />
                        <Text style={styles.textData}>{pointValue}</Text>
                    </View>

                    <View style = {styles.dataParameter}>
                        <Text style={styles.textData}>{Strings.RANK}</Text>
                        <Text style={styles.textValue}>{rankValue}</Text>
                    </View>

                     <View style = {styles.dataParameter}>
                        <Text style={styles.textData}>{Strings.GAME}</Text>
                        <Text style={styles.textValue}>{gameValue}</Text>
                    </View>

                    <View style = {styles.dataParameter}>
                        <Text style={styles.textData}>R/G</Text>
                        <Text style={styles.textValue}>{r_gValue}</Text>
                    </View>

                </View>

                <View style = {styles.moreInfo}>

                    <TouchableOpacity style={styles.selectMore}>
                        <Text style ={styles.textData}>{Strings.BIRTH_DAY}</Text>
                        <Text style ={styles.textData}>{birthdayValue}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.selectMore}>
                        <Text style ={styles.textData}>{Strings.PHONE_NUMBER_VI}</Text>
                        <Text style ={styles.textData}>{phonenumberValue}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        onPress = {() => onGoHistoryGame()}
                        style={styles.selectMore}>
                        <Text style ={styles.textData}>{Strings.GAME_HISTORY}</Text>
                        <Image
                            source = {IMG.RIGHT_ARROW_ICON_IMG}
                            style = {styles.iconData}
                            resizeMode = {Strings.CENTER}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity 
                        onPress = {() => onGoHistoryChangeGift()}
                        style={styles.selectMore}>
                        <Text style ={styles.textData}>{Strings.GIFT_HISTORY}</Text>
                        <Image
                            source = {IMG.RIGHT_ARROW_ICON_IMG}
                            style = {styles.iconData}
                            resizeMode = {Strings.CENTER}
                        />
                    </TouchableOpacity>

                     <TouchableOpacity 
                        onPress = {() => onGoChangePassword()}
                        style={styles.selectMore}>
                        <Text style ={styles.textData}>{Strings.CHANGE_PASSWORD}</Text>
                        <Image
                            source = {IMG.RIGHT_ARROW_ICON_IMG}
                            style = {styles.iconData}
                            resizeMode = {Strings.CENTER}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity 
                        onPress = {() => onLogout()}
                        style={styles.selectMore}>
                        <Text style ={styles.textData}>{Strings.SIGN_OUT}</Text>
                        <Text style ={styles.textData}></Text>
                    </TouchableOpacity>

                </View>

            </View>
         </ImageBackground>
     )
 }

