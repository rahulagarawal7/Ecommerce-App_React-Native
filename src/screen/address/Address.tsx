import {Alert, ScrollView, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {AddressCard, BackButton, Button, EmptyPage} from '../../component';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {EmptyAddressLogo} from '../../assets';
import {screenNames} from '../../utils/constants';
import {RootStackParamList} from '../../navigation/types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AddressType} from '../../utils/types';
import {styles} from './styles';
import {t} from 'i18next';

const Address = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [address, setAddress] = useState<AddressType | null>(null);

  const addAddress = () => {
    navigation.navigate(screenNames.addAddress, undefined);
  };

  const fetchData = async () => {
    try {
      const data = await AsyncStorage.getItem('userAddress');
      if (data) {
        const parsedAddress = JSON.parse(data) as AddressType;
        setAddress(parsedAddress);
      }
    } catch (error) {
      console.error('Error fetching address:', error);
    }
  };
  const deleteAddress = async () => {
    Alert.alert(
      t('delete address'),
      t('are you sure you want to delete this address?'),
      [
        {
          text: t('cancel'),
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: t('delete'),
          onPress: async () => {
            try {
              await AsyncStorage.removeItem('userAddress');
              console.log('Address deleted successfully');
              setAddress(null);
              // Optionally, you can call a state update function here to reflect the changes in the UI
            } catch (error) {
              console.error('Error deleting address:', error);
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
  }, [address]);

  return (
    <View style={styles.container}>
      <View style={styles.backBox}>
        <BackButton heading="back" />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {address ? (
          <View style={styles.addressCard}>
            <AddressCard address={address} />
          </View>
        ) : (
          <EmptyPage
            title="no address found"
            btnName="add"
            image={EmptyAddressLogo}
            style={styles.empty}
            btn={false}
          />
        )}

        {address ? (
          <Button
            buttonName="delete"
            handleSubmit={deleteAddress}
            style={styles.btn}
          />
        ) : (
          <Button
            buttonName="add"
            handleSubmit={addAddress}
            style={styles.btn}
          />
        )}
      </ScrollView>
    </View>
  );
};

export default Address;
