import { StyleSheet } from 'react-native';
import { pointX, pointY } from '../../../../Util/Constanst';
import Strings from '../../../../Util/Common/Strings';
import Colors from '../../../../Util/Common/Colors';

export const styles = StyleSheet.create({
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
    logoStyle:{
        width:'50%',
        height:'50%',
        resizeMode:"center",
    },
    textAva:{
        color:'#fff',
        margin: 10,
    },
    textInput:{
        width:375 * pointX,
        height:45 * pointY,
        flexDirection: 'row',
        alignItems:'center',
        marginBottom:10,
    },
    input:{
        width:'80%',
        height:'100%',
        marginLeft:20,
        color:'#fff'
    },
    iconTextInput:{
        height:19 * pointY,
        width:11.88 * pointX,
        marginLeft: 51.13* pointX,
    },
    genderCheckContainer:{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    checkboxBackground:{
        backgroundColor: Strings.TRANSPARENT,
        borderColor:Strings.TRANSPARENT
    },
    checkerTextStyle:{
        color: Colors.WHITE
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
    textGender:{
        color: Colors.WHITE,
        marginLeft: 20
    }
})