import { StyleSheet } from 'react-native';

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