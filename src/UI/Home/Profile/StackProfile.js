import React from 'react'
import {
    createStackNavigator
} from 'react-navigation';
import Info from './Info';
import HomeScreen from '../HomeScreen.js';

export const StackProfile = createStackNavigator({
    Info: Info,
    Home: HomeScreen

}, {headerMode: 'none'})