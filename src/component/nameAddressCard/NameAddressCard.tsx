import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, ms} from '../../utils';
import {useTranslation} from 'react-i18next';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {screenNames} from '../../utils/constants';
import {RootStackParamList} from '../../navigation/types';

interface NameAddressCardProps {
  userInfo: UserInfo;
}
interface UserInfo {
  name: string;
  email: string;
  phone: number;
}

const NameAddressCard: React.FC<NameAddressCardProps> = ({userInfo}) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.nameText}>{userInfo?.name}</Text>
        <Text style={styles.emailText}>{userInfo?.email}</Text>
        <Text style={styles.emailText}>{userInfo?.phone}</Text>
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

const styles = StyleSheet.create({
  container: {
    height: ms(96),
    width: ms(342),
    backgroundColor: colors.secondaryBgColor,
    alignSelf: 'center',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  nameText: {
    color: colors.textColor,
    fontWeight: '600',
    fontSize: ms(18),
  },
  innerContainer: {
    height: ms(80),
    width: ms(230),
    justifyContent: 'space-between',
  },
  emailText: {
    color: colors.textColor,
    fontWeight: '400',
    fontSize: ms(16),
  },
  editText: {
    color: colors.tintColor,
    fontWeight: '400',
    fontSize: ms(18),
    width: ms(90),
    textAlign: 'right',
  },
});
