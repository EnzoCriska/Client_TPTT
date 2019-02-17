import { StyleSheet } from 'react-native';
import { pointX, pointY } from '../../../Util/Constanst';

export const styles = StyleSheet.create({
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
    forgot:{
        alignSelf: 'flex-end',
        padding: 5,
        marginRight:37 * pointX
    },
    forgotText:{
        color:'#fff'
    },
    loginBtn:{
        width:295.47* pointX,
        height:54.68 * pointY,
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
        width:148 * pointX,
        height:47 * pointY,
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
        height:22 * pointY,
        width:22 * pointX,
        marginRight: 10,
    }
})