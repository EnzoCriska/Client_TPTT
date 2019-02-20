import React from 'react';
import { 
    View, Text, TouchableOpacity, Image, ImageBackground, FlatList
 } from 'react-native';
import { styles } from './style';


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
                                source = {require('../../../../../../Media/Game/ItemListRoomBG.png')}
                                style = {styles.itemFriendBG}
                                resizeMode= 'stretch'
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
                                            source = {require('../../../../../../Media/Game/acceptIcon.png')}
                                            style = {styles.acceptIcon}
                                        />    
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        style = {styles.btnContainer}
                                        onPress = {() => dismissFriend(item)}>
                                        <Image
                                            source = {require('../../../../../../Media/Game/dismissIcon.png')}
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