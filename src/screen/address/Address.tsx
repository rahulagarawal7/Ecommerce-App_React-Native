import {Alert, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  AddressCard,
  BackButton,
  Button,
  EmptyPage,
  InputBox,
} from '../../component';
import {colors, ms} from '../../utils';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {EmptyAddressLogo} from '../../assets';
import {screenNames} from '../../utils/constants';
import {RootStackParamList} from '../../navigation/types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AddressType} from '../../utils/types';

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
      'Delete Address',
      'Are you sure you want to delete this address?',
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
      <BackButton heading="back" />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {address ? (
          <View style={styles.addressCard}>
            <AddressCard address={address} />
          </View>
        ) : (
          <>
            <EmptyPage
              title="no address found"
              btnName="add"
              image={EmptyAddressLogo}
              style={styles.empty}
            />
          </>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryBgColor,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 80,
  },
  btn: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
  empty: {
    marginTop: '30%',
  },
  addressCard: {
    marginTop: ms(20),
  },
});
