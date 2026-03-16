/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import BasicNavigation from './src/BasicNavigation';
import TabNavigation from './src/TabNavigation';
import DrawerNavigation from './src/DrawerNavigation';

AppRegistry.registerComponent(appName, () => DrawerNavigation);
