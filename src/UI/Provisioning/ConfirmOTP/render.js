import React from 'react';
import { 
    View, Text, TouchableOpacity, Image, ImageBackground, StyleSheet, TextInput
 } from 'react-native'
import { styles } from '../../Home/News/ScrollNews/style';


 export const RenderConfirmOTP = ({
    OTP ='',
    onChangeOTP = () => {},
    onConfirm = () => {}

 }) => {

     return(
         <ImageBackground
            source= {require('../../../../Media/background.png')}
            style = {styles.container}>
            <View style={styles.content}>
                <Image
                    style={styles.logoStyle}
                    source={require('../../../../Media/Provisioning/LogoApp.png')}
                />
                <Text style = {styles.descripText}>Nhập mã xác thực được gửi về số ĐT của bạn</Text>
                <ImageBackground
                    source={require('../../../../Media/Provisioning/inputBackground.png')}
                    style={styles.textInput}>
                    <TextInput
                        style = {styles.input}
                        onChangeText = {onChangeOTP}
                        placeholder = "Mã xác thực"
                        placeholderTextColor = "grey"
                        value = {OTP}
                    />
                </ImageBackground>

                <TouchableOpacity 
                    style= {styles.loginBtn}
                    onPress = {onConfirm}>
                        <Text style = {styles.textLoginBtn}>ĐĂNG KÝ</Text>
            </TouchableOpacity>

            </View>
         </ImageBackground>
     )
 }

 