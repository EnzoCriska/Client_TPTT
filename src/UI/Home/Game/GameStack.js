import {
     createStackNavigator
} from 'react-navigation';

import WaitScreen from './WaitScreen/index.js';
import GamePlay from './Play/index.js';

import ListRoomFriends from './ListRoomFriend/index.js';
import HomeScreen from '../HomeScreen/index.js';
import Info from '../Profile/Info/index.js';

const GameStack = createStackNavigator({
    HomeScreen:HomeScreen,
    WaitScreen: WaitScreen,
    GamePlay:GamePlay,
    ListRoom : ListRoomFriends,
    Profile: Info,
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

export default GameStack