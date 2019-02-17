import { StyleSheet } from 'react-native';
import { pointX, pointY } from '../../../Util/Constanst';

export const styles = StyleSheet.create({
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
        height:19 * pointX,
        width:11.88 * pointX,
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
        marginVertical: 20,
        marginBottom:20
    },
    textLoginBtn:{
        color:'#fff',
        fontSize: 16,
        fontWeight: 'bold'
    },
})