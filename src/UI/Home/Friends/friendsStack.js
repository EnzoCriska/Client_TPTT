import {createStackNavigator} from 'react-navigation';
import Friends from './FriendScreen';
import { StackProfile } from '../Profile/StackProfile';


const FriendStack = createStackNavigator({
    Friend : Friends,
    _Profile: StackProfile
},{
    headerMode: "none"
})

FriendStack.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    var stack = navigation.state.routes

    if (stack[stack.length -1].routeName != 'Friend') {
        tabBarVisible = false;
    }
    return {
        tabBarVisible,
    };
};

export default FriendStack