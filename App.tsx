import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ActivityIndicator, SafeAreaView, StyleSheet} from 'react-native';
import i18next, {initI18n} from './src/i18n/i18n.config';
import {I18nextProvider} from 'react-i18next';
import RootNavigator from './src/navigation/RootNavigator';

import {useAppDispatch} from './src/redux/store/store';
import {getAllProductsActions} from './src/redux/slices/products/products.actions';

const Stack = createNativeStackNavigator();

const App = () => {
  const [isI18nInitialized, setIsI18nInitialized] = useState(false);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllProductsActions({limit: '9', page: '2'}));
    initI18n().then(() => setIsI18nInitialized(true));
  }, [isI18nInitialized]);

  if (!isI18nInitialized) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </SafeAreaView>
    );
  }

  return (
    <I18nextProvider i18n={i18next}>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </SafeAreaView>
    </I18nextProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
