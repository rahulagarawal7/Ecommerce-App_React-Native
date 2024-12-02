import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Modal, StyleSheet, View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './types';
import AuthStack from './authStack/AuthStack';
import MainStack from './mainStack/MainStack';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator: React.FC = () => {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
  const [initializing, setInitializing] = useState(true);

  function onAuthStateChanged(user: FirebaseAuthTypes.User | null) {
    setUser(user);
    if (initializing) {
      setInitializing(false);
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) {
    return (
      <Modal transparent={true} animationType="fade" visible={true}>
        <View style={styles.modalContainer}>
          <View style={styles.loadingBox}>
            <ActivityIndicator size="large" color="#6200EE" />
            <Text style={styles.loadingText}>Loading...</Text>
          </View>
        </View>
      </Modal>
    );
  }

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {user ? (
        <Stack.Screen name={'MainStack'} component={MainStack} />
      ) : (
        <Stack.Screen name={'AuthStack'} component={AuthStack} />
      )}
    </Stack.Navigator>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  loadingBox: {
    width: 150,
    height: 150,
    backgroundColor: '#fff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    elevation: 5,
  },
  loadingText: {
    marginTop: 15,
    fontSize: 16,
    color: '#333',
  },
});
