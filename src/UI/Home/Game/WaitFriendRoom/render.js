import React, { Component } from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { styles } from './style';
import { FlatList } from 'react-native-gesture-handler';
import Global from '../../../../Util/Global';
export const RenderWaitFriendRoom = ({
    goToBack = () => {},
    isRoot = false,
    listPlayerJoined = [],
    hours = '',
    milliseconds = '',
    onStartGame = () => {}
}) => {
    return (
        <ImageBackground
            source={require('../../../../../Media/background.png')}
            style = {styles.container}>
            <ImageBackground
                source= {require('../../../../../Media/Home/HeaderBG.png')}
                style={styles.headerContainer}>
                <View style = {styles.leftHeader}>
                    <TouchableOpacity 
                        // onPress = {onToProfile}
                        style = {styles.headerAvatar}>
                        <ImageBackground
                            source = {{uri:'https://2sao.vietnamnetjsc.vn/images/2017/10/03/10/09/huyen-trang-11.jpg'}}
                            style = {styles.headerAvatar}
                            imageStyle = {styles.imgBGAvatar}>

                            <Image
                                source = {require('../../../../../Media/Home/master-rank.png')}
                                style = {styles.rankIcon}
                            />

                        </ImageBackground>
                    </TouchableOpacity>

                    <Text style={styles.textHeader}>Phạm Huyền Trang</Text>
                </View>
                

                <View style = {styles.scoreContainer}>
                    <Image
                        source = {require('../../../../../Media/Home/heart.png')}
                        style = {styles.scoreIcon}
                    />
                    <Text style = {styles.textHeader}>100.000</Text>
                </View>
            </ImageBackground>

            <View style = {styles.bodyContainer}>
        
                <View style = {styles.headerRoom}>

                    <TouchableOpacity
                        onPress = {() => goToBack()}>
                        <Image
                            source = {require('../../../../../Media/Profile/leftArrow.png')}
                            style = {styles.headerBackIcon}
                        />
                    </TouchableOpacity>
        {/* Room name from props */}
                    <Text style = {styles.headerRoomTitle}>Room 01</Text>

                    <View style = {styles.headerRoomRightContainer}>
                        <Image
                            source = {require('../../../../../Media/Game/multiple-users.png')}
                            style = {styles.headerRightIcon}
                        />

                        {/* Room current user from props */}
                        <Text style = {styles.headerRoomTitle}>100</Text>
                    </View>

                </View>

                <View style = {styles.countDownContainer}>
                    
                    <ImageBackground
                        source = {require('../../../../../Media/Game/BoxCountDown.png')}
                        style = {styles.countDownItemBG}>
                        <Text style = {styles.timeCountDown}>{hours>= 10 ? Math.floor(hours/10) : 0}</Text>
                    </ImageBackground>

                    <ImageBackground
                        source = {require('../../../../../Media/Game/BoxCountDown.png')}
                        style = {styles.countDownItemBG}>
                        <Text style = {styles.timeCountDown}>{hours%10}</Text>
                    </ImageBackground>

                    <Image 
                        source = {require('../../../../../Media/Home/asset1.png')}
                        style = {styles.midCountdownIcon}
                    />

                    <ImageBackground
                        source = {require('../../../../../Media/Game/BoxCountDown.png')}
                        style = {styles.countDownItemBG}>
                        <Text style = {styles.timeCountDown}>{milliseconds >= 10 ? Math.floor(milliseconds/10) : 0}</Text>
                    </ImageBackground>

                    <ImageBackground
                        source = {require('../../../../../Media/Game/BoxCountDown.png')}
                        style = {styles.countDownItemBG}>
                        <Text style = {styles.timeCountDown}>{milliseconds % 10}</Text>
                    </ImageBackground>
                </View>


                <View style = {styles.flatListContainer}>

                            {/*  Current user */}
                            <ImageBackground
                                source = {require('../../../../../Media/Game/CurrentUserItemBG.png')}
                                style = {styles.itemUser}
                                imageStyle = {styles.imageItemUserStyle}>

                                <View style = {styles.sttContainer}>
                                    <Text style = {styles.index}>100</Text>
                                </View>

                                <View style = {styles.avatarItemContainer}>
                                    <Image
                                        source = {{uri:'https://2sao.vietnamnetjsc.vn/images/2017/10/03/10/09/huyen-trang-11.jpg'}}
                                        style = {styles.avatarItem}
                                    />
                                </View>

                                <View style = {styles.ItemInfoContainer}>
                                    <Text style = {styles.textUserName}>Phạm Huyền Trang</Text>
                                    <Text style = {styles.textLevel}>Level 100</Text>
                                </View>
                            </ImageBackground>
                    <FlatList
                        data = {listPlayerJoined}
                        keyExtractor = {(item) =>item.toString()}
                        showsVerticalScrollIndicator = {false}
                        renderItem = {({item, index}) => (
                            <ImageBackground
                                source = {require('../../../../../Media/Game/UserItemBG.png')}
                                style = {styles.itemUser}
                                imageStyle = {styles.imageItemUserStyle}>

                                <View style = {styles.sttContainer}>
                                    <Text style = {styles.index}>{index}</Text>
                                </View>

                                <View style = {styles.avatarItemContainer}>
                                    <Image
                                        source = {{uri:item.avatar}}
                                        style = {styles.avatarItem}
                                    />
                                </View>

                                <View style = {styles.ItemInfoContainer}>
                                    <Text style = {styles.textUserName}>{item.userName}</Text>
                                    <Text style = {styles.textLevel}>Level {item.level}</Text>
                                </View>
                            </ImageBackground>
                        )}
                    />
                </View>

                <TouchableOpacity
                    onPress = {() => onStartGame()}>
                    <ImageBackground
                        source = {require('../../../../../Media/Game/StartBtn.png')}
                        style = {isRoot ? styles.showStartBtn : styles.hideStartBtn}
                    >
                        <Text style = {styles.textStartBtn}>BẮT ĐẦU</Text>
                    </ImageBackground>
                </TouchableOpacity>

            </View>


        </ImageBackground>
    ) 
}
