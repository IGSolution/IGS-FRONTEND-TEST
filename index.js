/**
 * @format
 */
global.setImmediate = (fn, ...args) => setTimeout(fn, 0, ...args);

import {AppRegistry} from 'react-native';
import {registerRootComponent} from 'expo';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
registerRootComponent(App);
