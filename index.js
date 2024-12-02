/**
 * @format
 */
import './src/i18n/i18n.config';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import store from './src/redux/store/store';
import {Provider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import messaging from '@react-native-firebase/messaging';

messaging().setBackgroundMessageHandler(async remoteMessage =>
  console.log('remoteMessage', remoteMessage),
);

const AppStore = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </SafeAreaProvider>
  );
};

AppRegistry.registerComponent(appName, () => AppStore);
