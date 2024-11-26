import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {colors, ms} from '../../utils';
import {BackButton, SearchBar, ShopByCategoriesCard} from '../../component';
import {categoriesList, screenNames} from '../../utils/constants';
import {t} from 'i18next';
import {NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/types';

interface SearchProps {
  navigation: NavigationProp<RootStackParamList>;
}

const Search: React.FC<SearchProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <BackButton heading="back" />
      <SearchBar placeholder="search" />
      <ScrollView>
        <View style={styles.box}>
          <Text style={styles.headingText}>{t('shop by category')}</Text>
          {categoriesList.map(category => (
            <TouchableOpacity
              key={category.id}
              onPress={() => {
                navigation.navigate(screenNames.categoriesWiseList, {
                  name: category.categoriesName,
                });
              }}>
              <ShopByCategoriesCard
                categoryImage={category.categoriesImage}
                categoryName={category.categoriesName}
              />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: colors.primaryBgColor,
    gap: 15,
  },
  box: {
    marginTop: ms(20),
  },
  headingText: {
    fontSize: ms(18),
    fontWeight: '500',
    padding: ms(15),
  },
});
