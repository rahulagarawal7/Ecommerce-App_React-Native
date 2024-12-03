import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {FC, useEffect, useState} from 'react';
import {colors, ms} from '../../utils';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/types';
import {BackArrowLogo} from '../../assets';
import {Screen} from 'react-native-screens';

interface CheckOutProps {
  data: string;
  title: string;
  screen: string;
}

const CheckOut: React.FC<CheckOutProps> = ({data, title, screen}) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  useEffect(() => {
    //shortAddress();
  });

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate(screen, undefined)}>
      <View style={styles.box}>
        <Text style={styles.text}>{title}</Text>
        <Text
          style={styles.editText}
          // onPress={() => navigation.navigate(screenNames.addAddress, undefined)}
        >
          {data}
        </Text>
      </View>
      <Image source={BackArrowLogo} style={styles.image} />
    </TouchableOpacity>
  );
};

export default CheckOut;
const styles = StyleSheet.create({
  container: {
    height: ms(72),
    width: ms(342),
    backgroundColor: colors.secondaryBgColor,
    borderRadius: 10,
    alignSelf: 'center',
    padding: ms(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: colors.textColor,
    fontSize: ms(12),
  },
  editText: {
    fontSize: ms(16),
    color: colors.textColor,
  },
  image: {
    height: ms(30),
    width: ms(20),
    alignSelf: 'center',
    transform: [{rotate: '180deg'}],
  },
  box: {
    gap: ms(10),
  },
});
