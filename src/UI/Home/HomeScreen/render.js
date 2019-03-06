import React from 'react'
import { 
    View, Text, TouchableOpacity, Image, ImageBackground, Dimensions, StyleSheet, ActivityIndicator,
 } from 'react-native';
import { styles } from './style';
import Carousel from 'react-native-snap-carousel';
import  HeaderComponent  from '../../../Util/Component Util/HeaderComponent';
import { pointX } from '../../../Util/Constanst';

import * as IMG from '../../../Util/Common/Image';
import Strings from '../../../Util/Common/Strings';

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
     let carousel = listSlide.length > 0 ? 
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
                        source = {{uri:item.image}}
                        style = {styles.slideItemBG}
                        imageStyle = {{borderRadius:5}}>

                        <Text style = {styles.slideItemTitle}>{item.title}</Text>
                        <Text style = {styles.descriptionItemSlide}>{item.short_content}</Text>
                    </ImageBackground>
                )}
            />
            :
            <View style = {{width: width, height: '100%', justifyContent: 'center'}}>
                <ActivityIndicator
                    size="large" color="#0000ff"
                />
            </View>


     return(
         <ImageBackground
            source={IMG.BACKGROUND_IMG}
            style = {styles.container}>
            <HeaderComponent
                onGoProfile = {() => onGoProfile()}
            />

            <ImageBackground style = {styles.bodyContainer}>
                
                <View style = {styles.slideContainer}>
                    <View style= {styles.slideView}>
                        {carousel}
                        
                    </View>
                </View>

                <View style = {styles.countDownContainer}>

                    <ImageBackground
                        source= {IMG.COUNTDOWN_BACKGROUND_IMG}
                        style = {styles.countDownBG}
                        >

                        <View style={styles.topCountDown}>
                            <Text style = {styles.topCountDownTitle}>{Strings.NEXT_GAME}</Text>
                            <View style = {styles.currentPlayerContainer}>
                                <Image
                                    source = {IMG.MULTIPLE_USER_ICON_IMG}
                                    style = {styles.multiUserIcon}
                                />

                                <Text style = {styles.currentQuantityPlayer}>123</Text>
                            </View>
                        </View>

                        <View style = {styles.bottomCountDown}>

                            <ImageBackground
                                source = {IMG.BOX_COUNTDOWN_IMG}
                                style={styles.boxCountDown}>
                                <Text style = {styles.timeCountDown}>{hours>= 10 ? Math.floor(hours/10) : 0}</Text>
                            </ImageBackground>

                            <ImageBackground
                                source = {IMG.BOX_COUNTDOWN_IMG}
                                style={styles.boxCountDown}>
                                <Text style = {styles.timeCountDown}>{hours%10}</Text>
                            </ImageBackground>
                            
                            <Image 
                                source = {IMG.MID_BOX_COUNTDOWN_IMG} 
                                style = {styles.midBoxCountDown}
                            />

                            <ImageBackground
                                source = {IMG.BOX_COUNTDOWN_IMG}
                                style={styles.boxCountDown}>
                                <Text style = {styles.timeCountDown}>{milliseconds >= 10 ? Math.floor(milliseconds/10) : 0}</Text>
                            </ImageBackground>

                            <ImageBackground
                                source = {IMG.BOX_COUNTDOWN_IMG}
                                style={styles.boxCountDown}>
                                <Text style = {styles.timeCountDown}>{milliseconds % 10}</Text>
                            </ImageBackground>

                        </View>
                        
                        <View style = {styles.flex1}></View>
                    </ImageBackground>
                    <TouchableOpacity 
                        onPress = {onJoinNow}
                        style = {styles.touchableJoinBtn}
                        >
                        <ImageBackground
                            source = {IMG.JOIN_BTN_IMG}
                            style = {styles.joinNowBtn}
                            resizeMode = {Strings.CENTER}
                        >
                            <Text style = {styles.topCountDownTitle}>{Strings.JOIN}</Text>
                        </ImageBackground>
                </TouchableOpacity>

                </View>

                <View style = {styles.playSelectionContainer}>
                <View style = {styles.Game}>
                    <TouchableOpacity 
                        onPress = {onSystemRoom}
                        style = {styles.playRoomBtn}>
                            <ImageBackground
                                source = {IMG.ROOM_SELECT_BG_IMG}
                                style = {styles.joinBtn}
                                resizeMode = {Strings.CENTER}
                            >
                                <View style = {styles.iconSelectionContainer}>
                                    <Image
                                        source={IMG.OPENED_DOOR_ICON_IMG}
                                        style = {styles.iconSelected}
                                        resizeMode = {Strings.CENTER}
                                    />
                                </View>
                                <View style = {styles.textSelection}>
                                    <Text style = {styles.topCountDownTitle}>{Strings.SYSTEM_ROOM}</Text>
                                </View>
                                <View style = {styles.flex1}>

                                </View>

                            </ImageBackground>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        onPress = {onFriendsRoom}
                        style = {styles.playRoomBtn}>
                            <ImageBackground
                                source = {IMG.ROOM_SELECT_BG_IMG}
                                style = {styles.joinBtn}
                                resizeMode = {Strings.CENTER}
                            >
                                <View style = {styles.iconSelectionContainer}>
                                    <Image
                                        source={IMG.FRIEND_TALKING_ICON_IMG}
                                        style = {styles.iconSelected}
                                        resizeMode = {Strings.CENTER}
                                    />
                                </View>
                                <View style = {styles.textSelection}>
                                    <Text style = {styles.topCountDownTitle}>{Strings.FRIEND_ROOM}</Text>
                                </View>
                                <View style = {styles.flex1}>

                                </View>
                            </ImageBackground>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        onPress = {onTrainingRoom}
                        style = {styles.playRoomBtn}>
                            <ImageBackground
                                source = {IMG.ROOM_SELECT_BG_IMG}
                                style = {styles.joinBtn}
                                resizeMode = {Strings.CENTER}
                            >
                                <View style = {styles.iconSelectionContainer}>
                                    <Image
                                        source={IMG.GAME_PAD_ICON_IMG}
                                        style = {styles.iconSelected}
                                        resizeMode ={Strings.CENTER}
                                    />
                                </View>
                                <View style = {styles.textSelection}>
                                    <Text style = {styles.topCountDownTitle}>{Strings.TRAINING_ROOM}</Text>
                                </View>
                                <View style = {styles.flex1}>

                                </View>
                            </ImageBackground>
                    </TouchableOpacity>
                </View>
                </View>
            </ImageBackground>

         </ImageBackground>
     )
 }

