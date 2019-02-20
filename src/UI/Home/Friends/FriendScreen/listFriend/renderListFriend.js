import React from 'react';
import { 
    View, Text, TouchableOpacity, Image, ImageBackground,
    FlatList
 } from 'react-native';
import { styles } from './style';


 export const RenderListFriend = ({
    parentState = {},
    listFriend = [],
    selectItemToDelete = () => {}
 }) =>  {
     return(
         <View style = {styles.rootContainer}>
            <FlatList
                data = {listFriend}
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
                                        onPress = {() => selectItemToDelete(item)}>
                                        <Image
                                            source = {require('../../../../../../Media/Game/rubbish-bin-delete-button.png')}
                                            style = {styles.rightItemIcon}
                                        />
                                        
                                    </TouchableOpacity>
                                </View>

                        </ImageBackground>
                )}
            />
         </View>
     )
 }