import React from 'react';
import { 
    View, 
    Text, 
    Image, 
    ImageBackground, 
    TouchableOpacity, 
    TextInput, 
    FlatList,
    Keyboard,
    TouchableWithoutFeedback
 } from 'react-native';
import { styles } from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import  HeaderComponent  from '../../../../Util/Component Util/HeaderComponent';
import * as IMG from '../../../../Util/Common/Image';
import Strings from '../../../../Util/Common/Strings';
import Colors from '../../../../Util/Common/Colors';

export const RenderWaitGame = ({
    onGoProfile = () => {},

    hours = '',
    milliseconds = '',
    chatValue = '',
    chatList = [],
    onChangeChat = () => {},
    sendMessage = () => {},
    goToBack = () => {}
}) => {
    return (
    <TouchableWithoutFeedback onPress = {Keyboard.dismiss} accessible = {false}>
        <ImageBackground
            source={IMG.BACKGROUND_IMG}
            style = {styles.container}>
            
            <HeaderComponent
                onGoProfile = {() => onGoProfile()}
            />

            <View style= {styles.bodyContainer}>
                <View style = {styles.bottomHeaderContainer}>
                    <TouchableOpacity onPress = {() => goToBack()}>
                        <Image
                            source = {IMG.LEFT_ARROW_ICON_IMG}
                            style = {styles.iconHeader}
                            resizeMode = {Strings.CENTER}
                        />
                    </TouchableOpacity>
                    <View style= {styles.midHeaderTitle}>
                        <Text style = {styles.titleHeader}>{Strings.QUANTITY_MEMBER_JOIN}</Text>
                    </View>
                    <View style = {styles.container}></View>
                </View>
                <View style = {styles.quantityPlayerContainer}>
                    <Image
                        source={IMG.MULTIPLE_USER_ICON_IMG}
                        style = {styles.quantityPlayerIcon}
                    />
                    <Text style = {styles.quantityPlayerValue}>123</Text>
                </View>

                <View style={styles.nextGameTimeContainer}>
                    <Text style = {styles.nextTimeTitle}>{Strings.NEXT_GAME}</Text>
                    
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
                </View>

                <ImageBackground
                    source = {IMG.CHAT_BACKGROUND_IMG}
                    style={styles.chatBackground}
                    resizeMode= {Strings.STRETCH}
                    >

                    <FlatList
                        style = {styles.flatListChat}
                        data = {chatList}
                        ref={ref => this.flatList = ref}
                        onContentSizeChange={() => this.flatList.scrollToEnd({animated: true})}
                        onLayout={() => this.flatList.scrollToEnd({animated: true})}
                        keyExtractor = {(item, index) => item.toString()}
                        renderItem = {({item}) => (
                            <View style ={styles.itemContainerChat}>
                                <Text style = {styles.userNameChat}>{item.userName}: </Text>
                                <Text style = {styles.contentChat}
                                    multiline = {true}
                                    >{item.content}</Text>
                            </View>
                        )}
                    />

                    <ImageBackground
                        source = {IMG.INPUT_CHAT_BACKGROUND}
                        style = {styles.inputChatBG}
                        resizeMode={Strings.CENTER}>

                        <Image
                            source = {IMG.CHAT_ICON_IMG}
                            style = {styles.iconChat}
                            resizeMode = {Strings.CENTER}
                        />

                        <TextInput
                            style = {styles.textInputChat}
                            onChangeText = {(text) => onChangeChat(text)}
                            value = {chatValue}
                            placeholder = {Strings.TALK}
                            placeholderTextColor = {Colors.WHITE}
                            multiline = {true}
                        />

                        <TouchableOpacity 
                            style = {styles.sendIcon}
                            onPress = {() => sendMessage(chatValue)}>
                            <Icon
                                name = {Strings.SEND}
                                color = {Colors.WHITE}
                                size = {20}
                            />
                        </TouchableOpacity>

                    </ImageBackground>
                </ImageBackground>
            </View>


        </ImageBackground>
        </TouchableWithoutFeedback>
    )
}