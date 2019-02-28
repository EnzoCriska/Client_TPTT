import React from 'react';
import {
    View, Text, TouchableOpacity, Image, ImageBackground, StyleSheet, TextInput
} from 'react-native';

import { CheckBox } from 'react-native-elements'

import { styles } from './style';

import * as IMG from '../../../../Util/Common/Image';
import Strings from '../../../../Util/Common/Strings';
import Colors from '../../../../Util/Common/Colors';

export const RenderUpdateInfo = ({
    avatar = '',
    displayName ='',
    address = '',
    male = true,
    female = false,
    // CMND = '',
    onChangeAva = () => {},
    onChangeDisplayName = () => {},
    onChangeAddress = () => {},
    onSetChecker = () => {},

    // onChangeCMND = () => {},
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
            source ={IMG.BACKGROUND_IMG}
            style= {styles.container}>
            
            <TouchableOpacity onPress = {onChangeAva}>
                {img}
            </TouchableOpacity>

            <Text style = {styles.textAva}>{Strings.UPDATE_AVATAR}</Text>

            <ImageBackground
                source={IMG.INPUT_BACKGROUND_IMG}
                style = {styles.textInput}>
                    <Image
                        source = {IMG.USER_ICON_IMG}
                        style = {styles.iconTextInput}
                    />
                    <TextInput
                        style = {styles.input}
                        placeholder = {Strings.DISPLAY_NAME}
                        placeholderTextColor = {Colors.GREY}
                        onChangeText = {onChangeDisplayName}
                        value = {displayName}
                    />
            </ImageBackground>

            <ImageBackground
                source={IMG.INPUT_BACKGROUND_IMG}
                style = {styles.textInput}>
                    <Image
                        source = {require('../../../../../Media/Provisioning/calendar.png')}
                        style = {styles.iconTextInput}
                        resizeMode = {Strings.CENTER}
                    />
                    <TextInput
                        style = {styles.input}
                        placeholder = {Strings.ADDRESS}
                        placeholderTextColor = {Colors.GREY}
                        onChangeText = {onChangeAddress}
                        value = {address}
                    />
            </ImageBackground>

            <View style = {styles.genderCheckContainer}>
                <CheckBox
                    center
                    title='Nam'
                    textStyle = {styles.checkerTextStyle}
                    checkedColor = {Colors.WHITE}
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    checked={male}
                    containerStyle = {styles.checkboxBackground}
                    onPress={() => onSetChecker()}
                />

                <CheckBox
                    center
                    title='Nữ'
                    textStyle = {styles.checkerTextStyle}
                    checkedColor = {Colors.WHITE}
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    checked={female}
                    containerStyle = {styles.checkboxBackground}
                    onPress={() => onSetChecker()}
                />

            </View>

            {/* <ImageBackground
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
            </ImageBackground> */}

            <TouchableOpacity 
                    style= {styles.loginBtn}
                    onPress = {onUpdate}>
                        <Text style = {styles.textLoginBtn}>CẬP NHẬT</Text>
            </TouchableOpacity>
        </ImageBackground>
    )
}

