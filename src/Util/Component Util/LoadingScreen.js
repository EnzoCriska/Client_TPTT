import React from 'react';
import {
    ImageBackground, ActivityIndicator, StyleSheet
} from 'react-native';
export const Loading = () => {
return (
    <ImageBackground
        source = {require('../../../Media/background.png')}
        style = {styles.container}>
        <StatusBar backgroundColor = {Strings.TRANSPARENT} translucent = {true}/>
        <ActivityIndicator size="large" color="#00ff00"/>
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