import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {colors, ms} from '../../utils';
import {
  BackButton,
  SearchBar,
  SearchProductCard,
  ShopByCategoriesCard,
} from '../../component';
import {categoriesList, screenNames} from '../../utils/constants';
import {t} from 'i18next';
import {NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/types';
import {styles} from './styles';
import {useAppSelector} from '../../redux/store/store';

interface SearchProps {
  navigation: NavigationProp<RootStackParamList>;
}

const Search: React.FC<SearchProps> = ({navigation}) => {
  const data = useAppSelector(store => store?.products?.products);
  const [searchText, setSearchText] = useState('');
  const filteredData = data.filter(product => {
    if (searchText === '') {
      return null;
    } else {
      return product?.brand?.toLowerCase().includes(searchText?.toLowerCase());
    }
  });

  return (
    <View style={styles.container}>
      <BackButton heading="back" />
      <SearchBar
        autoFocus={true}
        placeholder="search by brand"
        value={searchText}
        onChangeText={(text: string) => setSearchText(text)}
      />
      <ScrollView>
        <View style={styles.box}>
          {filteredData.length > 0 &&
            filteredData.map((product, index) => (
              <SearchProductCard key={index} product={product} />
            ))}
          {filteredData.length === 0 && searchText && (
            <Text style={styles.noResultsText}>{t('no results found')}</Text>
          )}
          {filteredData.length === 0 && !searchText && (
            <>
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
            </>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default Search;
