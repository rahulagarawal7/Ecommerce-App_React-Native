import React, {useEffect} from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {BackButton, SeeAllProductList} from '../../component';
import {colors, ms} from '../../utils';
import {t} from 'i18next';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/types';
import {useDispatch, useSelector} from 'react-redux';
import {getProductsList} from '../../redux/slices/category/categorySlice';
import {AppDispatch, RootState} from '../../redux/store/store';

interface CategoryWiseListProps {
  route: RouteProp<RootStackParamList, 'categoryWiseList'>;
}

const CategoriesWiseList: React.FC<CategoryWiseListProps> = ({route}) => {
  const {name}: any = route?.params;
  const dispatch = useDispatch<AppDispatch>();

  const {productList, loading} = useSelector(
    (state: RootState) => state.category,
  );

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://fakestoreapi.in/api/products/category?type=${name}`,
      );
      const json = await response.json();
      if (json?.products) {
        dispatch(getProductsList(json.products));
      } else {
        console.error('Invalid API response:', json);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [name]);

  return (
    <View style={styles.container}>
      <BackButton heading="back" />
      <Text style={styles.headingText}>
        {t(name)} ({productList.length})
      </Text>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <SeeAllProductList productList={productList} load={false} />
      )}
    </View>
  );
};

export default CategoriesWiseList;

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
});
