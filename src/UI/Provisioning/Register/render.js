import React from 'react';
import {
    View, Text, TouchableOpacity, Image, ImageBackground, StyleSheet, TextInput
} from 'react-native';

const uriDefault = '../../../../Media/Provisioning/ImagePicker.png'

export const RenderRegister = ({
    avatar = '',
    userName ='',
    birthDay = '',
    CMND = '',
    onChangeAva = () => {},
    onChangeUserName = () => {},
    onChangeBirthDay = () => {},
    onChangeCMND = () => {},
    onRegister = () => {}
}) => {
    let img = avatar == null ? 
        <Image
            source= {require(uriDefault)}
            style={styles.imagePicker}
        />
    : 
        <Image
            source= {{uri:avatar}}
            style={styles.imagePicker}
        />
    return (
        <ImageBackground
            source ={require('../../../../Media/background.png')}
            style= {styles.container}>
            
            <TouchableOpacity onPress = {onChangeAva}>
                {img}
            </TouchableOpacity>

            <Text style = {styles.textAva}>Cập nhật Avatar</Text>

            <ImageBackground
                source={require('../../../../Media/Provisioning/inputBackground.png')}
                style = {styles.textInput}>
                    <Image
                        source = {require('../../../../Media/Provisioning/user.png')}
                        style = {styles.iconTextInput}
                    />
                    <TextInput
                        style = {styles.input}
                        placeholder = "Tên đăng nhập"
                        placeholderTextColor = "grey"
                        onChangeText = {onChangeUserName}
                        value = {userName}
                    />
            </ImageBackground>

            <ImageBackground
                source={require('../../../../Media/Provisioning/inputBackground.png')}
                style = {styles.textInput}>
                    <Image
                        source = {require('../../../../Media/Provisioning/calendar.png')}
                        style = {styles.iconTextInput}
                    />
                    <TextInput
                        style = {styles.input}
                        placeholder = "Ngày sinh"
                        keyboardType = 'numeric'
                        placeholderTextColor = "grey"
                        onChangeText = {onChangeBirthDay}
                        value = {birthDay}
                    />
            </ImageBackground>

            <ImageBackground
                source={require('../../../../Media/Provisioning/inputBackground.png')}
                style = {styles.textInput}>
                    <Image
                        source = {require('../../../../Media/Provisioning/lock.png')}
                        style = {styles.iconTextInput}
                    />
                    <TextInput
                        style = {styles.input}
                        keyboardType = 'numeric'
                        placeholder = "Số CMND"
                        placeholderTextColor = "grey"
                        onChangeText = {onChangeCMND}
                        value = {CMND}
                    />
            </ImageBackground>

            <TouchableOpacity 
                    style= {styles.loginBtn}
                    onPress = {onRegister}>
                        <Text style = {styles.textLoginBtn}>ĐĂNG KÝ</Text>
            </TouchableOpacity>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imagePicker:{
        width:120,
        height:120,
        borderRadius:60,
        borderColor:"#fff",
        borderWidth:0.5
    },
    textAva:{
        color:'#fff',
        margin: 10,
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
        marginTop: 50,
    },
    textLoginBtn:{
        color:'#fff',
        fontSize: 16,
        fontWeight: 'bold'
    },
})