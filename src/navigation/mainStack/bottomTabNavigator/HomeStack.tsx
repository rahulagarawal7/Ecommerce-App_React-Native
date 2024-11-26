import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {RootStackParamList} from '../../types';
import {StyleSheet} from 'react-native';
import {Home, Login, SignUP} from '../../../screen';
import {screenNames} from '../../../utils/constants';
const Stack = createNativeStackNavigator<RootStackParamList>();
// here we can make array so that we can used it well
const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={screenNames.home}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={screenNames.home} component={Home} />
    </Stack.Navigator>
  );
};

export default HomeStack;

const styles = StyleSheet.create({});
