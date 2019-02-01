import React from 'react';
import {
    View, Text, StyleSheet, TouchableOpacity, TextInput, Image, ImageBackground
} from 'react-native';
import { styles } from '../../Home/News/DetailNews.js/style';

export const RenderUpdatePhoneNumber = ({
    phone = '',
    onChangePhone = () => {},
    onUpdate = () => {}
}) => {
    return(
        <ImageBackground
            source = {require('../../../../Media/background.png')}
            style={styles.container}>
            <View style = {styles.LogoContainer}>
                <Image
                    source={require('../../../../Media/Provisioning/LogoApp.png')}
                    style={styles.logoStyle}
                />
                <Text style = {styles.descripText}>Cập nhật số điện thoại của bạn</Text>
            </View>
            <View style={styles.body}>
                
                <ImageBackground
                    source={require('../../../../Media/Provisioning/inputBackground.png')}
                    style = {styles.textInput}>
                    <Image
                        source = {require('../../../../Media/Provisioning/smartphone.png')}
                        style = {styles.iconTextInput}
                    />
                    <TextInput
                        style = {styles.input}
                        textContentType = 'telephoneNumber'
                        keyboardType = 'numeric'
                        placeholder = "Số điện thoại"
                        placeholderTextColor = "grey"
                        onChangeText = {onChangePhone}
                        value = {phone}
                    />
                </ImageBackground>
                <TouchableOpacity 
                    style= {styles.loginBtn}
                    onPress = {onUpdate}>
                        <Text style = {styles.textLoginBtn}>ĐĂNG NHẬP</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}

