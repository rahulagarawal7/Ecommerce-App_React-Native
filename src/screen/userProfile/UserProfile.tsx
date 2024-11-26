import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BackButton, Button, InputBox} from '../../component';
import {colors, ms} from '../../utils';
import {UserLogo} from '../../assets';

const UserProfile = () => {
  const handleSubmit = () => {};
  return (
    <ScrollView style={styles.outerBox}>
      <BackButton heading={'back'} />
      <View style={styles.container}>
        <View style={styles.userImageBox}>
          <Image source={UserLogo} style={styles.userImage} />
        </View>

        <InputBox placeholder="name" />
        <InputBox placeholder="email" />

        <InputBox placeholder="phone" />

        <Button buttonName="update" handleSubmit={handleSubmit} />
      </View>
    </ScrollView>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  container: {
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
  outerBox: {
    backgroundColor: colors.primaryBgColor,
    height: '100%',
    width: '100%',
  },
  userImageBox: {
    height: ms(120),
    width: ms(120),
    borderRadius: 120,
    alignSelf: 'center',
    marginTop: '20%',
  },
  userImage: {
    height: ms(100),
    width: ms(100),
    borderRadius: 120,
    objectFit: 'fill',
  },
});
