import {Alert, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  BackButton,
  Button,
  EmptyPage,
  InputBox,
  PaymentCard,
} from '../../component';
import {colors, ms} from '../../utils';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {EmptyPaymentLogo} from '../../assets';
import {RootStackParamList} from '../../navigation/types';
import {screenNames} from '../../utils/constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {PaymentType} from '../../utils/types';
import {styles} from './styles';

const Payment = () => {
  const [cardNumber, setCardNumber] = useState<number>(0);
  const [payments, setPayments] = useState<PaymentType | null>(null);

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const addAddress = () => {
    navigation.navigate(screenNames.addPayment, undefined);
  };
  const fetchData = async () => {
    try {
      const data = await AsyncStorage.getItem('userPayment');
      if (data) {
        const parsedAddress = JSON.parse(data) as PaymentType;
        setPayments(parsedAddress);
        setCardNumber(parsedAddress.cardNumber);
      }
    } catch (error) {
      console.error('Error fetching Payment:', error);
    }
  };
  const deletePayment = async () => {
    Alert.alert(
      'Delete Payment',
      'Are you sure you want to delete this Payment?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: async () => {
            try {
              await AsyncStorage.removeItem('userPayment');
              console.log('Payment deleted successfully');
              setPayments(null);
              // Optionally, you can call a state update function here to reflect the changes in the UI
            } catch (error) {
              console.error('Error deleting Payment:', error);
            }
          },
          style: 'destructive', // For better UX, use destructive style for delete actions on iOS
        },
      ],
      {cancelable: true}, // Dismiss alert when tapping outside
    );
  };
  useEffect(() => {
    fetchData();
  }, [payments]);
  return (
    <View style={styles.container}>
      <BackButton heading="back" />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {payments ? (
          <View style={styles.paymentCard}>
            <PaymentCard cardNumber={cardNumber} />
          </View>
        ) : (
          <>
            <EmptyPage
              title="no payment card found"
              btnName="add card"
              image={EmptyPaymentLogo}
              style={styles.empty}
            />
          </>
        )}
      </ScrollView>
      {!payments ? (
        <Button buttonName="add" handleSubmit={addAddress} style={styles.btn} />
      ) : (
        <Button
          buttonName="delete"
          handleSubmit={deletePayment}
          style={styles.btn}
        />
      )}
    </View>
  );
};

export default Payment;
