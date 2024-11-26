import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {BackArrowLogo} from '../../assets';
import {colors, ms} from '../../utils';
import {SearchBar} from '../../component';
import {t} from 'i18next';
import {useNavigation} from '@react-navigation/native';

interface BackButtonProps {
  heading?: string;
  searchBox?: boolean;
}

const BackButton: React.FC<BackButtonProps> = ({heading = '', searchBox}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity
        style={styles.container}
        onPress={() => navigation.goBack()}>
        <Image source={BackArrowLogo} style={styles.image} />
      </TouchableOpacity>
      {searchBox && heading?.length > 0 ? null : heading?.length > 0 ? (
        <Text style={styles.text}>{t(heading)}</Text>
      ) : (
        searchBox && <SearchBar placeholder={'search'} />
      )}
    </View>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  container: {
    height: ms(40),
    width: ms(40),
    borderRadius: 40,
    backgroundColor: colors.secondaryBgColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: ms(12),
    width: ms(6),
  },
  mainContainer: {
    width: ms(342),
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    gap: 5,
  },
  text: {
    marginHorizontal: 20,
    color: colors.textColor,
    fontSize: ms(18),
  },
});
