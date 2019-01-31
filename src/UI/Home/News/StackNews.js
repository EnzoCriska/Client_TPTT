import React from 'react'
import {  } from 'react-native';

import {
    createStackNavigator
} from 'react-navigation'
import ScrollNews from './ScrollNews';
import { StackProfile } from '../Profile/StackProfile';
import Info from '../Profile/Info';


export const StackNews = createStackNavigator({
    Scroll: ScrollNews,
    __Profile: Info
},{
    headerMode:'none'
})


StackNews.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    var stack = navigation.state.routes

    if (stack[stack.length -1].routeName != 'Scroll') {
        tabBarVisible = false;
    }
    return {
        tabBarVisible,
    };
};
