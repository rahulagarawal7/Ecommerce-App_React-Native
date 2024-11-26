import {ActivityIndicator, FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import ProductCard from '../productCard/ProductCard';
import {InitialProductsStateTypes, ProductTypes} from '../../utils/types';
import {useAppDispatch, useAppSelector} from '../../redux/store/store';
import {getAllProductsActions} from '../../redux/slices/products/products.actions';

interface SeeAllProductListProps {
  productList: ProductTypes[];
  load?: boolean;
}

const SeeAllProductList: React.FC<SeeAllProductListProps> = ({
  productList,
  load = true,
}) => {
  const dispatch = useAppDispatch();
  const fetchMoreData = () => {
    dispatch(getAllProductsActions({limit: '9', page: '2'}));
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={productList}
        renderItem={({item}) => <ProductCard product={item} />}
        keyExtractor={item =>
          item?.id?.toString() || item?.brand || 'default_key'
        }
        showsHorizontalScrollIndicator={false}
        numColumns={2}
        onEndReached={fetchMoreData}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          load ? <ActivityIndicator size="large" color="#0000ff" /> : null
        }
      />
    </View>
  );
};

export default SeeAllProductList;

const styles = StyleSheet.create({
  container: {
    marginBottom: 90,
  },
});
