import React from 'react';
import {
    ImageBackground, ActivityIndicator, StyleSheet, StatusBar
} from 'react-native';
import Strings from '../Common/Strings';
import Colors from '../Common/Colors';
export const Loading = () => {
return (
    <ImageBackground
        source = {require('../../../Media/background.png')}
        style = {styles.container}>
        <StatusBar backgroundColor = {Strings.TRANSPARENT} translucent = {true}/>
        <ActivityIndicator size="large" color={Colors.GREEN}/>
    </ImageBackground>
)
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})