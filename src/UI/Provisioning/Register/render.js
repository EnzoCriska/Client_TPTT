import React from 'react';
import {
    View, 
    Text, 
    TouchableOpacity, 
    Image, 
    ImageBackground, 
    TextInput,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native';
import { styles } from './style';

const uriDefault = '../../../../Media/Provisioning/ImagePicker.png'

export const RenderRegister = ({
    userName ='',
    password = '',
    rePassword = '',
    onChangeUserName = () => {},
    onChangePassword = () => {},
    onReChangePassword = () => {},
    onRegister = () => {}
}) => {
    return (
        <TouchableWithoutFeedback onPress = {Keyboard.dismiss} accessible = {false}>
        <ImageBackground
            source ={require('../../../../Media/background.png')}
            style= {styles.container}>

            <Image
                source = {require('../../../../Media/Provisioning/LogoApp.png')}
                style = {styles.logoAppStyle}
            />
            

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
                        source = {require('../../../../Media/Provisioning/lock.png')}
                        style = {styles.iconTextInput}
                        resizeMode = 'center'
                    />
                    <TextInput
                        style = {styles.input}
                        placeholder = "Password"
                        secureTextEntry = {true}
                        placeholderTextColor = "grey"
                        onChangeText = {onChangePassword}
                        value = {password}
                    />
            </ImageBackground>

            <ImageBackground
                source={require('../../../../Media/Provisioning/inputBackground.png')}
                style = {styles.textInput}>
                    <Image
                        source = {require('../../../../Media/Provisioning/lock.png')}
                        style = {styles.iconTextInput}
                        resizeMode = 'center'
                    />
                    <TextInput
                        style = {styles.input}
                        placeholder = "Re Password"
                        secureTextEntry = {true}
                        placeholderTextColor = "grey"
                        onChangeText = {onReChangePassword}
                        value = {rePassword}
                    />
            </ImageBackground>

            <TouchableOpacity 
                    style= {styles.loginBtn}
                    onPress = {onRegister}>
                        <Text style = {styles.textLoginBtn}>ĐĂNG KÝ</Text>
            </TouchableOpacity>
        </ImageBackground>
        </TouchableWithoutFeedback>
    )
}

