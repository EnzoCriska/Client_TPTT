import React from 'react';
import { 
    View, Text, TouchableOpacity, Image, ImageBackground, FlatList
 } from 'react-native';
import { styles } from './style';
import * as IMG from '../../../../../Util/Image';
import Strings from '../../../../../Util/Strings';

 export const RenderWaitListFriend = ({
     parentState = {},
    listWaitFriend= [],
    dismissFriend = () => {},
    acceptFriend = () => {}
 }) =>  {
     return(
        <View style = {styles.rootContainer}>
            <FlatList
                data = {listWaitFriend}
                extraData = {parentState}
                keyExtractor = {(item) => item.avatar.toString()}
                renderItem = {({item}) => (
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
                                        <View style = {item.online  ? styles.onLineStatus : styles.offLineStatus}></View>
                                    </View>
                                </View>

                                <View style = {styles.midItemContainer}>
                                    <Text style = {styles.itemTextUserName}>{item.userName}</Text>
                                </View>

                                <View style = {styles.rightItemContainer}>
                                    <TouchableOpacity
                                        style = {styles.btnContainer}
                                        onPress = {() => acceptFriend(item)}>
                                        <Image
                                            source = {IMG.ACCEPT_ICON_IMG}
                                            style = {styles.acceptIcon}
                                        />    
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        style = {styles.btnContainer}
                                        onPress = {() => dismissFriend(item)}>
                                        <Image
                                            source = {IMG.DISMISS_ICON_IMG}
                                            style = {styles.dismissIcon}
                                        />
                                    </TouchableOpacity>
                                </View>

                        </ImageBackground>
                )}
            />
        </View>
     )
 }