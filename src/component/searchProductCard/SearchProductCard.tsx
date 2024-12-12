import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {likeLogo, likeRedLogo} from '../../assets';
import {colors, ms} from '../../utils';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {screenNames, showShankBar} from '../../utils/constants';
import {RootStackParamList} from '../../navigation/types';
import {ProductTypes} from '../../utils/types';
import {useSelector} from 'react-redux';
import {t} from 'i18next';

interface ProductCardProps {
  product: ProductTypes;
}

const SearchProductCard: React.FC<ProductCardProps> = ({product}) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const [like, setLike] = useState<boolean>(false);
  const [likedProducts, setLikedProducts] = useState<ProductTypes[]>([]);
  const [loading, setLoading] = useState(true);
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
      <View style={styles.boxImage}>
        {loading && (
          <View style={styles.loadingBox}>
            <ActivityIndicator size="large" color={colors.tintColor} />
          </View>
        )}
        <Image
          onLoad={() => setLoading(false)}
          source={{uri: product?.image}}
          style={styles.ProductImage}
        />
      </View>
      <View style={styles.boxContain}>
        <TouchableOpacity
          style={styles.likeContainer}
          onPress={handleLikePressed}>
          <Image
            source={like ? likeRedLogo : likeLogo}
            style={styles.lkeImage}
          />
        </TouchableOpacity>
        <View style={styles.textBox}>
          <Text style={styles.nameText}>{product?.brand}</Text>
          <Text style={styles.priceText}>${product?.price}</Text>
          <Text style={styles.priceText}>{product?.model}</Text>
          <Text style={styles.priceText}>{product?.category}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SearchProductCard;
const styles = StyleSheet.create({
  container: {
    height: ms(200),
    width: '90%',
    borderRadius: 10,
    backgroundColor: colors.secondaryBgColor,
    borderWidth: 0.4,
    borderColor: colors.textColor,
    margin: 5,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxImage: {
    height: ms(180),
    width: '45%',
  },
  boxContain: {
    height: ms(180),
    width: '45%',
  },
  loadingBox: {
    marginTop: ms(35),
    height: ms(170),
    width: ms(156),
    position: 'absolute',
    zIndex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  ProductImage: {
    height: ms(180),
    width: '100%',
    backgroundColor: colors.cardBgColor,
    objectFit: 'contain',
  },
  lkeImage: {
    height: ms(25),
    width: ms(24),
  },
  likeContainer: {
    alignSelf: 'flex-end',
  },

  textBox: {
    marginHorizontal: 10,
    gap: 10,
  },
  priceText: {
    color: colors.textColor,
    fontWeight: '700',
    fontSize: ms(16),
  },
  nameText: {
    color: colors.textColor,
    fontWeight: '400',
    fontSize: ms(20),
  },
});
