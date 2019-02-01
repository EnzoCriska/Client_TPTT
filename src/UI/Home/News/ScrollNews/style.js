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
        width:'100%'
    },
   scrollView:{
       width:'95%',
       flex:1,
       marginTop: 10,
   },
   flatlistStyle:{

   }
})