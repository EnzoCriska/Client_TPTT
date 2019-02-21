import React from 'react';
import { 
    View, Text, Image, ImageBackground, TouchableOpacity, FlatList,
 } from 'react-native';
import { styles } from './style';
import { HeaderComponent } from '../../../../Util/HeaderComponent';

 export const RenderInviteJoinRoom = ({
     parentState = {},
    listFriend = [],
    selectItemToInvite = () => {},
    goBack = () => {},
    onGoProfile = () => {}
 }) => {
     return (
        <ImageBackground
            source={require('../../../../../Media/background.png')}
            style = {styles.container}>

            <HeaderComponent
                onGoProfile = {() => onGoProfile()}
            />

            <View style = {styles.headerTitleContainer}>
                <TouchableOpacity
                    onPress = {() => goBack()}>
                    <Image
                        source = {require('../../../../../Media/Profile/leftArrow.png')}
                        style = {styles.goBackIcon}
                    />
                </TouchableOpacity>
                <View style = {styles.titleContainer}>
                    <Text style = {styles.titleStyle}>Danh sách bạn bè</Text>
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
                                source = {require('../../../../../Media/Game/ItemListRoomBG.png')}
                                style = {styles.itemFriendBG}
                                resizeMode= 'stretch'
                                >

                                <View style = {styles.leftItemContainer}>
                                    <View style = {styles.childLeftItemContainer}>
                                        <Image
                                            source = {{uri: item.avatar}}
                                            style = {styles.itemAvatar}
                                        />
                                        <View style = {item.status == 'online' ? styles.onLineStatus : styles.offLineStatus}></View>
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
                                            source = {require('../../../../../Media/Game/inviteBtnBG.png')}
                                            resizeMode = 'center'>
                                            <Text style = {styles.itemTextUserName}>Mời bạn</Text>
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