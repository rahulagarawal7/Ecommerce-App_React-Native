import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {SearchIcon} from '../../assets';
import {colors, ms} from '../../utils';
import {t} from 'i18next';
import {styles} from './styles';

interface SearchBarProps {
  placeholder: string;
}

const SearchBar: React.FC<SearchBarProps> = ({placeholder}) => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Image source={SearchIcon} style={styles.searchImage} />
        <TextInput
          placeholder={t(placeholder)}
          style={styles.searchText}
          placeholderTextColor={colors.textColor}
        />
      </View>
    </View>
  );
};

export default SearchBar;
