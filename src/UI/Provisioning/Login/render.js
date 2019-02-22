import React from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ImageBackground,
    Image,
    StatusBar
} from 'react-native';
import { styles } from './style';

export const RenderLogin =  ({
    phone = '',
    password = '',
    onChangePhone = () => {},
    onChangePass = () => {},
    onLogin = () => {},
    onFBLogin = () => {},
    onRegister = () => {},
    onForgotPassword = () => {}

}) => {
    
    return (

        <ImageBackground
            source = {require('../../../../Media/background.png')}
            style = {styles.container}>
            <StatusBar backgroundColor = 'transparent' translucent = {true}/>
            <View style= {styles.LogoContainer}>
                <Image
                    source = {require('../../../../Media/Provisioning/LogoApp.png')}
                    style={styles.logoStyle}
                />
            </View>

            <View style = {styles.ActionContainer}>
                <ImageBackground
                    source = {require('../../../../Media/Provisioning/inputBackground.png')}
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
                
                <ImageBackground
                    source = {require('../../../../Media/Provisioning/inputBackground.png')}
                    style = {styles.textInput}>
                    <Image
                        source = {require('../../../../Media/Provisioning/lock.png')}
                        style = {styles.iconTextInput}
                        resizeMode = 'center'
                    />
                    <TextInput
                        style = {styles.input}
                        placeholder = "Mật khẩu"
                        placeholderTextColor = "grey"
                        secureTextEntry={true}
                     
                        onChangeText = {onChangePass}
                        value = {password}
                    />
                </ImageBackground>

                <TouchableOpacity 
                    style = {styles.forgot}
                    onPress = {onForgotPassword}>
                    <Text style = {styles.forgotText}>Quên mật khẩu?</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style= {styles.loginBtn}
                    onPress = {onLogin}>
                        <Text style = {styles.textLoginBtn}>ĐĂNG NHẬP</Text>
                </TouchableOpacity>
                
                <Text style = {styles.forgotText}>Hoặc đăng nhập bằng</Text>
                
                <View style= {styles.btnOtherLogin}>

                    <TouchableOpacity 
                        style = {{flex:1}}
                        onPress = {onFBLogin}>
                        <ImageBackground 
                            source={require('../../../../Media/Provisioning/FbLoginBtn.png')}
                            style = {styles.other}>
                            <Image
                                source = {require('../../../../Media/Provisioning/fb.png')}
                                style = {styles.iconOtherBtn}
                                resizeMode='center'
                            />
                            <Text style={styles.textOther}>Facebook</Text>
                        </ImageBackground>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style = {{flex:1}}
                        onPress = {onRegister}>
                        <ImageBackground 
                            source={require('../../../../Media/Provisioning/registerBtn.png')}
                            style = {styles.other}>
                            <Text style={styles.textOther}>Đăng ký</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                    
                </View>

            </View>

        </ImageBackground>

    )
}

