import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {BackArrowLogo} from '../../assets';
import {colors, ms} from '../../utils';
import {SearchBar} from '../../component';
import {t} from 'i18next';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';

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
