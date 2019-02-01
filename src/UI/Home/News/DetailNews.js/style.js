import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    headerContainer:{
        width:'100%',
        height:80,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent:'space-between'
   },
   leftHeader:{
       flexDirection:'row',
       alignItems:'center'
   },
   headerAvatar:{
       width:60,
       height:60,
       borderRadius: 30,
       marginLeft: 10,
       justifyContent: 'flex-end',
       alignItems:'flex-end'
   },
   imgBGAvatar:{
       borderRadius:30,
       borderColor:'#fff',
       borderWidth: 0.5
   },
   textHeader:{
       fontFamily: 'Roboto',
       color:'#fff',
       fontSize: 16,
       margin:5
   },
   rankIcon:{
       width:30,
       height:30,
       marginRight: -10,
       marginBottom: -5,
   },
   scoreContainer:{
       height:30,
       backgroundColor: '#1A2146',
       borderColor:'#020824',
       borderRadius:3,
       borderWidth:1,
       flexDirection:'row',
       alignItems:'center',
       marginRight:10
   },
   scoreIcon:{
       width:23,
       height:20,
       margin:3,
       resizeMode:'center'
   },
   bodyContainer:{
       flex:1,
        alignItems:'center',
        width:'100%',
        marginBottom:10,
    },
    imageBodyBG:{
        borderRadius:10
    },  
    titleHeader:{
        width:'100%',
        height:'10%',
        flexDirection:'row',
        alignItems:'center',
        paddingLeft: 10,
    },
    textTitle:{
        color : "#fff",
        fontSize : 20,
        marginLeft:20
    },
    imageNews:{
        width:'95%',
        height:'25%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    newsTitleContainer:{
        width:'100%',
        margin:15
    },
    textContentNew:{
        color:"#fff",
        marginHorizontal: 15,
    }
})