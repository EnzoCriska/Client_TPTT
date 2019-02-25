import { StyleSheet } from 'react-native';
import { pointX, pointY } from '../../../Util/Constanst';

export const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
    },
    content:{
        width:'100%',
        alignItems:'center',
        marginTop:"30%",
        flex:1
    },
    descripText:{
        color: "#fff",
        fontSize:14,
        marginBottom:20
    },
    logoStyle:{
        width:'50%',
        height:100,
        resizeMode:"center",
    },
    
    textInput:{
        width:375 * pointX,
        height: 45 * pointY,
        marginBottom:10,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    input:{
        width:'80%',
        // height:'100%',
        color:'#fff',
        marginLeft:5
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