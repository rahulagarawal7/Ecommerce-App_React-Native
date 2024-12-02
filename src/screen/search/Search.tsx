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
import {styles} from './styles';

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
