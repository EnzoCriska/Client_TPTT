import React from 'react';
import { 
    View, Text, TouchableOpacity, Image, ImageBackground,
    FlatList, ActivityIndicator
 } from 'react-native';
import { styles } from './style';
import * as IMG from '../../../../../Util/Common/Image';
import Strings from '../../../../../Util/Common/Strings';
import Colors from '../../../../../Util/Common/Colors';


 export const RenderListFriend = ({
     isLoading = false,
    parentState = {},
    listFriend = [],
    selectItemToDelete = () => {},
    onLoadMore = () => {}
 }) =>  {
    let loading = isLoading ? 
        <View>
            <ActivityIndicator size = 'small' color = {Colors.GREEN}/>
        </View>
        :
        console.log("Loaded")
     return(
         <View style = {styles.rootContainer}>
            <FlatList
                data = {listFriend}
                extraData = {parentState}
                keyExtractor = {(item) => item.avatar.toString()}
                onEndReached = {() => onLoadMore()}
                onEndReachedThreshold = {0.5}
                renderItem = {({item}) => (
                        <ImageBackground
                                source = {IMG.ITEM_LIST_ROOM_FRIEND_BG_IMG}
                                style = {styles.itemFriendBG}
                                resizeMode= {Strings.STRETCH}
                                >

                                <View style = {styles.leftItemContainer}>
                                    <View style = {styles.childLeftItemContainer}>
                                        <Image
                                            source = {item.avatar === '' ? IMG.AVATAR_DEFAULT_IMG : {uri: item.avatar}}
                                            style = {styles.itemAvatar}
                                        />
                                        <View style = {item.status === 3  ? styles.onLineStatus : styles.offLineStatus}></View>
                                    </View>
                                </View>

                                <View style = {styles.midItemContainer}>
                                    <Text style = {styles.itemTextUserName}>{item.display_name}</Text>
                                </View>

                                <View style = {styles.rightItemContainer}>
                                    <TouchableOpacity
                                        onPress = {() => selectItemToDelete(item)}>
                                        <Image
                                            source = {IMG.RUBBISH_BIN_DELETE_ICON_IMG}
                                            style = {styles.rightItemIcon}
                                        />
                                        
                                    </TouchableOpacity>
                                </View>

                        </ImageBackground>
                )}
            />
            {loading}
         </View>
     )
 }