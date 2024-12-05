import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {likeLogo, likeRedLogo} from '../../assets';
import {colors, ms} from '../../utils';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {screenNames, showShankBar} from '../../utils/constants';
import {RootStackParamList} from '../../navigation/types';
import {ProductTypes} from '../../utils/types';
import {useSelector} from 'react-redux';
import {styles} from './styles';
import { t } from 'i18next';

interface ProductCardProps {
  product: ProductTypes;
}

const ProductCard: React.FC<ProductCardProps> = ({product}) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const [like, setLike] = useState<boolean>(false);
  const [likedProducts, setLikedProducts] = useState<ProductTypes[]>([]);

  const changeDone = useSelector(store => store?.wishList);

  const checkIfLiked = (productId: number) => {
    return likedProducts.some(item => item.id === productId);
  };

  const saveLikedProduct = async (product: ProductTypes) => {
    try {
      const likedProducts = await AsyncStorage.getItem('likedProducts');
      const parsedLikedProducts = likedProducts
        ? JSON.parse(likedProducts)
        : [];

      if (
        !parsedLikedProducts.some(
          (item: {id: number}) => item.id === product.id,
        )
      ) {
        parsedLikedProducts.push(product);
      }

      await AsyncStorage.setItem(
        'likedProducts',
        JSON.stringify(parsedLikedProducts),
      );
      showShankBar(t('added to wishlist'));
    } catch (error) {
      console.error('Failed to save liked product:', error);
      showShankBar(t('failed to save liked product'), 'error');
    }
  };

  const removeLikedProduct = async (product: ProductTypes) => {
    try {
      const likedProducts = await AsyncStorage.getItem('likedProducts');
      const parsedLikedProducts = likedProducts
        ? JSON.parse(likedProducts)
        : [];

      const updatedLikedProducts = parsedLikedProducts.filter(
        (item: {id: number}) => item.id !== product.id,
      );

      await AsyncStorage.setItem(
        'likedProducts',
        JSON.stringify(updatedLikedProducts),
      );
      showShankBar(t('remove from wishlist'));
    } catch (error) {
      console.error('Failed to remove liked product:', error);
      showShankBar(t('failed to remove liked product'), 'error');
    }
  };

  const loadLikedProducts = async () => {
    try {
      const likedProducts = await AsyncStorage.getItem('likedProducts');
      if (likedProducts) {
        const parsedLikedProducts = JSON.parse(likedProducts);
        setLikedProducts(parsedLikedProducts);
      }
    } catch (error) {
      console.error('Failed to load liked products:', error);
    }
  };

  const handleLikePressed = () => {
    const isLiked = checkIfLiked(product.id);

    if (isLiked) {
      removeLikedProduct(product);
      setLike(false);
    } else {
      saveLikedProduct(product);
      setLike(true);
    }
  };

  useEffect(() => {
    loadLikedProducts();
    setLike(checkIfLiked(product.id));
  }, [likedProducts, changeDone]);

  useEffect(() => {
    setTimeout(() => {
      setLike(checkIfLiked(product.id));
    }, 10);
  }, [changeDone]);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate(screenNames.productDetails, {data: product})
      }>
      <Image source={{uri: product?.image}} style={styles.ProductImage} />
      <TouchableOpacity
        style={styles.likeContainer}
        onPress={handleLikePressed}>
        <Image source={like ? likeRedLogo : likeLogo} style={styles.lkeImage} />
      </TouchableOpacity>
      <View style={styles.textBox}>
        <Text style={styles.nameText}>{product?.brand}</Text>
        <Text style={styles.priceText}>${product?.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
