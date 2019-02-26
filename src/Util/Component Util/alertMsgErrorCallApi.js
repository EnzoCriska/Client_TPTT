
import { Alert } from 'react-native';
import Strings from '../Strings';

// import strings from '../constants/Strings';
export default function alertMsgErrorCallApi(code, mess) {
    
    Alert.alert(
        Strings.NOTIFICATION,
        mess,
        [
            {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        {cancelable: false},
    );
}
