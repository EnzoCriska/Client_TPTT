import React from 'react';
import { 
    View, Text, Image, ImageBackground, TouchableOpacity, FlatList
 } from 'react-native';
import { styles } from './style';

export const RenderHistoryChangeGift = ({
    onGoBack = () => {},
    listHistoryChangeGift = []
}) =>  {
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
                    >

                    <View style  = {styles.titleTableContainer}>

                        <View style = {styles.outColumnContainer}>
                            <Text style = {styles.titleTableText}>Thời gian đổi</Text>
                        </View>

                        <View style = {styles.midColumnContainer}>
                            <Text style = {styles.titleTableText}>Số điểm đổi</Text>
                        </View>

                        <View style = {styles.outColumnContainer}>
                            <Text style = {styles.titleTableText}>Quà đã đổi</Text>
                        </View>

                    </View>

                    <FlatList
                        data = {listHistoryChangeGift}
                        keyExtractor = {(item) => item.dealID.toString()}
                        renderItem = {({item}) => (
                            <View style = {styles.titleTableContainer}>
                                <View style = {styles.outColumnContainer}>
                                    <Text style = {styles.contentTableText}>{item.time}</Text>
                                </View>

                                <View style = {styles.midColumnContainer}>
                                    <Text style = {styles.contentTableText}>{item.changeScore}</Text>
                                </View>

                                <View style = {styles.outColumnContainer}>
                                    <Text style = {styles.contentTableText}>{item.giftChanged}</Text>
                                </View>
                            </View>
                        )}
                    />

                </ImageBackground>
            </View>
        </ImageBackground>
    )
}