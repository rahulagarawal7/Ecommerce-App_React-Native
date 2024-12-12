import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BackButton, SeeAllProductList} from '../../component';
import {colors, ms} from '../../utils';
import {t} from 'i18next';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/types';

interface CategoryListProps {
  route: RouteProp<RootStackParamList, 'categoryList'>;
}

const CategoryList: React.FC<CategoryListProps> = ({route}) => {
  return (
    <View style={styles.container}>
      <View style={styles.backBox}>
        <BackButton heading="back" />
      </View>
      <Text style={styles.headingText}>{t(route?.params?.name)}</Text>
      <View style={styles.list}>
        <SeeAllProductList productList={route?.params?.data} />
      </View>
    </View>
  );
};

export default CategoryList;

const styles = StyleSheet.create({
  headingText: {
    color: colors.textColor,
    fontWeight: '600',
    fontSize: ms(20),
    padding: 15,
  },
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: colors.primaryBgColor,
  },
  list: {
    marginBottom: 90,
  },
  backBox: {
    marginTop: ms(10),
  },
});
