import { createStackNavigator } from 'react-navigation';
import RankComponent from './Ranking/index.js';

export const RankingStack = createStackNavigator({
    RankCmp: RankComponent
}, {
    headerMode:'none'
})