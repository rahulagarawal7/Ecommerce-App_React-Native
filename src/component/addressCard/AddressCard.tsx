import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {FC, useEffect, useState} from 'react';
import {colors, ms} from '../../utils';
import {AddressType} from '../../utils/types';
import {screenNames} from '../../utils/constants';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/types';

interface AddressCardProps {
  address: AddressType;
}

const AddressCard: React.FC<AddressCardProps> = ({address}) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const {city = '', streetAddress = '', userState = '', zipCode = ''} = address;
  const [shortAdd, setShortAdd] = useState<string>('');

  const shortAddress = () => {
    const data = city + ' ' + streetAddress + ' ' + userState + ' ' + zipCode;
    const shortAddress = data?.split(' ').splice(0, 4).join(' ');
    setShortAdd(shortAddress);
  };

  useEffect(() => {
    shortAddress();
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{shortAdd}...</Text>
      <Text
        style={styles.editText}
        onPress={() => navigation.navigate(screenNames.addAddress, undefined)}>
        Edit
      </Text>
    </View>
  );
};

export default AddressCard;

const styles = StyleSheet.create({
  container: {
    height: ms(72),
    width: ms(342),
    backgroundColor: colors.secondaryBgColor,
    borderRadius: 10,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: colors.textColor,
    fontSize: ms(16),
  },
  editText: {
    fontSize: ms(20),
    color: colors.tintColor,
  },
});
