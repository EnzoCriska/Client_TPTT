import React from 'react';
import { 
    View, Text, TouchableOpacity, Image, ImageBackground, StyleSheet, TextInput
 } from 'react-native'


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

 const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
    },
    content:{
        width:'100%',
        alignItems:'center',
        marginTop:"30%"
    },
    descripText:{
        color: "#fff",
        fontSize:16,
        marginBottom:20
    },
    logoStyle:{
        width:'50%',
        height:100,
        resizeMode:"center",
    },
    
    textInput:{
        width:"100%",
        marginBottom:10,
        flexDirection: 'row',
        justifyContent: 'center',
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