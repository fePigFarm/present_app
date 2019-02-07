/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
import App from './App';
// 从app.json中获取app的名字
import {name as appName} from './app.json';

// 在AppRegistry之前  屏蔽某些黄色警告
console.ignoredYellowBox = ['Setting a timer']

AppRegistry.registerComponent(appName, () => App);
