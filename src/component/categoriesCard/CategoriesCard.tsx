import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors, ms} from '../../utils';
import {categoriesList, screenNames} from '../../utils/constants';
import {useTranslation} from 'react-i18next';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/types';
import {styles} from './styles';

const CategoriesCard: React.FC = () => {
  const {t} = useTranslation();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      {categoriesList.map(category => (
        <TouchableOpacity
          key={category.id}
          style={styles.box}
          onPress={() =>
            navigation.navigate(screenNames.categoriesWiseList, {
              name: category.categoriesName,
            })
          }>
          <View style={styles.imageBox}>
            <Image source={category.categoriesImage} style={styles.image} />
          </View>

          <Text style={styles.categoriesNameText}>
            {t(category.categoriesName)}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default CategoriesCard;
