import React from 'react';
import {
    View, Text, TouchableOpacity, Image, ImageBackground, StyleSheet, TextInput
} from 'react-native';
import { styles } from '../ConfirmOTP/style';

const uriDefault = '../../../../Media/Provisioning/ImagePicker.png'

export const RenderRegister = ({
    avatar = '',
    userName ='',
    birthDay = '',
    CMND = '',
    onChangeAva = () => {},
    onChangeUserName = () => {},
    onChangeBirthDay = () => {},
    onChangeCMND = () => {},
    onRegister = () => {}
}) => {
    let img = avatar == null ? 
        <Image
            source= {require(uriDefault)}
            style={styles.imagePicker}
        />
    : 
        <Image
            source= {{uri:avatar}}
            style={styles.imagePicker}
        />
    return (
        <ImageBackground
            source ={require('../../../../Media/background.png')}
            style= {styles.container}>
            
            <TouchableOpacity onPress = {onChangeAva}>
                {img}
            </TouchableOpacity>

            <Text style = {styles.textAva}>Cập nhật Avatar</Text>

            <ImageBackground
                source={require('../../../../Media/Provisioning/inputBackground.png')}
                style = {styles.textInput}>
                    <Image
                        source = {require('../../../../Media/Provisioning/user.png')}
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
                source={require('../../../../Media/Provisioning/inputBackground.png')}
                style = {styles.textInput}>
                    <Image
                        source = {require('../../../../Media/Provisioning/calendar.png')}
                        style = {styles.iconTextInput}
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
                source={require('../../../../Media/Provisioning/inputBackground.png')}
                style = {styles.textInput}>
                    <Image
                        source = {require('../../../../Media/Provisioning/lock.png')}
                        style = {styles.iconTextInput}
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
                    onPress = {onRegister}>
                        <Text style = {styles.textLoginBtn}>ĐĂNG KÝ</Text>
            </TouchableOpacity>
        </ImageBackground>
    )
}

