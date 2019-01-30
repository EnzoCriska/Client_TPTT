import React from 'react';
import {
    View, Text, StyleSheet, TouchableOpacity, TextInput, Image, ImageBackground
} from 'react-native';

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

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
    },
    body:{
        width:'100%',
        alignItems:'center',
        flex:4
    },
    descripText:{
        color: "#fff",
        fontSize:16,
        marginVertical:20
    },
    LogoContainer:{
        flex:2,
        width:'100%',
        justifyContent: 'flex-end',
        alignItems:'center',
    },
    logoStyle:{
        width:'50%',
        height:80,
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
    loginBtn:{
        width:'80%',
        backgroundColor:'rgba(255,255,255,0.5)',
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:15,
        borderColor:"#fff",
        borderRadius:10,
        borderWidth:1,
        marginVertical: 20,
        marginBottom:20
    },
    textLoginBtn:{
        color:'#fff',
        fontSize: 16,
        fontWeight: 'bold'
    },
})