import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/types';
import {colors, mask, ms} from '../../utils';
import {BackButton, CheckOut} from '../../component';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {screenNames} from '../../utils/constants';
import {styles} from './styles';
import {t} from 'i18next';

interface FinalPaymentProps {
  route: RouteProp<RootStackParamList, 'finalPayment'>;
}

const FinalPayment: React.FC<FinalPaymentProps> = ({route}) => {
  const totalPrice = route?.params?.price;

  const [address, setAddress] = useState<string>('');
  const [cardNumber, setCardNumber] = useState<string>('');
  const [shippingCost, setShippingCost] = useState<number>(0);

  const getPayment = async () => {
    const data = await AsyncStorage.getItem('userPayment');
    if (data) {
      const payment = JSON.parse(data);
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
    if (totalPrice <= 100) {
      setShippingCost(20);
    }
  }, []);

  const calculateTotal = () => {
    const total = shippingCost + totalPrice + 20;
    return total;
  };
  return (
    <View style={styles.mainBox}>
      <BackButton heading="back" />
      <View style={styles.scrollBox}>
        <ScrollView style={{marginTop: 10}}>
          <View style={styles.firstBox}>
            {address.length > 0 ? (
              <CheckOut
                data={address}
                title="shipping address"
                screen={screenNames.addAddress}
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
                logo={true}
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
            <View style={styles.container}>
              <View style={styles.price}>
                <Text>{'subtotal'}</Text>
                <Text>${totalPrice}</Text>
              </View>
              <View style={styles.price}>
                <Text>{t('shipping cost')}</Text>
                <Text>${shippingCost}</Text>
              </View>
              <View style={styles.price}>
                <Text>{t('tax')}</Text>
                <Text>$20</Text>
              </View>
              <View style={styles.price}>
                <Text>{t('total')}</Text>
                <Text>${calculateTotal()}</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.UPIContainer}>
              <Text style={styles.UPIText}>{t('Pay with UPI')}</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <TouchableOpacity style={styles.totalBox}>
          <Text style={styles.textTotal}>{t('place order')}</Text>
          <Text style={styles.textTotal}>${calculateTotal()}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FinalPayment;
