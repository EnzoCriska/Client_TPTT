import React from 'react'
import { 
    View, Text, Image, ImageBackground, TouchableOpacity, FlatList
 } from 'react-native';
import { styles } from './style';

 export const RenderHistoryGame = ({
    onGoBack = () => {},
    listHistoryGame = []
 }) => {
     return (
         <ImageBackground
            style = {styles.rootContainer}
            source = {require('../../../../../Media/background.png')}>

            <ImageBackground 
                style = {styles.headerBackground}
                source = {require('../../../../../Media/Home/HeaderBG.png')}
            >
                <TouchableOpacity
                    onPress = {() => onGoBack()}>
                    <Image
                        style = {styles.leftArrowIcon}
                        source = {require('../../../../../Media/Profile/leftArrow.png')}
                    />
                </TouchableOpacity>

                <View style = {styles.titleContainer}>
                    <Text style = {styles.titleText}>Lịch sử chơi</Text>
                </View>
            </ImageBackground>

            <View style = {styles.bodyContainer}>
                <ImageBackground
                    source = {require('../../../../../Media/Profile/historyBackground.png')}
                    style = {styles.historyBackground}
                    // resizeMode = 'center'
                    >

                    <View style  = {styles.titleTableContainer}>

                        <View style = {styles.outColumnContainer}>
                            <Text style = {styles.titleTableText}>Thời gian chơi</Text>
                        </View>

                        <View style = {styles.midColumnContainer}>
                            <Text style = {styles.titleTableText}>Trả lời đúng</Text>
                        </View>

                        <View style = {styles.outColumnContainer}>
                            <Text style = {styles.titleTableText}>Điểm tích lũy</Text>
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