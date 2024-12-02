import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {BackArrowLogo, PaymentCardLogo} from '../../assets';
import {mask, ms, colors} from '../../utils';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {screenNames} from '../../utils/constants';
import {RootStackParamList} from '../../navigation/types';
import {styles} from './styles';

interface PaymentCardProps {
  cardNumber: number;
}

const PaymentCard: React.FC<PaymentCardProps> = ({cardNumber}) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate(screenNames.addPayment, undefined)}>
      <View style={styles.innerBox}>
        <Text style={styles.text}>{mask(cardNumber)}</Text>
        <Image source={PaymentCardLogo} />
      </View>

      <Image source={BackArrowLogo} style={styles.image} />
    </TouchableOpacity>
  );
};

export default PaymentCard;
