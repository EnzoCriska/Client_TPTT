import React from 'react'
import {  } from 'react-native';

import {
    createStackNavigator
} from 'react-navigation'
import ScrollNews from './ScrollNews';
import { StackProfile } from '../Profile/StackProfile';
import Info from '../Profile/Info';
import DetailNews from './DetailNews.js';


export const StackNews = createStackNavigator({
    Scroll: ScrollNews,
    Detail:DetailNews,
    __Profile: StackProfile
},{
    headerMode:'none'
})


StackNews.navigationOptions = ({ navigation }) => {
    let tabBarVisible = false;
    var stack = navigation.state.routes

    console.log(stack[stack.length -1].routeName)

    if (stack[stack.length -1].routeName == 'Scroll') {
        tabBarVisible = true;
    }
    return {
        tabBarVisible,
    };
};
