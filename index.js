/** @format */

import {AppRegistry} from 'react-native';
import App from './src/UI/MainStack';
import {name as appName} from './app.json';
import {YellowBox} from 'react-native';
YellowBox.ignoreWarnings(['Warning: ReactNative.createElement']);
console.disableYellowBox = true;
AppRegistry.registerComponent(appName, () => App);
