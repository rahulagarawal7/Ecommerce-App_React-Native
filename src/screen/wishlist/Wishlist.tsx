import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {BackButton, EmptyPage} from '../../component';
import {CartEmptyLogo} from '../../assets';
import {colors, ms} from '../../utils';
import {t} from 'i18next';
import {ProductTypes} from '../../utils/types';
import {useDispatch} from 'react-redux';
import {removeWishList} from '../../redux/slices/wishList/wishList';

const Wishlist = () => {
  const dispatch = useDispatch();
  const [likedProducts, setLikedProducts] = useState<ProductTypes[]>([]);

  const loadLikedProducts = async () => {
    try {
      const likedProducts = await AsyncStorage.getItem('likedProducts');
      if (likedProducts) {
        setLikedProducts(JSON.parse(likedProducts));
      }
    } catch (error) {
      console.error('Failed to load liked products:', error);
    }
  };

  const removeFromWishlist = async (productId: number | undefined) => {
    dispatch(removeWishList());
    try {
      const likedProducts = await AsyncStorage.getItem('likedProducts');
      if (likedProducts) {
        const parsedLikedProducts = JSON.parse(likedProducts);
        const updatedLikedProducts = parsedLikedProducts.filter(
          (item: {id: number}) => item.id !== productId,
        );

        await AsyncStorage.setItem(
          'likedProducts',
          JSON.stringify(updatedLikedProducts),
        );
        setLikedProducts(updatedLikedProducts);
      }
    } catch (error) {
      console.error('Failed to remove product from wishlist:', error);
    }
  };

  useEffect(() => {
    loadLikedProducts();
  }, []);

  const handleRemovePress = (productId: number | undefined) => {
    Alert.alert(
      'Remove from Wishlist',
      'Are you sure you want to remove this product from your wishlist?',
      [
        {text: 'Cancel', style: 'cancel'},
        {text: 'Remove', onPress: () => removeFromWishlist(productId)},
      ],
    );
  };

  const renderProductItem = ({item}: {item: ProductTypes}) => (
    <View style={styles.productCard}>
      <Image source={{uri: item.image}} style={styles.productImage} />
      <View style={styles.productInfo}>
        <Text style={styles.productTitle}>{item.title}</Text>
        <Text style={styles.productBrand}>{item.brand}</Text>
        <Text style={styles.productPrice}>${item.price}</Text>
        <TouchableOpacity
          style={styles.removeButton}
          onPress={() => handleRemovePress(item.id)}>
          <Text style={styles.removeButtonText}>{t('remove')}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <BackButton heading="back" />

      {likedProducts.length === 0 ? (
        <>
          <View style={styles.emptyBox}>
            <EmptyPage
              title="Your wishlist is empty"
              btnName="Explore Categories"
              image={CartEmptyLogo}
              btn={true}
              navigationScreeName="seeAllCategories"
            />
          </View>
        </>
      ) : (
        <FlatList
          data={likedProducts}
          renderItem={renderProductItem}
          keyExtractor={(item, index) =>
            item?.id ? item.id.toString() : index.toString()
          }
        />
      )}
    </View>
  );
};

export default Wishlist;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.primaryBgColor,
  },
  productCard: {
    width: '90%',
    height: ms(400),
    backgroundColor: colors.cardBgColor,
    margin: 5,
    alignSelf: 'center',
    borderRadius: 10,
  },
  productImage: {
    height: ms(200),
    width: '100%',
    objectFit: 'contain',
    alignSelf: 'center',
    marginTop: 10,
    borderRadius: 10,
  },
  productInfo: {
    width: '100%',
    height: ms(200),
    gap: 5,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  productTitle: {
    color: colors.textColor,
    fontSize: ms(15),
    textAlign: 'center',
    fontWeight: '500',
  },
  productBrand: {
    color: colors.textColor,
    fontSize: ms(25),
    textAlign: 'center',
    fontWeight: '800',
  },
  productPrice: {
    color: colors.textColor,
    fontSize: ms(18),
    textAlign: 'center',
    fontWeight: '800',
  },
  removeButton: {
    height: ms(52),
    width: '90%',
    backgroundColor: colors.tintColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    alignSelf: 'center',
  },
  removeButtonText: {
    color: colors.primaryBgColor,
    fontSize: ms(18),
    fontWeight: '600',
  },
  emptyBox: {
    marginTop: '40%',
  },
});
