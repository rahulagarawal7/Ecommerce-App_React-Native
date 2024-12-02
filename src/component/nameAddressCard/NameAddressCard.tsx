import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, ms} from '../../utils';
import {useTranslation} from 'react-i18next';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {screenNames} from '../../utils/constants';
import {RootStackParamList} from '../../navigation/types';
import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {styles} from './styles';

type NameAddressCardProps = {
  userInfo: FirebaseAuthTypes.User | null;
};

const NameAddressCard: React.FC<NameAddressCardProps> = ({userInfo}) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.nameText}>{userInfo?.displayName}</Text>
        <Text style={styles.emailText}>{userInfo?.email}</Text>
        <Text style={styles.emailText}>{userInfo?.photoURL}</Text>
      </View>
      <View>
        <Text
          style={styles.editText}
          onPress={() =>
            navigation.navigate(screenNames.userProfile, undefined)
          }>
          {t('edit')}
        </Text>
      </View>
    </View>
  );
};

export default NameAddressCard;
