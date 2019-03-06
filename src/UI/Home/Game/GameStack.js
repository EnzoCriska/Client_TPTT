import {
     createStackNavigator
} from 'react-navigation';

import WaitScreen from './WaitScreen/index.js';
import GamePlay from './Play/index.js';

import ListRoomFriends from './ListRoomFriend/index.js';
import HomeScreen from '../HomeScreen/index.js';
import Info from '../Profile/Info/index.js';
import WaitFriendRoom from './WaitFriendRoom/index.js';
import InviteJoinRoom from './InviteJoinRoom/index.js';
import { StackProfile } from '../Profile/StackProfile.js';
import UpdatePhoneNumber from '../../Provisioning/UpdatePhoneNumber/index.js';
import ConfirmOTP from '../../Provisioning/ConfirmOTP/index';
import PlayTrain from './Trainning/index.js';
const GameStack = createStackNavigator({
    HomeScreen:HomeScreen,
    WaitScreen: WaitScreen,
    GamePlay:GamePlay,
    TrainPlay: PlayTrain,
    ListRoom : ListRoomFriends,
    WaitFriendRoom: WaitFriendRoom,
    InviteJoin: InviteJoinRoom,
    Profile: StackProfile,
    UpdatePhone: UpdatePhoneNumber,
    OTPConfirm: ConfirmOTP
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