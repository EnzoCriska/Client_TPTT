import React from 'react';
import { 
    View, Text, Image, ImageBackground, TouchableOpacity, FlatList,
 } from 'react-native';
import { styles } from './style';
import  HeaderComponent  from '../../../../Util/Component Util/HeaderComponent';

import * as IMG from '../../../../Util/Common/Image';
import Strings from '../../../../Util/Common/Strings';
 export const RenderInviteJoinRoom = ({
     parentState = {},
    listFriend = [],
    selectItemToInvite = () => {},
    goBack = () => {},
    onGoProfile = () => {}
 }) => {
     return (
        <ImageBackground
            source={IMG.BACKGROUND_IMG}
            style = {styles.container}>

            <HeaderComponent
                onGoProfile = {() => onGoProfile()}
            />

            <View style = {styles.headerTitleContainer}>
                <TouchableOpacity
                    onPress = {() => goBack()}>
                    <Image
                        source = {IMG.LEFT_ARROW_ICON_IMG}
                        style = {styles.goBackIcon}
                    />
                </TouchableOpacity>
                <View style = {styles.titleContainer}>
                    <Text style = {styles.titleStyle}>{Strings.LIST_FRIEND}</Text>
                </View>
            </View>

            <View style = {styles.bodyContainer}>
                <FlatList
                    data = {listFriend}
                    extraData = {parentState}
                    keyExtractor = {(item) => item.avatar.toString()}
                    renderItem = {({item}) =>{
                        return (
                        <TouchableOpacity style = {styles.itemFriendContainer}>
                            <ImageBackground
                                source = {IMG.ITEM_LIST_ROOM_FRIEND_BG_IMG}
                                style = {styles.itemFriendBG}
                                resizeMode= {Strings.STRETCH}
                                >

                                <View style = {styles.leftItemContainer}>
                                    <View style = {styles.childLeftItemContainer}>
                                        <Image
                                            source = {{uri: item.avatar}}
                                            style = {styles.itemAvatar}
                                        />
                                        <View style = {item.status == Strings.ONLINE ? styles.onLineStatus : styles.offLineStatus}></View>
                                    </View>
                                </View>

                                <View style = {styles.midItemContainer}>
                                    <Text style = {styles.itemTextUserName}>{item.userName}</Text>
                                </View>

                                <View style = {styles.rightItemContainer}>
                                    <TouchableOpacity
                                        onPress = {() => selectItemToInvite(item)}>
                                        <ImageBackground
                                            style = {item.selected ? styles.hideBtn : styles.inviteBtnContainer}
                                            source = {IMG.INVITE_JOIN_GAME_BTN_IMG}
                                            resizeMode = {Strings.CENTER}
                                        >
                                            <Text style = {styles.itemTextUserName}>{Strings.INVITE}</Text>
                                        </ImageBackground>
                                        
                                    </TouchableOpacity>
                                </View>

                            </ImageBackground>

                        </TouchableOpacity>
                    )}
                    }
                />

            </View>
        </ImageBackground>
     )
 }