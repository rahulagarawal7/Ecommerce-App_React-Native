import {Alert, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {BackButton, Button, InputBox} from '../../component';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {screenNames, showShankBar} from '../../utils/constants';
import {NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/types';
import {styles} from './styles';
import {t} from 'i18next';

interface AddAddressProps {
  navigation: NavigationProp<RootStackParamList, 'Profile'>;
}

const AddAddress: React.FC<AddAddressProps> = ({navigation}) => {
  const [streetAddress, setStreetAddress] = useState('');
  const [city, setCity] = useState('');
  const [userState, setUserState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [btnName, setBtnName] = useState('add');

  const handleSubmit = async () => {
    if (!streetAddress || !city || !userState || !zipCode) {
      // Check if all fields are filled
      Alert.alert(t('please fill all fields'));
      return;
    }

    const address = {streetAddress, city, userState, zipCode};

    try {
      if (btnName === 'update') {
        Alert.alert(t('update address'), t('are you want to update address'), [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {
            text: t('ok'),
            onPress: async () => {
              console.log('OK Pressed');
              await AsyncStorage.setItem(
                'userAddress',
                JSON.stringify(address),
              );
              showShankBar(t('address updated successfully!'));
              navigation.navigate(screenNames.profile, undefined);
            },
          },
        ]);
      } else {
        Alert.alert(t('address saved successfully!'));
        await AsyncStorage.setItem('userAddress', JSON.stringify(address));
        showShankBar(t('address saved successfully!'));
        navigation.navigate(screenNames.profile, undefined);
      }
    } catch (error) {
      console.error('Error saving address:', error);
      Alert.alert(t('failed to save address'));
      showShankBar(t('failed to save address'), 'error');
    } finally {
    }
  };

  const getUser = async () => {
    const data = await AsyncStorage.getItem('userAddress');
    if (data) {
      const userAddress = await JSON.parse(data);
      setStreetAddress(userAddress?.streetAddress);
      setCity(userAddress?.city);
      setUserState(userAddress.userState);
      setZipCode(userAddress.zipCode);
      setBtnName('update');
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <View style={styles.container}>
      <BackButton heading={'back'} />

      <InputBox
        keyboardType="text"
        placeholder="street address"
        value={streetAddress}
        onChangeText={setStreetAddress}
      />
      <InputBox
        placeholder="city"
        value={city}
        onChangeText={setCity}
        keyboardType="text"
      />
      <View style={styles.box}>
        <InputBox
          keyboardType="text"
          placeholder="state"
          containerStyle={styles.smallInputBox}
          value={userState}
          onChangeText={setUserState}
        />
        <InputBox
          placeholder="zip code"
          containerStyle={styles.smallInputBox}
          value={zipCode}
          onChangeText={setZipCode}
          keyboardType="numeric"
        />
      </View>
      <Button buttonName={btnName} handleSubmit={handleSubmit} />
    </View>
  );
};

export default AddAddress;
