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
import {styles} from './styles';

interface RootState {
  user: {
    userInfo: FirebaseAuthTypes.User;
  };
}

const Profile = () => {
  const userInfo = useSelector((store: RootState) => store?.user?.userInfo);
  const userImage = useSelector((store)=>store?.user.userImage);

  const handleSignOut = () => {
    Alert.alert(t('sign out'), t('are you sure you want to sign out?'), [
      {
        text: t('cancel'),
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: t('ok'),
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
      <Image source={userImage?.length>0 ? {uri:userImage} : UserLogo} style={styles.userImage} />
      
   
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
          {t('sign out')}
        </Text>
      </View>
    </ScrollView>
  );
};

export default Profile;
