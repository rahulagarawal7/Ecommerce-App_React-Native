import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {SearchIcon} from '../../assets';
import {colors, ms} from '../../utils';
import {t} from 'i18next';

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

const styles = StyleSheet.create({
  container: {
    height: ms(40),
    width: ms(342),
    backgroundColor: colors.secondaryBgColor,
    alignSelf: 'center',
    borderRadius: 20,
    justifyContent: 'center',
  },
  box: {
    flexDirection: 'row',
    marginHorizontal: ms(10),
  },
  searchImage: {
    height: ms(16),
    width: ms(16),
    alignSelf: 'center',
  },
  searchText: {
    marginHorizontal: 10,
    color: colors.textColor,
  },
});
