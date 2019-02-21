import React from 'react';
import { 
    View, Text, TouchableOpacity, Image, ImageBackground, TextInput
 } from 'react-native';
import { styles } from './style';
import { FlatList } from 'react-native-gesture-handler';
import { ItemRoomList } from './ItemListRoom';
import Modal from 'react-native-modal';

import DateTimePicker from 'react-native-modal-datetime-picker';
import { HeaderComponent } from '../../../../Util/HeaderComponent';


 export const RenderListRoom = ({
    listRoom = [],
    goBack = () => {},
    onGoProfile = () => {},
    
    joinRoomVisible = false,
    hideModalJoinRoom =() => {},
    showModalJoinRoom = () => {},
    joinModalValuePassword = '',
    onChangePasswordModalJoin = ()=> {},
    joinToRoom = () => {},
    goToRoom = () => {},

    createRoomVisible = false,
    hideModalCreateRoom = () => {},
    showModalCreateRoom = () => {},
    createModalValueRoomName = '',
    createModalValuePassword = '',
    onChangeRoomNameModalCreate = () => {},
    onChangePasswordModalCreate = () => {},

    timeStartValue = '',

    TimePickerVisible = false,
    openTimePicker = () => {},
    _showTimePicker = () => {},
    _hideDateTimePicker = () => {},
    _handleDatePicked = () => {},
    createRoom = () => {}


 }) => {
     return (
        <ImageBackground
        source={require('../../../../../Media/background.png')}
        style = {styles.container}>

            <HeaderComponent
                onGoProfile = {() => onGoProfile()}
            />

            <View style= {styles.TopContainer}>
                <TouchableOpacity
                    onPress = {() => goBack()}>
                    <Image
                        source = {require('../../../../../Media/Profile/leftArrow.png')}
                        style = {styles.leftArrowStyle}
                        resizeMode = 'center'
                    />
                </TouchableOpacity>

                <View style = {styles.titleContainer}>
                    <Text style ={styles.textTitle}>Phòng chơi bạn bè</Text>
                </View>
            </View>

            <View style={styles.bodyContainer}>
                <FlatList
                    style = {styles.flatListStyle} 
                    data = {listRoom}
                    keyExtractor = {(item) => item.roomName.toString()}
                    renderItem = {({item}) => {
                        return (
                       <TouchableOpacity
                        style = {{marginBottom:5}}
                            onPress = {() => {
                                if (item.security)
                                showModalJoinRoom(item)
                                else goToRoom(item)}
                            }>
                                
                            <ItemRoomList
                                item = {item}
                            />
                       </TouchableOpacity>                        
                    )}}
                />

                <View style = {styles.buttonCreateRoomContainer}>
                        <TouchableOpacity
                            onPress = {() =>  showModalCreateRoom()}>
                            <Image
                                source = {require('../../../../../Media/Game/createBtn.png')}
                                style = {styles.createRoomBtn}
                                resizeMode = "center"
                            />
                        </TouchableOpacity>
                </View>
            </View>

            <Modal
                isVisible = {joinRoomVisible}
                onBackdropPress={() => hideModalJoinRoom()}
                style = {styles.modalJoinRoomStyle}>

                <TouchableOpacity 
                    onPress = {() => hideModalJoinRoom()}
                    style = {styles.closeBtnContainer}>
                    <Image
                        source = {require('../../../../../Media/Game/closeBtn.png')}
                        style = {styles.closeBtn}
                    />
                </TouchableOpacity>

                <Text style = {styles.textTitleModal}>PASSWORD</Text>

                <View style = {{flex:3}}>
                    <Text style = {styles.textPlaceHolderModal}>Nhập password</Text>
                    <TextInput
                        style = {styles.textInputStyleModal}
                        secureTextEntry = {true}
                        placeholder = '******'
                        placeholderTextColor = "#fff"
                        onChangeText = {(text) => onChangePasswordModalJoin(text)}
                        value = {joinModalValuePassword}
                    />
                </View>

                <View style = {styles.confirmContainer}>
                        <View></View>
                        <TouchableOpacity 
                            onPress = {() => joinToRoom()}
                            style = {styles.joinBtn}>
                            <Text style = {styles.textConfirmBtn}>ĐỒNG Ý</Text>
                        </TouchableOpacity>
                </View>
            </Modal>

            <Modal 
                isVisible = {createRoomVisible}
                onBackdropPress={() => hideModalCreateRoom()}
                style = {styles.modalCreateRoomStyle}>
                
                    <TouchableOpacity 
                        onPress = {() => hideModalCreateRoom()}
                        style = {styles.closeBtnContainer}>
                        <Image
                            source = {require('../../../../../Media/Game/closeBtn.png')}
                            style = {styles.closeBtn}
                        />
                    </TouchableOpacity>

                    <Text style = {styles.textTitleModal}>TẠO PHÒNG</Text>

                    <View style = {{flex:3}}>
                        <Text style = {styles.textPlaceHolderModal}>Tên phòng</Text>
                        <TextInput
                            style = {styles.textInputStyleModal}
                            onChangeText = {(text) => onChangeRoomNameModalCreate(text)}
                            value = {createModalValueRoomName}
                        />
                    </View>

                    <View style = {{flex:3}}>
                        <Text style = {styles.textPlaceHolderModal}>Mật khẩu phòng</Text>
                        <TextInput
                            style = {styles.textInputStyleModal}
                            secureTextEntry = {true}
                            placeholder = '******'
                            placeholderTextColor = "#fff"
                            onChangeText = {(text) => onChangePasswordModalCreate(text)}
                            value = {createModalValuePassword}
                        />
                    </View>

                    <View style = {styles.confirmContainer}>
                            <TouchableOpacity
                                onPress= {() => {_showTimePicker()}}
                                style = {styles.timePickerContainer}>
                                <Text style = {styles.textTimePicker}>{timeStartValue}</Text>
                                <Image
                                    source = {require('../../../../../Media/Game/clock.png')}
                                    style = {styles.timePickerIcon}
                                />
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress = {() => createRoom()}
                                style = {styles.joinBtn}>
                                <Text style = {styles.textConfirmBtn}>ĐỒNG Ý</Text>
                            </TouchableOpacity>
                    </View>
            </Modal>

            <DateTimePicker
                mode = 'time'
                isVisible={TimePickerVisible}
                onConfirm={(time) => _handleDatePicked(time)}
                onCancel={() => _hideDateTimePicker()}
            />
        </ImageBackground>
     )
 }