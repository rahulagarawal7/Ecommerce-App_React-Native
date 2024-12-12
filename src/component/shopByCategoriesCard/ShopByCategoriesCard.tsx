import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {colors, ms} from '../../utils';
import {t} from 'i18next';
import {styles} from './styles';

interface ShopByCategoriesCard {
  categoryName: string;
  categoryImage: string;
}

const ShopByCategoriesCard: React.FC<ShopByCategoriesCard> = ({
  categoryName,
  categoryImage,
}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: categoryImage}} style={styles.image} />
      <Text style={styles.nameText}>{t(categoryName)}</Text>
    </View>
  );
};

export default ShopByCategoriesCard;
