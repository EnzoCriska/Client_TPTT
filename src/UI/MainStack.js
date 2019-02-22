import {createStackNavigator, createAppContainer} from 'react-navigation'


import {YellowBox} from 'react-native';
import Login from './Provisioning/Login';
import Register from './Provisioning/Register';
import UpdatePhoneNumber from './Provisioning/UpdatePhoneNumber';
import ConfirmOTP from './Provisioning/ConfirmOTP';
import { BottomTabStack } from './Home/StackBottomTab';
import SplashScreen from './SplashScreen';

YellowBox.ignoreWarnings(['Warning: ReactNative.createElement']);

const  MainStack = createStackNavigator({
    // Splash: SplashScreen,
    Login: Login,
    Register: Register,
    updatePhone: UpdatePhoneNumber ,
    confirmOTP: ConfirmOTP,
    bottomTabStack: BottomTabStack
},{
    headerMode: "none"
})

// MainStack.navigationOptions = ({navigation}) =>{
//     let headerMode = "float"
//     console.log(navigation)
//     return headerMode   
// }

const App = createAppContainer(MainStack);

export default App;