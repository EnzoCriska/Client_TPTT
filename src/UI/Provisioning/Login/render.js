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

import * as IMG from '../../../Util/Image';

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
                source = {IMG.BACKGROUND_IMG}
                style = {styles.container}>

                <StatusBar backgroundColor = {Strings.TRANSPARENT} translucent = {true}/>

                <View style= {styles.LogoContainer}>
                    <Image
                        source = {IMG.LOGO_APP_IMG}
                        style={styles.logoStyle}
                    />
                </View>

                <View style = {styles.ActionContainer}>
                    <ImageBackground
                        source = {IMG.INPUT_BACKGROUND_IMG}
                        style = {styles.textInput}>
                        <Image
                            source = {IMG.SMARTPHONE_ICON_IMG}
                            style = {styles.iconTextInput}
                        />
                        <TextInput
                            style = {styles.input}
                            placeholder = {Strings.PHONE_NUMBER_VI}
                            placeholderTextColor = {Colors.GREY}
                            onChangeText = {onChangePhone}
                            value = {phone}
                        />
                    </ImageBackground>
                    
                    <ImageBackground
                        source = {IMG.INPUT_BACKGROUND_IMG}
                        style = {styles.textInput}>
                        <Image
                            source = {IMG.LOCK_ICON_IMG}
                            style = {styles.iconTextInput}
                            resizeMode = {Strings.CENTER}
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
                                source={IMG.FB_LOGIN_BTN_BG_IMG}
                                style = {styles.other}>
                                <Image
                                    source = {IMG.FB_ICON_IMG}
                                    style = {styles.iconOtherBtn}
                                    resizeMode={Strings.CENTER}
                                />
                                <Text style={styles.textOther}>{Strings.FACEBOOK}</Text>
                            </ImageBackground>
                        </TouchableOpacity>

                        <TouchableOpacity 
                            style = {styles.flex1}
                            onPress = {onRegister}>
                            <ImageBackground 
                                source={IMG.REGISTER_BTN_BG_IMG}
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

