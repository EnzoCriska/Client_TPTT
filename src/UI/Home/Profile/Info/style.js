import { StyleSheet } from 'react-native';
import { pointX, pointY } from '../../../../Util/Constanst';

export const styles = StyleSheet.create({
    container:{
        flex:1
    },
    headerContainer:{
        width:'100%',
        height:45.75 * pointY,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent:'space-between'
   },
   leftHeader:{
       flex:1,
       justifyContent: 'center',
       alignItems:'center'
   },
   midHeader:{
       flex:7,
       justifyContent: 'center',
       alignItems:'center'
   },
   rightHeader:{
    flex:1,
    justifyContent: 'center',
    alignItems:'center'
    },
    iconHeader:{
        width:50,
        height:50
    },
    titleHeader:{
        color:'#fff',
        fontSize: 20,
        fontFamily: 'Roboto',
    },
    body:{
        flex:1,
        width:'100%',
        marginTop: 20,
        alignItems:'center'
    },
    avatarStyle:{
        width:150,
        height:150,
        borderColor: "grey",
        borderWidth: 3,
        borderRadius: 75,
        margin:10
    },
    Parameter:{
        marginHorizontal:25,
        flexDirection:'row',
        marginVertical: 20,
    },
    dataParameter:{
        flex:1,
        marginHorizontal:4,
        backgroundColor: '#1A2146',
        borderRadius:3,
        height:20,
        borderColor:'#020824',
        borderWidth:1,
        flexDirection:'row',
        justifyContent: 'space-between',
        paddingHorizontal: 3,
        alignItems: 'center',
    },
    iconData:{
        width:15,
        height:15
    },
    textData:{
        color:'#fff',
        fontSize:14
    },
    textValue:{
        color:'#E57622',
        fontSize:14
    },
    moreInfo:{
        flex:1,
        width:'90%',
    },
    selectMore:{
        width:'100%',
        height:50,
        backgroundColor: '#041650',
        borderRadius:10,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:15,
        alignItems:'center',
        marginBottom: 5,
    }
})