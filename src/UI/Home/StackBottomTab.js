import React from 'react';

import { StyleSheet, Image } from 'react-native';

import {
    createBottomTabNavigator, createStackNavigator
} from 'react-navigation';


import Gift from './Gift/index.js';


import { StackNews } from './News/StackNews.js';
import { StackProfile } from './Profile/StackProfile.js';
import { RankingStack } from './Rank/RankStack.js';

import GameStack from './Game/GameStack.js';
import FriendStack from './Friends/friendsStack.js';
import { pointX, pointY } from '../../Util/Constanst.js';

export const BottomTabStack = createBottomTabNavigator(
{
    Home: {
        screen: GameStack,
        navigationOptions: ({navigation}) => ({
            tabBarIcon: ({focused}) => {
                return focused ? 
                    <Image 
                        source={require('../../../Media/Home/BottomTabIcon/home1.png')} 
                        style={styles.inputIcon} 
                        /> : 
                    <Image 
                        source={require('../../../Media/Home/BottomTabIcon/home.png')}
                        style={styles.inputIcon} 
                        />
            }
        })
    },
    News:{
        screen: StackNews,
        navigationOptions: () => ({
            tabBarIcon: ({focused}) => {
                return focused ? 
                    <Image 
                        source={require('../../../Media/Home/BottomTabIcon/file1.png')} 
                        style={styles.inputIcon} 
                        /> : 
                    <Image 
                        source={require('../../../Media/Home/BottomTabIcon/file.png')} 
                        style={styles.inputIcon} 
                        />
            }
        })
    },
    Gift:{
        screen: Gift,
        navigationOptions: () => ({
            tabBarIcon: ({focused}) => {
                return focused ? 
                    <Image 
                        source={require('../../../Media/Home/BottomTabIcon/gift.png')} 
                        style={styles.inputIcon} 
                        /> : 
                    <Image 
                        source={require('../../../Media/Home/BottomTabIcon/gift.png')} 
                        style={styles.inputIcon} 
                        />
            }
        })
    },
    Rank:{
        screen: RankingStack,
        navigationOptions: () => ({
            tabBarIcon: ({focused}) => {
                return focused ? 
                    <Image 
                        source={require('../../../Media/Home/BottomTabIcon/rank1.png')} 
                        style={styles.inputIcon} 
                        /> : 
                    <Image 
                        source={require('../../../Media/Home/BottomTabIcon/rank.png')} 
                        style={styles.inputIcon} 
                        />
            }
        })
    },
    Friend: {
        screen: FriendStack,
        navigationOptions: () => ({
            tabBarIcon: ({focused}) => {
                return focused ? 
                    <Image 
                        source = {require('../../../Media/Home/BottomTabIcon/friends1.png')} 
                        style = {styles.inputIcon}
                        resizeMode = 'center'
                        /> : 
                    <Image 
                        source= {require ('../../../Media/Home/BottomTabIcon/friends.png')} 
                        style = {styles.inputIcon} 
                        resizeMode = 'center'
                        />
            }
        })
    }
},
{
    tabBarOptions: {
        style: {
            backgroundColor: '#01113C',
          },
          labelStyle:{
              color: '#fff'
          }
    }
}
)
const styles = StyleSheet.create({
    inputIcon: {
        marginTop: 10,
        width: 24 * pointX,
        height: 24 * pointY,
    }
})