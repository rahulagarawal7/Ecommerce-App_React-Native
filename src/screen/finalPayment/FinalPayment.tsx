import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/types';
import {colors, mask, ms} from '../../utils';
import {BackButton, CheckOut} from '../../component';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {screenNames} from '../../utils/constants';

interface FinalPaymentProps {
  route: RouteProp<RootStackParamList, 'finalPayment'>;
}

const FinalPayment: React.FC<FinalPaymentProps> = ({route}) => {
  const totalPrice = route?.params?.price;

  const [address, setAddress] = useState<string>('');
  const [cardNumber, setCardNumber] = useState<string>('');
  const getPayment = async () => {
    const data = await AsyncStorage.getItem('userPayment');
    if (data) {
      const payment = JSON.parse(data);
      console.log('payment--->', payment);
      const number = mask(payment.cardNumber);
      setCardNumber(number);
    }
  };
  const getAddress = async () => {
    const data = await AsyncStorage.getItem('userAddress');
    if (data) {
      const userAddress = await JSON.parse(data);
      const address =
        userAddress.city +
        ' ' +
        userAddress.streetAddress +
        ' ' +
        userAddress.userState +
        ' ' +
        userAddress.zipCode;
      const shortAddress = address?.split(' ').splice(0, 4).join(' ');
      setAddress(shortAddress);
    }
  };
  useEffect(() => {
    getAddress();
    getPayment();
  }, []);

  return (
    <View style={styles.mainBox}>
      <BackButton heading="back" />
      <View style={styles.firstBox}>
        {address.length > 0 ? (
          <CheckOut
            data={address}
            title="shipping  address"
            screen={screenNames.addPayment}
          />
        ) : (
          <CheckOut
            data="Add shipping address"
            title="billing address"
            screen={screenNames.addAddress}
          />
        )}
        {cardNumber.length > 0 ? (
          <CheckOut
            data={cardNumber}
            title="payment details"
            screen={screenNames.addPayment}
          />
        ) : (
          <CheckOut
            data="Add card details"
            title="payment details"
            screen={screenNames.addPayment}
          />
        )}
      </View>

      <View style={styles.container}>
        <Text>total</Text>
      </View>
    </View>
  );
};

export default FinalPayment;

const styles = StyleSheet.create({
  container: {
    height: ms(200),
    width: ms(342),
    borderWidth: 0.5,
    alignSelf: 'center',
    backgroundColor: colors.secondaryBgColor,
    borderRadius: 10,
    marginTop: '5%',
  },
  mainBox: {
    height: '100%',
    width: '100%',
    backgroundColor: colors.primaryBgColor,
  },
  firstBox: {
    marginTop: ms(20),
    gap: ms(15),
  },
});
