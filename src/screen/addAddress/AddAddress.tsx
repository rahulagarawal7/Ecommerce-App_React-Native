import {
  ActivityIndicator,
  Alert,
  Modal,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {BackButton, Button, InputBox} from '../../component';
import {colors, ms} from '../../utils';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {screenNames, showShankBar} from '../../utils/constants';
import {NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/types';

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
      Alert.alert('Please fill all fields');
      return;
    }

    const address = {streetAddress, city, userState, zipCode};

    try {
      if (btnName === 'update') {
        Alert.alert('Update Address', 'are you want to update address', [
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
                'userAddress',
                JSON.stringify(address),
              );
              showShankBar('Address Updated successfully!');
              navigation.navigate(screenNames.profile, undefined);
            },
          },
        ]);
      } else {
        Alert.alert('Address saved successfully!');
        await AsyncStorage.setItem('userAddress', JSON.stringify(address));
        showShankBar('Address saved successfully!');
        navigation.navigate(screenNames.profile, undefined);
      }
    } catch (error) {
      console.error('Error saving address:', error);
      Alert.alert('Failed to save address');
      showShankBar('Failed to save address', 'error');
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
          keyboardType="number"
          placeholder="zip code"
          containerStyle={styles.smallInputBox}
          value={zipCode}
          onChangeText={setZipCode}
        />
      </View>
      <Button buttonName={btnName} handleSubmit={handleSubmit} />
    </View>
  );
};

export default AddAddress;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryBgColor,
    gap: 15,
  },
  box: {
    alignSelf: 'center',
    flexDirection: 'row',
    height: ms(56),
    width: ms(342),
    justifyContent: 'space-around',
  },
  smallInputBox: {
    width: ms(160),
  },
  loaderOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loaderText: {
    marginTop: 20,
    color: colors.textColor,
    fontSize: ms(18),
  },
});
