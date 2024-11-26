import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types';
import {StyleSheet} from 'react-native';
import {Login, SignUP} from '../../screen';
import {screenNames} from '../../utils/constants';
const Stack = createNativeStackNavigator<RootStackParamList>();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={screenNames.login} component={Login} />
      <Stack.Screen name={screenNames.signUp} component={SignUP} />
    </Stack.Navigator>
  );
};

export default AuthStack;

const styles = StyleSheet.create({});
