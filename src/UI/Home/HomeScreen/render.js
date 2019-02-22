import React from 'react'
import { 
    View, Text, TouchableOpacity, Image, ImageBackground, Dimensions, StyleSheet
 } from 'react-native';
import { styles } from './style';
import Carousel from 'react-native-snap-carousel';
import { HeaderComponent } from '../../../Util/Component Util/HeaderComponent';
import { pointX } from '../../../Util/Constanst';
const {width, height} = Dimensions.get('window')
 export const RenderHomeScreen = ({
    hours = '',
    milliseconds = '',
    listSlide = [],
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
            <HeaderComponent
                onGoProfile = {() => onGoProfile()}
            />

            <ImageBackground style = {styles.bodyContainer}>
                
                <View style = {styles.slideContainer}>
                    <View style= {styles.slideView}>
                        <Carousel
                            data={listSlide}
                            sliderWidth={width}
                            itemWidth={275.32 * pointX}
                            inactiveSlideOpacity={0.6}
                            inactiveSlideScale={0.8}
                            loop = {true}
                            autoplay = {true}
                            renderItem={({item, index}) => (
                                <ImageBackground
                                    source = {{uri:item.uriImage}}
                                    style = {styles.slideItemBG}
                                    imageStyle = {{borderRadius:5}}>

                                    <Text style = {styles.slideItemTitle}>{item.title}</Text>
                                    <Text style = {styles.descriptionItemSlide}>{item.description}</Text>
                                </ImageBackground>
                            )}
                        />
                    </View>
                </View>

                <View style = {styles.countDownContainer}>

                    <ImageBackground
                        source= {require('../../../../Media/Home/CountDownBG.png')}
                        style = {styles.countDownBG}
                        >

                        <View style={styles.topCountDown}>
                            <Text style = {styles.topCountDownTitle}>Game tiếp theo</Text>
                            <View style = {styles.currentPlayerContainer}>
                                <Image
                                    source = {require('../../../../Media/Game/multiple-users.png')}
                                    style = {styles.multiUserIcon}
                                />

                                <Text style = {styles.currentQuantityPlayer}>123</Text>
                            </View>
                        </View>

                        <View style = {styles.bottomCountDown}>

                            <ImageBackground
                                source = {require('../../../../Media/Game/BoxCountDown.png')}
                                style={styles.boxCountDown}>
                                <Text style = {styles.timeCountDown}>{hours>= 10 ? Math.floor(hours/10) : 0}</Text>
                            </ImageBackground>

                            <ImageBackground
                                source = {require('../../../../Media/Game/BoxCountDown.png')}
                                style={styles.boxCountDown}>
                                <Text style = {styles.timeCountDown}>{hours%10}</Text>
                            </ImageBackground>
                            
                            <Image 
                                source = {require('../../../../Media/Home/asset1.png')} 
                                style = {styles.midBoxCountDown}
                            />

                            <ImageBackground
                                source = {require('../../../../Media/Game/BoxCountDown.png')}
                                style={styles.boxCountDown}>
                                <Text style = {styles.timeCountDown}>{milliseconds >= 10 ? Math.floor(milliseconds/10) : 0}</Text>
                            </ImageBackground>

                            <ImageBackground
                                source = {require('../../../../Media/Game/BoxCountDown.png')}
                                style={styles.boxCountDown}>
                                <Text style = {styles.timeCountDown}>{milliseconds % 10}</Text>
                            </ImageBackground>

                        </View>
                        
                        <View style = {{flex:1}}></View>
                    </ImageBackground>
                    <TouchableOpacity 
                        onPress = {onJoinNow}
                        style = {styles.touchableJoinBtn}
                        >
                        <ImageBackground
                            source = {require('../../../../Media/Home/joinBtn.png')}
                            style = {styles.joinNowBtn}
                            resizeMode = "center"
                        >
                            <Text style = {styles.topCountDownTitle}>Tham gia</Text>
                        </ImageBackground>
                </TouchableOpacity>

                </View>

                <View style = {styles.playSelectionContainer}>
                <View style = {styles.Game}>
                    <TouchableOpacity 
                        onPress = {onSystemRoom}
                        style = {styles.playRoomBtn}>
                            <ImageBackground
                                source = {require('../../../../Media/Home/RoomSelect.png')}
                                style = {styles.joinBtn}
                                resizeMode = "center"
                            >
                                <View style = {styles.iconSelectionContainer}>
                                    <Image
                                        source={require('../../../../Media/Home/opened-door-aperture.png')}
                                        style = {styles.iconSelected}
                                        resizeMode = 'center'
                                    />
                                </View>
                                <View style = {styles.textSelection}>
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
                                <View style = {styles.iconSelectionContainer}>
                                    <Image
                                        source={require('../../../../Media/Home/friends-talking.png')}
                                        style = {styles.iconSelected}
                                        resizeMode = 'center'
                                    />
                                </View>
                                <View style = {styles.textSelection}>
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
                                <View style = {styles.iconSelectionContainer}>
                                    <Image
                                        source={require('../../../../Media/Home/gamepad.png')}
                                        style = {styles.iconSelected}
                                        resizeMode = 'center'
                                    />
                                </View>
                                <View style = {styles.textSelection}>
                                    <Text style = {styles.topCountDownTitle}>Phòng Training</Text>
                                </View>
                                <View style = {{flex:1}}>

                                </View>
                            </ImageBackground>
                    </TouchableOpacity>
                </View>
                </View>
            </ImageBackground>

         </ImageBackground>
     )
 }

