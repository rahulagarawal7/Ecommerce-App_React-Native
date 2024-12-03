import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {FC, useEffect, useState} from 'react';
import {colors, ms} from '../../utils';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/types';
import {BackArrowLogo, PaymentCardLogo} from '../../assets';
import {Screen} from 'react-native-screens';
import { screenNames } from '../../utils/constants';

interface CheckOutProps {
  data: string;
  title: string;
  screen: string;
  logo?:boolean;
}

const CheckOut: React.FC<CheckOutProps> = ({data, title, screen ,logo = false}) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();



  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate(screen, undefined)}>
      <View style={styles.box}>
        <Text style={styles.text}>{title}</Text>
        <View style={screen===screenNames.addPayment && styles.cardLogo}>
        <Text
          style={styles.editText}
          // onPress={() => navigation.navigate(screenNames.addAddress, undefined)}
        >
          {data}
        </Text>
       { logo && <Image source={PaymentCardLogo} />}
        </View>
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
  cardLogo:{
    flexDirection:'row',
    alignItems:"center",
    gap:ms(10),
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
