import React from 'react';
import {
    View, Text, TouchableOpacity, Image, ImageBackground, StyleSheet, TextInput
} from 'react-native';
import { styles } from './style';

import * as IMG from '../../../../Util/Image';

export const RenderUpdateInfo = ({
    avatar = '',
    userName ='',
    birthDay = '',
    CMND = '',
    onChangeAva = () => {},
    onChangeUserName = () => {},
    onChangeBirthDay = () => {},
    onChangeCMND = () => {},
    onUpdate = () => {}
}) => {
    let img = avatar == null ? 
        <Image
            source= {IMG.DEFAULT_AVATAR_IMG}
            style={styles.imagePicker}
        />
    : 
        <Image
            source= {{uri:avatar}}
            style={styles.imagePicker}
        />
    return (
        <ImageBackground
            source ={require('../../../../../Media/background.png')}
            style= {styles.container}>
            
            <TouchableOpacity onPress = {onChangeAva}>
                {img}
            </TouchableOpacity>

            <Text style = {styles.textAva}>Cập nhật Avatar</Text>

            <ImageBackground
                source={require('../../../../../Media/Provisioning/inputBackground.png')}
                style = {styles.textInput}>
                    <Image
                        source = {require('../../../../../Media/Provisioning/user.png')}
                        style = {styles.iconTextInput}
                    />
                    <TextInput
                        style = {styles.input}
                        placeholder = "Tên đăng nhập"
                        placeholderTextColor = "grey"
                        onChangeText = {onChangeUserName}
                        value = {userName}
                    />
            </ImageBackground>

            <ImageBackground
                source={require('../../../../../Media/Provisioning/inputBackground.png')}
                style = {styles.textInput}>
                    <Image
                        source = {require('../../../../../Media/Provisioning/calendar.png')}
                        style = {styles.iconTextInput}
                        resizeMode = 'center'
                    />
                    <TextInput
                        style = {styles.input}
                        placeholder = "Ngày sinh"
                        keyboardType = 'numeric'
                        placeholderTextColor = "grey"
                        onChangeText = {onChangeBirthDay}
                        value = {birthDay}
                    />
            </ImageBackground>

            <ImageBackground
                source={require('../../../../../Media/Provisioning/inputBackground.png')}
                style = {styles.textInput}>
                    <Image
                        source = {require('../../../../../Media/Provisioning/lock.png')}
                        style = {styles.iconTextInput}
                        resizeMode = 'center'
                    />
                    <TextInput
                        style = {styles.input}
                        keyboardType = 'numeric'
                        placeholder = "Số CMND"
                        placeholderTextColor = "grey"
                        onChangeText = {onChangeCMND}
                        value = {CMND}
                    />
            </ImageBackground>

            <TouchableOpacity 
                    style= {styles.loginBtn}
                    onPress = {onUpdate}>
                        <Text style = {styles.textLoginBtn}>CẬP NHẬT</Text>
            </TouchableOpacity>
        </ImageBackground>
    )
}

