import {StyleSheet, Text, View, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import {BackButton, Button, InputBox} from '../../component';
import {colors, ms} from '../../utils';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {screenNames, showShankBar} from '../../utils/constants';
import {NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/types';
import {styles} from './styles';

interface AddPaymentProps {
  navigation: NavigationProp<RootStackParamList, 'Profile'>;
}

const AddPayment: React.FC<AddPaymentProps> = ({navigation}) => {
  const [cardNumber, setCardNumber] = useState('');
  const [ccv, setCcv] = useState('');
  const [exp, setExp] = useState('');
  const [cardholderName, setCardholderName] = useState('');
  const [btnName, setBtnName] = useState('Add');
  const [errors, setErrors] = useState({
    cardNumber: '',
    ccv: '',
    exp: '',
    cardholderName: '',
  });

  const validateFields = () => {
    let isValid = true;
    const newErrors = {cardNumber: '', ccv: '', exp: '', cardholderName: ''};

    // Card Number Validation
    if (!/^\d{12}$/.test(cardNumber)) {
      newErrors.cardNumber = 'Card number must be 12 digits.';
      isValid = false;
    }

    if (!/^\d{3}$/.test(ccv)) {
      newErrors.ccv = 'CCV must be 3 digits.';
      isValid = false;
    }

    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(exp)) {
      newErrors.exp = 'Expiry date must be in MM/YY format.';
      isValid = false;
    }

    if (!/^[a-zA-Z ]+$/.test(cardholderName)) {
      newErrors.cardholderName = 'Cardholder name must contain only letters.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async () => {
    if (!validateFields()) return;

    const paymentDetails = {
      cardNumber,
      ccv,
      exp,
      cardholderName,
    };

    try {
      if (btnName === 'update') {
        Alert.alert('Update Payment', 'are you want to update Payment', [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {
            text: 'OK',
            onPress: async () => {
              console.log('OK Pressed');
              await AsyncStorage.setItem(
                'userPayment',
                JSON.stringify(paymentDetails),
              );
              showShankBar('Payment Updated successfully!');
              navigation.navigate(screenNames.profile, undefined);
            },
          },
        ]);
      } else {
        await AsyncStorage.setItem(
          'userPayment',
          JSON.stringify(paymentDetails),
        );
        Alert.alert('Success', 'Payment details saved successfully!');
        setBtnName('Update');
        showShankBar('Payment saved successfully!');
        navigation.navigate(screenNames.profile, undefined);
      }
    } catch (error) {
      console.error('Error saving payment details:', error);
      Alert.alert('Error', 'Failed to save payment details.');
    }
  };

  const getPaymentDetails = async () => {
    try {
      const data = await AsyncStorage.getItem('userPayment');
      if (data) {
        const payment = JSON.parse(data);
        setCardNumber(payment.cardNumber);
        setCcv(payment.ccv);
        setExp(payment.exp);
        setCardholderName(payment.cardholderName);
        setBtnName('Update');
      }
    } catch (error) {
      console.error('Error fetching payment details:', error);
      Alert.alert('Error', 'Failed to fetch payment details.');
    }
  };

  useEffect(() => {
    getPaymentDetails();
  }, []);

  return (
    <View style={styles.container}>
      <BackButton heading="Back" />

      <InputBox
        placeholder="Card Number"
        value={cardNumber}
        onChangeText={text => {
          setCardNumber(text);
          if (/^\d{0,12}$/.test(text))
            setErrors(prev => ({...prev, cardNumber: ''}));
          else
            setErrors(prev => ({
              ...prev,
              cardNumber: 'Card number must be 12 digits.',
            }));
        }}
        keyboardType="numeric"
      />
      {errors.cardNumber ? (
        <Text style={styles.error}>{errors.cardNumber}</Text>
      ) : null}

      <View style={styles.box}>
        <View style={{flexDirection: 'column'}}>
          <InputBox
            placeholder="CCV"
            containerStyle={styles.smallInputBox}
            value={ccv}
            onChangeText={text => {
              setCcv(text);
              if (/^\d{0,3}$/.test(text))
                setErrors(prev => ({...prev, ccv: ''}));
              else setErrors(prev => ({...prev, ccv: 'CCV must be 3 digits.'}));
            }}
            keyboardType="numeric"
          />
          {errors.ccv ? <Text style={styles.error}>{errors.ccv}</Text> : null}
        </View>
        <View style={{flexDirection: 'column'}}>
          <InputBox
            placeholder="Expiry Date (MM/YY)"
            containerStyle={styles.smallInputBox}
            value={exp}
            onChangeText={text => {
              setExp(text);
              if (/^(0[1-9]|1[0-2])\/?\d{0,2}$/.test(text))
                setErrors(prev => ({...prev, exp: ''}));
              else
                setErrors(prev => ({
                  ...prev,
                  exp: 'must be in MM/YY format.',
                }));
            }}
            keyboardType="numeric"
          />
          {errors.exp ? <Text style={styles.error}>{errors.exp}</Text> : null}
        </View>
      </View>

      <InputBox
        placeholder="Cardholder Name"
        value={cardholderName}
        onChangeText={text => {
          setCardholderName(text);
          if (/^[a-zA-Z ]*$/.test(text))
            setErrors(prev => ({...prev, cardholderName: ''}));
          else
            setErrors(prev => ({
              ...prev,
              cardholderName: 'Cardholder name must contain only letters.',
            }));
        }}
        keyboardType="default"
      />
      {errors.cardholderName ? (
        <Text style={styles.error}>{errors.cardholderName}</Text>
      ) : null}

      <Button buttonName={btnName} handleSubmit={handleSubmit} />
    </View>
  );
};

export default AddPayment;
