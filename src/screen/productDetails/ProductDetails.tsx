import {
  Alert,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {BackButton, Button} from '../../component';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {RootStackParamList} from '../../navigation/types';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import {ProductTypes} from '../../utils/types';
import {screenNames, showShankBar} from '../../utils/constants';
import {CartLogo} from '../../assets';
import {styles} from './styles';
import {t} from 'i18next';
import {ms} from '../../utils';

interface ProductDetailsProps {
  route: RouteProp<RootStackParamList, 'productDetails'>;
  navigation: NavigationProp<RootStackParamList, 'Cart'>;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({route, navigation}) => {
  const {image, brand, description, title, price} = route?.params?.data;
  const [onCart, setOnCart] = useState(false);
  const [cartProducts, setCartProducts] = useState([]);

  const saveToCart = async (product: any) => {
    setOnCart(true);
    try {
      const cartProducts = await AsyncStorage.getItem('cartProducts');
      const parsedCartProducts = cartProducts ? JSON.parse(cartProducts) : [];

      if (
        !parsedCartProducts.some((item: {id: number}) => item.id === product.id)
      ) {
        parsedCartProducts.push(product);
      }

      await AsyncStorage.setItem(
        'cartProducts',
        JSON.stringify(parsedCartProducts),
      );
      showShankBar(t('product added to cart'));
    } catch (error) {
      console.error('Failed to save Cart product:', error);
      showShankBar(t('failed to save cart product'), t('error'));
    }
  };

  const removeCartProduct = async (product: any) => {
    try {
      setOnCart(false);
      const cartProducts = await AsyncStorage.getItem('cartProducts');
      const parsedCartProducts = cartProducts ? JSON.parse(cartProducts) : [];

      const updatedCartProducts = parsedCartProducts.filter(
        (item: {id: number}) => item.id !== product.id,
      );

      await AsyncStorage.setItem(
        'cartProducts',
        JSON.stringify(updatedCartProducts),
      );
      showShankBar(t('product remove from cart'));
    } catch (error) {
      console.error('Failed to remove Cart product:', error);
      showShankBar(t('failed to remove cart product'), 'error');
    }
  };

  const loadCartProducts = async () => {
    try {
      const cartProducts = await AsyncStorage.getItem('cartProducts');
      if (cartProducts) {
        setCartProducts(JSON.parse(cartProducts));
      }
    } catch (error) {
      console.error('Failed to load Cart products:', error);
    }
  };

  const handleClicked = (product: ProductTypes) => {
    if (onCart) {
      Alert.alert(
        t('remove from cart'),
        t('are you sure you want to remove this product from your Cart?'),
        [
          {text: t('cancel'), style: 'cancel'},
          {text: t('remove'), onPress: () => removeCartProduct(product)},
        ],
      );
    } else {
      Alert.alert(
        t('add to cart'),
        t('are you sure you want to add  this product to your cart?'),
        [
          {text: t('cancel'), style: 'cancel'},
          {text: t('save'), onPress: () => saveToCart(product)},
        ],
      );
    }
  };
  const productFound = () => {
    if (cartProducts) {
      const found = cartProducts?.find(
        (item: ProductTypes) => item?.id === route?.params?.data?.id,
      );
      if (found) {
        setOnCart(true);
      }
    }
  };

  useEffect(() => {
    loadCartProducts();
  }, []);

  useEffect(() => {
    productFound();
  }, [cartProducts]);
  return (
    <View style={styles.container}>
      <View style={styles.backBox}>
        <BackButton heading="back" />
      </View>

      <TouchableOpacity
        style={styles.cartBox}
        onPress={() => {
          navigation.navigate(screenNames.cart, undefined);
        }}>
        <Image style={styles.cartLogo} source={CartLogo} />
      </TouchableOpacity>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.box}>
          <Image source={{uri: image}} style={styles.imageStyle} />
          <Text style={styles.text}>{brand}</Text>
          <Text style={styles.text}>Price - ${price}</Text>
          <Text style={styles.descText}>{description} </Text>
          <Text style={styles.textTitle}>{title}</Text>
          <Button
            buttonName={onCart ? t('remove') : t('add to cart')}
            handleSubmit={() => handleClicked(route?.params?.data)}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default ProductDetails;
