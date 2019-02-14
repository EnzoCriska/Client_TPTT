import React from 'react'
import {
    createStackNavigator
} from 'react-navigation';
import Info from './Info';
import HomeScreen from '../HomeScreen';


export const StackProfile = createStackNavigator({
    Info: Info,
    Home: HomeScreen

}, {headerMode: 'none'})