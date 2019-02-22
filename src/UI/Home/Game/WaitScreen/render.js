import React from 'react';
import { 
    View, Text, Image, ImageBackground, TouchableOpacity, TextInput, FlatList
 } from 'react-native';
import { styles } from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import { HeaderComponent } from '../../../../Util/Component Util/HeaderComponent';
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
        <ImageBackground
            source={require('../../../../../Media/background.png')}
            style = {styles.container}>
            
            <HeaderComponent
                onGoProfile = {() => onGoProfile()}
            />

            <View style= {styles.bodyContainer}>
                <View style = {styles.bottomHeaderContainer}>
                    <TouchableOpacity onPress = {() => goToBack()}>
                        <Image
                            source = {require('../../../../../Media/Profile/leftArrow.png')}
                            style = {styles.iconHeader}
                            resizeMode = 'center'
                        />
                    </TouchableOpacity>
                    <View style= {styles.midHeaderTitle}>
                        <Text style = {styles.titleHeader}>Số người tham gia</Text>
                    </View>
                    <View style = {{flex:1}}></View>
                </View>
                <View style = {styles.quantityPlayerContainer}>
                    <Image
                        source={require('../../../../../Media/Game/multiple-users.png')}
                        style = {styles.quantityPlayerIcon}
                    />
                    <Text style = {styles.quantityPlayerValue}>123</Text>
                </View>

                <View style={styles.nextGameTimeContainer}>
                    <Text style = {styles.nextTimeTitle}>Game tiếp theo</Text>
                    
                    <View style = {styles.bottomCountDown}>

                        <View style={styles.boxCountDown}>
                            <Text style = {styles.timeCountDown}>{hours>= 10 ? Math.floor(hours/10) : 0}</Text>
                        </View>

                        <View style={styles.boxCountDown}>
                            <Text style = {styles.timeCountDown}>{hours%10}</Text>
                        </View>
                        
                        <Image source = {require('../../../../../Media/Home/asset1.png')} style = {{height:60,}} resizeMode="center"/>

                        <View style={styles.boxCountDown}>
                            <Text style = {styles.timeCountDown}>{milliseconds >= 10 ? Math.floor(milliseconds/10) : 0}</Text>
                        </View>

                        <View style={styles.boxCountDown}>
                            <Text style = {styles.timeCountDown}>{milliseconds % 10}</Text>
                        </View>

                    </View>
                </View>

                <ImageBackground
                    source = {require('../../../../../Media/Game/ChatBackground.png')}
                    style={styles.chatBackground}
                    resizeMode= 'stretch'
                    imageStyle = {{width:'100%'}}>

                    <FlatList
                        style = {{width:'100%',flex:1,}}
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
                        source = {require('../../../../../Media/Game/inputChatBG.png')}
                        style = {styles.inputChatBG}
                        resizeMode='center'>

                        <Image
                            source = {require('../../../../../Media/Game/chat.png')}
                            style = {styles.iconChat}
                            resizeMode = 'center'
                        />

                        <TextInput
                            style = {styles.textInputChat}
                            onChangeText = {(text) => onChangeChat(text)}
                            value = {chatValue}
                            placeholder = "Nói chuyện"
                            placeholderTextColor = "#fff"
                            multiline = {true}
                        />

                        <TouchableOpacity 
                            style = {styles.sendIcon}
                            onPress = {() => sendMessage(chatValue)}>
                            <Icon
                                name = 'send'
                                color = '#fff'
                                size = {20}
                            />
                        </TouchableOpacity>

                    </ImageBackground>
                </ImageBackground>
            </View>


        </ImageBackground>
    )
}