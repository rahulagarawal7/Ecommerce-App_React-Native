import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {CartLogo, UserLogo} from '../../assets';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {screenNames} from '../../utils/constants';
import {RootStackParamList} from '../../navigation/types';
import {styles} from './styles';

const Header: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <View style={styles.container}>
      <View style={styles.profileImage}>
        <Image source={UserLogo} style={styles.userImage} />
      </View>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate(screenNames.cart, undefined);
        }}>
        <Image style={styles.cartLogo} source={CartLogo} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
