import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {SearchIcon} from '../../assets';
import {colors, ms} from '../../utils';
import {t} from 'i18next';
import {styles} from './styles';

interface SearchBarProps {
  placeholder: string;
  value?: string;
  onChangeText?: Function;
  autoFocus?: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder,
  onChangeText,
  value,
  autoFocus = false,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Image source={SearchIcon} style={styles.searchImage} />
        <TextInput
          value={value}
          autoFocus={autoFocus}
          placeholder={t(placeholder)}
          style={styles.searchText}
          placeholderTextColor={colors.textColor}
          onChangeText={onChangeText}
        />
      </View>
    </View>
  );
};

export default SearchBar;
