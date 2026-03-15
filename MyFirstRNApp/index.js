/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import BasicNavigation from './src/BasicNavigation';

AppRegistry.registerComponent(appName, () => BasicNavigation);
