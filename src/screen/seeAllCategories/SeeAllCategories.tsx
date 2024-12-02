import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {BackButton, ShopByCategoriesCard} from '../../component';
import {colors, ms} from '../../utils';
import {categoriesList, screenNames} from '../../utils/constants';
import {NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/types';
import {styles} from './styles';

interface SeeAllCategoriesProps {
  navigation: NavigationProp<RootStackParamList>;
}

const SeeAllCategories: React.FC<SeeAllCategoriesProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <BackButton heading="back" />
      <View style={styles.box}>
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
    </View>
  );
};

export default SeeAllCategories;
