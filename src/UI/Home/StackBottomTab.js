import React from 'react';

import { StyleSheet, Image } from 'react-native';

import {
    createBottomTabNavigator, createStackNavigator
} from 'react-navigation';
import HomeScreen from './HomeScreen.js';
import Gift from './Gift/index.js';
import News from './News/index.js';
import Rank from './Rank/index.js'

const GameStack = createStackNavigator({
    HomeScreen:HomeScreen
},{
    headerMode: "none"
})

export const BottomTabStack = createBottomTabNavigator(
{
    Home: {
        screen: GameStack,
        navigationOptions: () => ({
            tabBarIcon: <Image source={require('../../../Media/Home/home.png')} style={styles.inputIcon} />
        })
    },
    News:{
        screen: News,
        navigationOptions: () => ({
            tabBarIcon: <Image source={require('../../../Media/Home/file.png')} style={styles.inputIcon} />
        })
    },
    Gift:{
        screen: Gift,
        navigationOptions: () => ({
            tabBarIcon: <Image source={require('../../../Media/Home/gift.png')} style={styles.inputIcon} />
        })
    },
    Rank:{
        screen: Rank,
        navigationOptions: () => ({
            tabBarIcon: <Image source={require('../../../Media/Home/rank.png')} style={styles.inputIcon} />
        })
    },
},
{
    tabBarOptions: {
        style: {
            backgroundColor: '#01113C',
          },
    }
}
  ,)

const styles = StyleSheet.create({
    inputIcon: {
        marginTop: 10,
        width: 24,
        height: 24,
    }
})