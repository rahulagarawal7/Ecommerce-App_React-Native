import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Modal, StyleSheet, Text, View} from 'react-native';
import {BackButton, SeeAllProductList} from '../../component';
import {colors, ms} from '../../utils';
import {t} from 'i18next';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/types';
import {useDispatch, useSelector} from 'react-redux';
import {getProductsList} from '../../redux/slices/category/categorySlice';
import {AppDispatch, RootState} from '../../redux/store/store';
import {setLoading} from '../../redux/slices/loading/loadingSlice';
import {styles} from './styles';

interface CategoryWiseListProps {
  route: RouteProp<RootStackParamList, 'categoryWiseList'>;
}

const CategoriesWiseList: React.FC<CategoryWiseListProps> = ({route}) => {
  const {name}: any = route?.params;
  const [length, setLength] = useState(0);
  const dispatch = useDispatch<AppDispatch>();
  const loadProducts = useSelector(
    (store: RootState) => store?.loading?.loading,
  );

  const {productList, loading} = useSelector(
    (state: RootState) => state.category,
  );

  const fetchData = async () => {
    dispatch(setLoading(true));
    try {
      const response = await fetch(
        `https://fakestoreapi.in/api/products/category?type=${name}`,
      );
      const json = await response.json();
      if (json?.products) {
        setLength(json?.products.length);
        dispatch(getProductsList(json.products));
      } else {
        console.error('Invalid API response:', json);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {}, [productList]);

  useEffect(() => {
    dispatch(getProductsList([]));
    fetchData();
  }, [name]);

  return (
    <View style={styles.container}>
      <Modal transparent={true} visible={loadProducts} animationType="fade">
        <View style={styles.loaderOverlay}>
          <ActivityIndicator size="large" color={colors.tintColor} />
          <Text style={styles.loaderText}>Loading Products...</Text>
        </View>
      </Modal>
      <BackButton heading="back" />
      <Text style={styles.headingText}>
        {t(name)} ({productList.length})
      </Text>
      <SeeAllProductList productList={productList} load={false} />
    </View>
  );
};

export default CategoriesWiseList;
