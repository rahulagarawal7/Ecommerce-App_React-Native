import {FlatList, View} from 'react-native';
import React from 'react';
import ProductCard from '../productCard/ProductCard';
import {ProductTypes} from '../../utils/types';

interface ProductCardListProps {
  productList: ProductTypes[];
}

const ProductCardList: React.FC<ProductCardListProps> = ({productList}) => {
  const limitedProductList = productList?.slice(0, 9);
  return (
    <View>
      <FlatList
        data={limitedProductList}
        renderItem={({item}) => <ProductCard product={item} />}
        keyExtractor={item =>
          item?.id?.toString() || item?.brand || 'default_key'
        }
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default ProductCardList;
