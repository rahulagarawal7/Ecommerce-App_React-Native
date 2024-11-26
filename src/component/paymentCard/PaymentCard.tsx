import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {BackArrowLogo, PaymentCardLogo} from '../../assets';
import {mask, ms, colors} from '../../utils';

interface PaymentCardProps {
  cardNumber: number;
}

const PaymentCard: React.FC<PaymentCardProps> = ({cardNumber}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.innerBox}>
        <Text style={styles.text}>{mask(cardNumber)}</Text>
        <Image source={PaymentCardLogo} />
      </View>

      <Image source={BackArrowLogo} style={styles.image} />
    </TouchableOpacity>
  );
};

export default PaymentCard;

const styles = StyleSheet.create({
  container: {
    height: ms(56),
    width: ms(342),
    backgroundColor: colors.secondaryBgColor,
    alignSelf: 'center',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  image: {
    height: ms(24),
    width: ms(24),
    transform: [{rotate: '180deg'}],
  },
  text: {
    color: colors.textColor,
    fontSize: ms(12),
  },
  innerBox: {
    gap: 10,
    flexDirection: 'row',
  },
});
