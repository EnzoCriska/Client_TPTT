import { createStackNavigator } from 'react-navigation';
import RankComponent from './Ranking/index.js';
import { StackProfile } from '../Profile/StackProfile.js';

export const RankingStack = createStackNavigator({
    RankCmp: RankComponent,
    _Profile: StackProfile
}, {
    headerMode:'none'
})