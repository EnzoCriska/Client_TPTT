import React from 'react';
import { 
    View, Text, TouchableOpacity, Image, ImageBackground
 } from 'react-native';


 import {createMaterialTopTabNavigator, createAppContainer, createStackNavigator} from 'react-navigation';
import { styles } from './style';
import { pointX, pointY } from '../../../../Util/Constanst';
import ListFriend from './listFriend/indexListFriend';
import ListWaitFriend from './listWaitFriend/indexListWaitFriend';
import { HeaderComponent } from '../../../../Util/Component Util/HeaderComponent';

import * as IMG from '../../../../Util/Common/Image';

const tabStack = createMaterialTopTabNavigator(
    {
    listFriend:{
        screen: ListFriend,
        navigationOptions: () => ({
            tabBarLabel: 'Danh sách bạn bè'
        })
    },
    waitFriend:{
        screen: ListWaitFriend,
        navigationOptions: () => ({
            tabBarLabel: 'Danh sách chờ'
        })
    }
},
    {
       tabBarOptions:{
            activeTintColor:'#09229C',
            inactiveTintColor:'#fff',
            upperCaseLabel:false,
            tabStyle:{
                height: 40 * pointY,
            },
            style:{
                backgroundColor: '#010C21',
                borderRadius:5,
            },
            indicatorStyle:{
                height:40 * pointY,
                backgroundColor: '#FF9626',
                borderRadius: 5
            }
       } 
    })


const TabRoot = createAppContainer(tabStack)

 export const RenderFriend = ({
    onGoProfile = () => {}
 }) => {
     return(
        <ImageBackground
            source={IMG.BACKGROUND_IMG}
            style = {styles.container}>

            <HeaderComponent
                onGoProfile = {() => onGoProfile()}
            />

            <View style= {styles.rootContainer}>
                <View style = {styles.bodyContainer}>
                    <TabRoot/>
                </View>
            </View>
            
        
        </ImageBackground>
     )
 }

 