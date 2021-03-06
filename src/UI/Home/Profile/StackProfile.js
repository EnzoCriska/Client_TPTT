import React from 'react'
import {
    createStackNavigator
} from 'react-navigation';
import Info from './Info';
import HistoryGame from './historyGame';
import HistoryChangeGift from './historyChangeGift';
import UpdateInfo from './UpdateInfo';
import ChangePassword from './ChangePassword';
import UpdatePhoneNumber from '../../Provisioning/UpdatePhoneNumber';


export const StackProfile = createStackNavigator({
    Info: Info,
    HistoryGame: HistoryGame,
    HistoryChangeGift: HistoryChangeGift,
    Edit: UpdateInfo,
    ChangePassword: ChangePassword,
    UpdatePhone: UpdatePhoneNumber

}, {headerMode: 'none'})