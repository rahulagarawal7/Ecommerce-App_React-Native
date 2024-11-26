import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors, ms} from '../../utils';
import {categoriesList, screenNames} from '../../utils/constants';
import {useTranslation} from 'react-i18next';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/types';

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

const styles = StyleSheet.create({
  container: {
    height: ms(100),
    width: ms(342),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    gap: 10,
    backgroundColor: colors.primaryBgColor,
  },
  imageBox: {
    height: ms(56),
    width: ms(56),
    borderRadius: 56,
    backgroundColor: colors.cardBgColor,
  },
  image: {
    height: ms(56),
    width: ms(56),
    borderRadius: 56,
    alignSelf: 'center',
    objectFit: 'cover',
  },
  box: {
    gap: 5,
  },
  categoriesNameText: {
    textAlign: 'center',
    color: colors.textColor,
  },
});
