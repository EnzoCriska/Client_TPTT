import React from 'react';
import { 
    View, Text, Image, ImageBackground, TouchableOpacity, TextInput, FlatList
 } from 'react-native';
import { styles } from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
export const RenderWaitGame = ({
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
                            <View style ={{flexDirection:'row', width:'100%', margin:5,}}>
                                <Text style = {{marginHorizontal:5, color:'#FF9626'}}>{item.userName}: </Text>
                                <Text style = {{color:'#fff', flex:1, marginRight:10}}
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