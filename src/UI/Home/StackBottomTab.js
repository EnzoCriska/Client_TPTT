import React from 'react';

import { StyleSheet, Image } from 'react-native';

import {
    createBottomTabNavigator, createStackNavigator
} from 'react-navigation';
import HomeScreen from './HomeScreen.js';
import Gift from './Gift/index.js';
import News from './News/index.js';
import Rank from './Rank/index.js'
import Info from './Profile/Info/index.js';

const GameStack = createStackNavigator({
    HomeScreen:HomeScreen,
    Info: Info
},{
    headerMode: "none"
})

GameStack.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    var stack = navigation.state.routes

    if (stack[stack.length -1].routeName != 'HomeScreen') {
        tabBarVisible = false;
    }
    return {
        tabBarVisible,
    };
};

export const BottomTabStack = createBottomTabNavigator(
{
    Home: {
        screen: GameStack,
        navigationOptions: ({navigation}) => ({
            tabBarIcon: ({focused}) => {
                return focused ? <Image source={require('../../../Media/Home/BottomTabIcon/home1.png')} style={styles.inputIcon} /> : <Image source={require('../../../Media/Home/BottomTabIcon/home.png')} style={styles.inputIcon} />
            }
        })
    },
    News:{
        screen: News,
        navigationOptions: () => ({
            tabBarIcon: ({focused}) => {
                return focused ? <Image source={require('../../../Media/Home/BottomTabIcon/file1.png')} style={styles.inputIcon} /> : <Image source={require('../../../Media/Home/BottomTabIcon/file.png')} style={styles.inputIcon} />
            }
        })
    },
    Gift:{
        screen: Gift,
        navigationOptions: () => ({
            tabBarIcon: ({focused}) => {
                return focused ? <Image source={require('../../../Media/Home/BottomTabIcon/gift.png')} style={styles.inputIcon} /> : <Image source={require('../../../Media/Home/BottomTabIcon/gift.png')} style={styles.inputIcon} />
            }
        })
    },
    Rank:{
        screen: Rank,
        navigationOptions: () => ({
            tabBarIcon: ({focused}) => {
                return focused ? <Image source={require('../../../Media/Home/BottomTabIcon/rank1.png')} style={styles.inputIcon} /> : <Image source={require('../../../Media/Home/BottomTabIcon/rank.png')} style={styles.inputIcon} />
            }
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
//   ,{


//   defaultNavigationOptions: ({ navigation }) => ({
      
//     tabBarIcon: ({ focused, horizontal, tintColor }) => {
//         const {routeName} = navigation.state
//         var Icon = null
//         if (routeName === 'Home') {
//             console.log(">>>>>>>>> "+ focused)
//             Icon = focused  ?    <Image source={require('../../../Media/Home/BottonTabIcon/home.png')} style={styles.inputIcon} />  
//                             :    <Image source={require('../../../Media/Home/BottonTabIcon/home1.png')} style={styles.inputIcon} />
//         }
//         console.log(">>>>>>>>> "+ Icon)
//         return Icon
//     }
// })
// }
)
const styles = StyleSheet.create({
    inputIcon: {
        marginTop: 10,
        width: 24,
        height: 24,
    }
})