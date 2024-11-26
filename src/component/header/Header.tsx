import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {CartLogo, UserLogo} from '../../assets';
import {ms} from '../../utils/scale';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {screenNames} from '../../utils/constants';
import {RootStackParamList} from '../../navigation/types';
import ChangeTheme from '../changeTheme/ChangeTheme';

const Header: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <View style={styles.container}>
      <View style={styles.profileImage}>
        <Image source={UserLogo} style={styles.userImage} />
      </View>
      <ChangeTheme />
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

const styles = StyleSheet.create({
  container: {
    marginHorizontal: ms(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  profileImage: {
    height: ms(40),
    width: ms(40),
    borderRadius: ms(40),
  },
  userImage: {
    height: ms(40),
    width: ms(40),
    borderRadius: ms(40),
  },
  cartLogo: {
    height: ms(40),
    width: ms(40),
  },
});
