import React from 'react';
import { 
    View, Text, Image, ImageBackground, TouchableOpacity, FlatList
 } from 'react-native';
import { styles } from './style';

import * as IMG from '../../../../Util/Common/Image'
import Strings from '../../../../Util/Common/Strings';

export const RenderHistoryChangeGift = ({
    onGoBack = () => {},
    listHistoryChangeGift = []
}) =>  {
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
                    <Text style = {styles.titleText}>{Strings.GIFT_HISTORY}</Text>
                </View>
            </ImageBackground>

            <View style = {styles.bodyContainer}>
                <ImageBackground
                    source = {IMG.HISTORY_BACKGROUND_IMG}
                    style = {styles.historyBackground}
                    >

                    <View style  = {styles.titleTableContainer}>

                        <View style = {styles.outColumnContainer}>
                            <Text style = {styles.titleTableText}>{Strings.TIME_CHANGE_GIFT}</Text>
                        </View>

                        <View style = {styles.midColumnContainer}>
                            <Text style = {styles.titleTableText}>{Strings.SCORE_CHANGE_GIFT}</Text>
                        </View>

                        <View style = {styles.outColumnContainer}>
                            <Text style = {styles.titleTableText}>{Strings.GIFT_CHANGED}</Text>
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