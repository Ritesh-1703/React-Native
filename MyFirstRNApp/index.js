/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import BasicNavigation from './src/BasicNavigation';
import TabNavigation from './src/TabNavigation';

AppRegistry.registerComponent(appName, () => TabNavigation);
