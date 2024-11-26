import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Notification, Order, Profile} from '../../../screen';
import {
  HomeIcon,
  ProfileIcon,
  ReceiptIcon,
  notificationIcon,
} from '../../../assets';
import TabOptions from './TabOption';
import HomeStack from './HomeStack';
import {screenNames} from '../../../utils/constants';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}>
      {/* 
        Here, we have designated HomeStack as a stack of screens related specifically to the Home screen. Within
        HomeStack, we can include all screens that are specifically related to the Home section of the app. 
      */}
      <Tab.Screen
        name={screenNames.homeStack}
        component={HomeStack}
        options={{
          tabBarIcon: ({focused}) => (
            <TabOptions focused={focused} Icon={HomeIcon} />
          ),
        }}
      />
      <Tab.Screen
        name={screenNames.order}
        component={Order}
        options={{
          tabBarIcon: ({focused}) => (
            <TabOptions focused={focused} Icon={ReceiptIcon} />
          ),
        }}
      />
      <Tab.Screen
        name={screenNames.notification}
        component={Notification}
        options={{
          tabBarIcon: ({focused}) => (
            <TabOptions focused={focused} Icon={notificationIcon} />
          ),
        }}
      />
      <Tab.Screen
        name={screenNames.profile}
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <TabOptions focused={focused} Icon={ProfileIcon} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
