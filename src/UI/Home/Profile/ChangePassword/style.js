import {StyleSheet} from 'react-native';
import { pointX, pointY } from '../../../../Util/Constanst';

export const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoAppStyle:{
        width: 195.34 * pointX,
        height: 97.62 * pointY,
        marginBottom: 46.35 * pointY
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
        height:15.64 * pointY,
        width:12.36 * pointX,
        marginLeft: 51.13* pointX,
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