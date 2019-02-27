import React from 'react';
import { 
    View, Text, TouchableOpacity, Image, ImageBackground, TextInput
 } from 'react-native';
import { styles } from './style';
import * as IMG from '../../../../Util/Common/Image';
import Colors from '../../../../Util/Common/Colors';
import Strings from '../../../../Util/Common/Strings';

export const RenderChangePassword = ({
    oldPassword = '',
    newPassword = '',
    reNewPassword = '',
    onChangeOldPassword = () => {},
    onChangeNewPassword = () => {},
    onChangeReNewPassword = () => {},
    onUpdate = () => {}

}) => {
    return (
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
                        source = {IMG.LOCK_ICON_IMG}
                        style = {styles.iconTextInput}
                    />
                    <TextInput
                        style = {styles.input}
                        secureTextEntry = {true}
                        placeholder = {Strings.OLD_PASSWORD}
                        placeholderTextColor = {Colors.GREY}
                        onChangeText = {(text) => onChangeOldPassword(text)}
                        value = {oldPassword}
                    />
            </ImageBackground>

            <ImageBackground
                source={IMG.INPUT_BACKGROUND_IMG}
                style = {styles.textInput}>
                    <Image
                        source = {IMG.LOCK_ICON_IMG}
                        style = {styles.iconTextInput}

                    />
                    <TextInput
                        style = {styles.input}
                        secureTextEntry = {true}
                        placeholder = {Strings.NEW_PASSWORD}
                        placeholderTextColor = {Colors.GREY}
                        onChangeText = {(text) => onChangeNewPassword(text)}
                        value = {newPassword}
                    />
            </ImageBackground>

            <ImageBackground
                source={IMG.INPUT_BACKGROUND_IMG}
                style = {styles.textInput}>
                    <Image
                        source = {IMG.LOCK_ICON_IMG}
                        style = {styles.iconTextInput}
                    />
                    <TextInput
                        style = {styles.input}
                        secureTextEntry = {true}
                        placeholder = {Strings.RE_NEW_PASSWORD}
                        placeholderTextColor = {Colors.GREY}
                        onChangeText = {(text) => onChangeReNewPassword(text)}
                        value = {reNewPassword}
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