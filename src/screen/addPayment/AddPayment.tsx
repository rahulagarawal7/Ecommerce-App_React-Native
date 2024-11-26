import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BackButton, Button, InputBox} from '../../component';
import {colors, ms} from '../../utils';

const AddPayment = () => {
  const handleSubmit = () => {};
  return (
    <View style={styles.container}>
      <BackButton heading={'back'} />

      <InputBox placeholder="card number" />
      <View style={styles.box}>
        <InputBox placeholder="ccv" containerStyle={styles.smallInputBox} />
        <InputBox placeholder="exp" containerStyle={styles.smallInputBox} />
      </View>
      <InputBox placeholder="cardholder name" />

      <Button buttonName="add" handleSubmit={handleSubmit} />
    </View>
  );
};

export default AddPayment;

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
});
