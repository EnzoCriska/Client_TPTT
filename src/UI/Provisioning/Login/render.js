import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ImageBackground,
    Image
} from 'react-native';

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
                            />
                            <Text style={styles.textOther}>FaceBook</Text>
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

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    LogoContainer:{
        flex:2,
        width:'100%',
        justifyContent: 'flex-end',
        alignItems:'center',
    },
    logoStyle:{
        width:'50%',
        height:'50%',
        resizeMode:"center",
    },
    ActionContainer:{
        flex:4,
        width:'100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInput:{
        width:"100%",
        flexDirection: 'row',
        marginBottom:10,
    },
    input:{
        width:'80%',
        height:'100%',
        color:'#fff'
    },
    iconTextInput:{
        height:'90%',
        resizeMode:'center',
        marginLeft: "10%",
    },
    forgot:{
        alignItems:'flex-end',
        width:'80%',
        padding: 5,
    },
    forgotText:{
        color:'#fff'
    },
    loginBtn:{
        width:'80%',
        backgroundColor:'rgba(255,255,255,0.5)',
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:15,
        borderColor:"#fff",
        borderRadius:10,
        borderWidth:1,
        marginVertical: 10,
        marginBottom:20
    },
    textLoginBtn:{
        color:'#fff',
        fontSize: 16,
        fontWeight: 'bold'
    },
    btnOtherLogin:{
        flexDirection:'row',
        width:'80%',
        marginVertical:20,
    },
    other:{
        width:'100%',
        height:50,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        resizeMode:'center',
    },
    textOther:{
        color:'#fff',
        fontSize: 16,
    },
    iconOtherBtn:{
        height:'90%',
        width:30,
        resizeMode:'center',
        marginRight: 10,
    }
})