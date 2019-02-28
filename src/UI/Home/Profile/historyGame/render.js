import React from 'react'
import { 
    View, Text, Image, ImageBackground, TouchableOpacity, FlatList
 } from 'react-native';
import { styles } from './style';

import * as IMG from '../../../../Util/Common/Image';
import Strings from '../../../../Util/Common/Strings';

 export const RenderHistoryGame = ({
    onGoBack = () => {},
    listHistoryGame = []
 }) => {
     return (
         <ImageBackground
            style = {styles.rootContainer}
            source = {IMG.BACKGROUND_IMG}>

            <ImageBackground 
                style = {styles.headerBackground}
                source = {IMG.HEADER_PROFILE_BACKGROUND_IMG}
            >
                <TouchableOpacity
                    onPress = {() => onGoBack()}>
                    <Image
                        style = {styles.leftArrowIcon}
                        source = {IMG.LEFT_ARROW_ICON_IMG}
                    />
                </TouchableOpacity>

                <View style = {styles.titleContainer}>
                    <Text style = {styles.titleText}>{Strings.GAME_HISTORY}</Text>
                </View>
            </ImageBackground>

            <View style = {styles.bodyContainer}>
                <ImageBackground
                    source = {IMG.HISTORY_BACKGROUND_IMG}
                    style = {styles.historyBackground}
                    // resizeMode = 'center'
                    >

                    <View style  = {styles.titleTableContainer}>

                        <View style = {styles.outColumnContainer}>
                            <Text style = {styles.titleTableText}>{Strings.TIME_PLAY_GAME}</Text>
                        </View>

                        <View style = {styles.midColumnContainer}>
                            <Text style = {styles.titleTableText}>{Strings.RIGHT_ANSWER_GAME}</Text>
                        </View>

                        <View style = {styles.outColumnContainer}>
                            <Text style = {styles.titleTableText}>{Strings.SCORE_ACCUMULATION}</Text>
                        </View>

                    </View>

                    <FlatList
                        data = {listHistoryGame}
                        keyExtractor = {(item) => item.gameID.toString()}
                        renderItem = {({item}) => (
                            <View style = {styles.titleTableContainer}>
                                <View style = {styles.outColumnContainer}>
                                    <Text style = {styles.contentTableText}>{item.time}</Text>
                                </View>

                                <View style = {styles.midColumnContainer}>
                                    <Text style = {styles.contentTableText}>{item.achievements} câu hỏi</Text>
                                </View>

                                <View style = {styles.outColumnContainer}>
                                    <Text style = {styles.contentTableText}>{item.accumulation}</Text>
                                </View>
                            </View>
                        )}
                    />

                </ImageBackground>
            </View>
         </ImageBackground>
     )
 }