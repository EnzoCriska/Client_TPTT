import React from 'react'
import { 
    View, Text, TouchableOpacity, Image, ImageBackground, StyleSheet
 } from 'react-native';
import { styles } from './style';

 export const RenderHomeScreen = ({
    hours = '',
    milliseconds = '',
    onGoProfile = () => {},
    onJoinNow = () => {},
    onSystemRoom = () => {},
    onFriendsRoom = () => {},
    onTrainingRoom = () => {}
 }) => {
     
     return(
         <ImageBackground
            source={require('../../../../Media/background.png')}
            style = {styles.container}>
            <ImageBackground
                source= {require('../../../../Media/Home/HeaderBG.png')}
                style={styles.headerContainer}>
                <View style = {styles.leftHeader}>
                    <TouchableOpacity 
                        onPress = {onGoProfile}
                        style = {styles.headerAvatar}>
                        <ImageBackground
                            source = {{uri:'https://2sao.vietnamnetjsc.vn/images/2017/10/03/10/09/huyen-trang-11.jpg'}}
                            style = {styles.headerAvatar}
                            imageStyle = {styles.imgBGAvatar}>

                            <Image
                                source = {require('../../../../Media/Home/master-rank.png')}
                                style = {styles.rankIcon}
                            />

                        </ImageBackground>
                    </TouchableOpacity>

                    <Text style={styles.textHeader}>Phạm Huyền Trang</Text>
                </View>
                

                <View style = {styles.scoreContainer}>
                    <Image
                        source = {require('../../../../Media/Home/heart.png')}
                        style = {styles.scoreIcon}
                    />
                    <Text style = {styles.textHeader}>100.000</Text>
                </View>
            </ImageBackground>

            <View style = {styles.bodyContainer}>

                <ImageBackground
                    source= {require('../../../../Media/Home/CountDownBG.png')}
                    style = {styles.countDownBG}
                    imageStyle = {{width:'100%'}}
                    resizeMode = "stretch">

                    <View style={styles.topCountDown}>
                        <Text style = {styles.topCountDownTitle}>Game tiếp theo</Text>
                    </View>

                    <View style = {styles.bottomCountDown}>

                        <View style={styles.boxCountDown}>
                            <Text style = {styles.timeCountDown}>{hours>= 10 ? Math.floor(hours/10) : 0}</Text>
                        </View>

                        <View style={styles.boxCountDown}>
                            <Text style = {styles.timeCountDown}>{hours%10}</Text>
                        </View>
                        
                        <Image source = {require('../../../../Media/Home/asset1.png')} style = {{height:60,}} resizeMode="center"/>

                        <View style={styles.boxCountDown}>
                            <Text style = {styles.timeCountDown}>{milliseconds >= 10 ? Math.floor(milliseconds/10) : 0}</Text>
                        </View>

                        <View style={styles.boxCountDown}>
                            <Text style = {styles.timeCountDown}>{milliseconds % 10}</Text>
                        </View>

                    </View>
                    
                </ImageBackground>

                <TouchableOpacity 
                    onPress = {onJoinNow}
                    style = {styles.touchableJoinBtn}>
                        <ImageBackground
                            source = {require('../../../../Media/Home/joinBtn.png')}
                            style = {styles.joinBtn}
                            resizeMode = "center"
                        >
                            <Text style = {styles.topCountDownTitle}>Tham gia</Text>
                        </ImageBackground>
                </TouchableOpacity>

                <View style = {styles.Game}>
                    <TouchableOpacity 
                        onPress = {onSystemRoom}
                        style = {styles.playRoomBtn}>
                            <ImageBackground
                                source = {require('../../../../Media/Home/RoomSelect.png')}
                                style = {styles.joinBtn}
                                resizeMode = "center"
                            >
                                <View style = {{flex:1, alignItems:'center'}}>
                                    <Image
                                        source={require('../../../../Media/Home/opened-door-aperture.png')}
                                        style = {styles.iconSelected}
                                        resizeMode = 'center'
                                    />
                                </View>
                                <View style = {{flex:3, alignItems:'center'}}>
                                    <Text style = {styles.topCountDownTitle}>Phòng hệ thống</Text>
                                </View>
                                <View style = {{flex:1}}>

                                </View>

                            </ImageBackground>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        onPress = {onFriendsRoom}
                        style = {styles.playRoomBtn}>
                            <ImageBackground
                                source = {require('../../../../Media/Home/RoomSelect.png')}
                                style = {styles.joinBtn}
                                resizeMode = "center"
                            >
                                <View style = {{flex:1, alignItems:'center'}}>
                                    <Image
                                        source={require('../../../../Media/Home/friends-talking.png')}
                                        style = {styles.iconSelected}
                                        resizeMode = 'center'
                                    />
                                </View>
                                <View style = {{flex:3, alignItems:'center'}}>
                                    <Text style = {styles.topCountDownTitle}>Phòng bạn bè</Text>
                                </View>
                                <View style = {{flex:1}}>

                                </View>
                            </ImageBackground>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        onPress = {onTrainingRoom}
                        style = {styles.playRoomBtn}>
                            <ImageBackground
                                source = {require('../../../../Media/Home/RoomSelect.png')}
                                style = {styles.joinBtn}
                                resizeMode = "center"
                            >
                                <View style = {{flex:1, alignItems:'center'}}>
                                    <Image
                                        source={require('../../../../Media/Home/gamepad.png')}
                                        style = {styles.iconSelected}
                                        resizeMode = 'center'
                                    />
                                </View>
                                <View style = {{flex:3, alignItems:'center'}}>
                                    <Text style = {styles.topCountDownTitle}>Phòng Training</Text>
                                </View>
                                <View style = {{flex:1}}>

                                </View>
                            </ImageBackground>
                    </TouchableOpacity>
                </View>

            </View>

         </ImageBackground>
     )
 }

