import {NetInfo} from 'react-native';

export function CheckNetwork(){
    return NetInfo.getConnectionInfo((connectionInfo) => {
        return connectionInfo
    })
}