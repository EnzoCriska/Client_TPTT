import { styles } from "./style";
import React from 'react';

import { ImageBackground, View, Text } from 'react-native';
import { Avatar } from "react-native-elements";
export const ItemRank = ({
    index = '',
    avatarUrl = '',
    userName = '',
    level = null
}) => (
    <ImageBackground 
        style = {styles.itemRank}
        source = {require('../../../../../Media/Rank/itemBackground.png')}
        resizeMode = 'stretch'>
        <View style = {{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text style = {{color:'#FFA927', fontSize:16}}>{index+3}</Text>
        </View>
        {/* {console.log(avatarUrl)} */}
        <View style = {{flex:1}}>
            <Avatar
                source = {{uri:avatarUrl}}
                size = 'medium'
                rounded
            />
        </View>

        <View style = {{flex:4}}>
            <Text style = {{color: '#fff', fontSize:16}}>{userName}</Text>
            <Text style = {{color:'grey'}}>Level {level}</Text>
        </View>
    </ImageBackground>
)