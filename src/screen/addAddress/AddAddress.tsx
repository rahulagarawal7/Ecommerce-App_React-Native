import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BackButton, Button, InputBox} from '../../component';
import {colors, ms} from '../../utils';

const AddAddress = () => {
  const handleSubmit = () => {};
  return (
    <View style={styles.container}>
      <BackButton heading={'back'} />

      <InputBox placeholder="street address" />
      <InputBox placeholder="city" />
      <View style={styles.box}>
        <InputBox placeholder="state" containerStyle={styles.smallInputBox} />
        <InputBox
          placeholder="zip code"
          containerStyle={styles.smallInputBox}
        />
      </View>
      <Button buttonName="add" handleSubmit={handleSubmit} />
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
});
