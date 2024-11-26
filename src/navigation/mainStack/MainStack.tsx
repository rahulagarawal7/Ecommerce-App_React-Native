import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {RootStackParamList} from '../types';
import {StyleSheet} from 'react-native';

import {screenNames} from '../../utils/constants';
import BottomTabNavigator from './bottomTabNavigator/BottomTabNavigator';
import StackScreen from './stackNavigation/StackScreen';
const Stack = createNativeStackNavigator<RootStackParamList>();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={screenNames.bottomTab}
        component={BottomTabNavigator}
      />
      {StackScreen.map((screen, index) => (
        <Stack.Screen
          key={`${screen.name}-${index}`}
          name={screen.name as keyof RootStackParamList}
          component={screen.component}
        />
      ))}
    </Stack.Navigator>
  );
};

export default MainStack;

const styles = StyleSheet.create({});
