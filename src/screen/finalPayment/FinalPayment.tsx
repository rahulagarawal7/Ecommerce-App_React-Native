import {
  Alert,
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
  const payFromUPI = () => {
    if (address === '') {
      Alert.alert(t('error'), t('please enter your address.'));
      return;
    }
  };
  const handlePressPay = () => {
    if (cardNumber === '' && address === '') {
      Alert.alert(t('error'), t('please enter your card details and address.'));
      return;
    }

    if (cardNumber === '') {
      Alert.alert(t('error'), t('please enter your card details.'));
      return;
    }

    if (address === '') {
      Alert.alert(t('error'), t('please enter your address.'));
      return;
    }
  };
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
      <View style={styles.backBox}>
        <BackButton heading="back" />
      </View>

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
                <Text style={styles.textHeading}>{t('subtotal')}</Text>
                <Text style={styles.text}>${totalPrice}</Text>
              </View>
              <View style={styles.price}>
                <Text style={styles.textHeading}>{t('shipping cost')}</Text>
                <Text style={styles.text}>${shippingCost}</Text>
              </View>
              <View style={styles.price}>
                <Text style={styles.textHeading}>{t('tax')}</Text>
                <Text style={styles.text}>$20</Text>
              </View>
              <View style={styles.price}>
                <Text style={styles.textHeading}>{t('total')}</Text>
                <Text style={styles.text}>${calculateTotal()}</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.UPIContainer} onPress={payFromUPI}>
              <Text style={styles.UPIText}>{t('Pay with UPI')}</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <TouchableOpacity style={styles.totalBox} onPress={handlePressPay}>
          <Text style={styles.textTotal}>{t('place order')}</Text>
          <Text style={styles.textTotal}>${calculateTotal()}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FinalPayment;
