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
import * as IMG from '../../../Util/Common/Image';
import Colors from '../../../Util/Common/Colors';
import Strings from '../../../Util/Common/Strings';

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
            source ={IMG.BACKGROUND_IMG}
            style= {styles.container}>

            <Image
                source = {IMG.LOGO_APP_IMG}
                style = {styles.logoAppStyle}
            />
            

            <ImageBackground
                source={IMG.INPUT_BACKGROUND_IMG}
                style = {styles.textInput}>
                    <Image
                        source = {IMG.USER_ICON_IMG}
                        style = {styles.iconTextInput}
                    />
                    <TextInput
                        style = {styles.input}
                        placeholder = {Strings.USER_NAME_VI}
                        placeholderTextColor = {Colors.GREY}
                        onChangeText = {onChangeUserName}
                        value = {userName}
                    />
            </ImageBackground>

            <ImageBackground
                source={IMG.INPUT_BACKGROUND_IMG}
                style = {styles.textInput}>
                    <Image
                        source = {IMG.LOCK_ICON_IMG}
                        style = {styles.iconTextInput}
                        resizeMode = {Strings.CENTER}
                    />
                    <TextInput
                        style = {styles.input}
                        placeholder = {Strings.PASSWORD_VI}
                        secureTextEntry = {true}
                        placeholderTextColor = {Colors.GREY}
                        onChangeText = {onChangePassword}
                        value = {password}
                    />
            </ImageBackground>

            <ImageBackground
                source={IMG.INPUT_BACKGROUND_IMG}
                style = {styles.textInput}>
                    <Image
                        source = {IMG.LOCK_ICON_IMG}
                        style = {styles.iconTextInput}
                        resizeMode = {Strings.CENTER}
                    />
                    <TextInput
                        style = {styles.input}
                        placeholder = {Strings.RE_PASSWORD_VI}
                        secureTextEntry = {true}
                        placeholderTextColor = {Colors.GREY}
                        onChangeText = {onReChangePassword}
                        value = {rePassword}
                    />
            </ImageBackground>

            <TouchableOpacity 
                    style= {styles.loginBtn}
                    onPress = {onRegister}>
                        <Text style = {styles.textLoginBtn}>{Strings.SIGN_UP}</Text>
            </TouchableOpacity>
        </ImageBackground>
        </TouchableWithoutFeedback>
    )
}

