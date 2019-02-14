import { StyleSheet } from 'react-native';

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
        width:25,
        marginRight: 10,
    }
})