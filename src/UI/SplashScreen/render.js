import React from 'react';
import { 
    View, Text, Image, ImageBackground
 } from 'react-native';
import { styles } from './style';

 export const RenderSplash = ({

 }) => {
     return (
         <ImageBackground
            source = {require('../../../Media/background.png')}
            style = {styles.container}>
            <Image
                source = {require('../../../Media/Provisioning/LogoApp.png')}
                style = {styles.logoApp}
            />
            <Text style = {styles.textAppName}>Triệu phú tri thức</Text>
         </ImageBackground>
     )
 }