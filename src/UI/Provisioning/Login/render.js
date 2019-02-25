import React from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ImageBackground,
    Image,
    StatusBar,
    Keyboard,
    TouchableWithoutFeedback
} from 'react-native';
import { styles } from './style';
import Strings from '../../../Util/Strings';
import Colors from '../../../Util/Colors';

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
        <TouchableWithoutFeedback 
            onPress = {Keyboard.dismiss} 
            accessible={false}>
            <ImageBackground
                source = {require('../../../../Media/background.png')}
                style = {styles.container}>

                <StatusBar backgroundColor = {Strings.TRANSPARENT} translucent = {true}/>

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
                            textContentType = {Strings.TELEPHONENUMBER}
                            keyboardType = {Strings.NUMRIC}
                            placeholder = {Strings.PHONE_NUMBER_VI}
                            placeholderTextColor = {Colors.GREY}
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
                            placeholder = {Strings.PASSWORD_VI}
                            placeholderTextColor = {Colors.GREY}
                            secureTextEntry={true}
                        
                            onChangeText = {onChangePass}
                            value = {password}
                        />
                    </ImageBackground>

                    <TouchableOpacity 
                        style = {styles.forgot}
                        onPress = {onForgotPassword}>
                        <Text style = {styles.forgotText}>{Strings.FORGOT_PASSWORD}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style= {styles.loginBtn}
                        onPress = {onLogin}>
                            <Text style = {styles.textLoginBtn}>{Strings.LOG_IN}</Text>
                    </TouchableOpacity>
                    
                    <Text style = {styles.forgotText}>{Strings.OR_LOGIN_BY}</Text>
                    
                    <View style= {styles.btnOtherLogin}>

                        <TouchableOpacity 
                            style = {styles.flex1}
                            onPress = {onFBLogin}>
                            <ImageBackground 
                                source={require('../../../../Media/Provisioning/FbLoginBtn.png')}
                                style = {styles.other}>
                                <Image
                                    source = {require('../../../../Media/Provisioning/fb.png')}
                                    style = {styles.iconOtherBtn}
                                    resizeMode='center'
                                />
                                <Text style={styles.textOther}>{Strings.FACEBOOK}</Text>
                            </ImageBackground>
                        </TouchableOpacity>

                        <TouchableOpacity 
                            style = {styles.flex1}
                            onPress = {onRegister}>
                            <ImageBackground 
                                source={require('../../../../Media/Provisioning/registerBtn.png')}
                                style = {styles.other}>
                                <Text style={styles.textOther}>{Strings.SIGN_UP}</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                        
                    </View>

                </View>

            </ImageBackground>
        </TouchableWithoutFeedback>
    )
}

