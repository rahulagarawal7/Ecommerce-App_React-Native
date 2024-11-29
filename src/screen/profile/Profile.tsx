import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {UserLogo} from '../../assets';
import {AddButtonCard, NameAddressCard} from '../../component';
import {colors, ms} from '../../utils';
import {profileButtonNames} from '../../utils/constants';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {useSelector} from 'react-redux';
import {t} from 'i18next';

interface RootState {
  user: {
    userInfo: FirebaseAuthTypes.User;
  };
}

const Profile = () => {
  const userInfo = useSelector((store: RootState) => store?.user?.userInfo);

  const handleSignOut = () => {
    Alert.alert('Sign Out', 'Are you sure you want to sign out?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => {
          console.log('OK Pressed');
          auth()
            .signOut()
            .then(() => console.log('User signed out!'));
        },
      },
    ]);
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.userImageContainer}>
        <Image source={UserLogo} style={styles.UserImage} />
      </View>
      <NameAddressCard userInfo={userInfo} />
      <View style={styles.btnBox}>
        {profileButtonNames.map(btn => (
          <AddButtonCard
            key={btn.id}
            title={btn.name}
            screenName={btn.screenName}
          />
        ))}

        <Text style={styles.text} onPress={() => handleSignOut()}>
          {t('signOut')}
        </Text>
      </View>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.primaryBgColor,
    gap: 20,
  },
  UserImage: {
    width: ms(80),
    height: ms(80),
    borderRadius: 80,
  },
  userImageContainer: {
    height: ms(180),
    alignSelf: 'center',
    justifyContent: 'flex-end',
  },
  btnBox: {
    gap: 10,
  },
  scrollViewContainer: {
    gap: 25,
  },
  text: {
    width: ms(60),
    fontSize: ms(15),
    marginBottom: 10,
    color: colors.tintColor,
    marginLeft: 5,
  },
});
