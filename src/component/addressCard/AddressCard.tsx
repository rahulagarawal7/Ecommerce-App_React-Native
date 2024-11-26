import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import {colors, ms} from '../../utils';

interface AddressCardProps {
  address: string;
}

const AddressCard: React.FC<AddressCardProps> = ({address}) => {
  const shortAddress = address?.split(' ').splice(0, 4).join(' ');
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>{shortAddress}...</Text>
      <Text style={styles.editText}>Edit</Text>
    </TouchableOpacity>
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
