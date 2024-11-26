import {Alert, Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {BackButton, Button} from '../../component';
import {colors, ms} from '../../utils';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {RootStackParamList} from '../../navigation/types';
import {RouteProp} from '@react-navigation/native';
import {ProductTypes} from '../../utils/types';

interface ProductDetailsProps {
  route: RouteProp<RootStackParamList, 'productDetails'>;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({route}) => {
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
    } catch (error) {
      console.error('Failed to save Cart product:', error);
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
    } catch (error) {
      console.error('Failed to remove Cart product:', error);
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
        'Remove from Cart',
        'Are you sure you want to remove this product from your Cart?',
        [
          {text: 'Cancel', style: 'cancel'},
          {text: 'Remove', onPress: () => removeCartProduct(product)},
        ],
      );
    } else {
      Alert.alert(
        'Add to  Cart',
        'Are you sure you want to add  this product to your Cart?',
        [
          {text: 'Cancel', style: 'cancel'},
          {text: 'Save', onPress: () => saveToCart(product)},
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
      <BackButton heading="back" />
      <ScrollView style={styles.box} showsVerticalScrollIndicator={false}>
        <Image source={{uri: image}} style={styles.imageStyle} />
        <Text style={styles.text}>{brand}</Text>
        <Text style={styles.text}>Price - ${price}</Text>
        <Text style={styles.descText}>{description} </Text>
        <Text style={styles.textTitle}>{title}</Text>

        <Button
          buttonName={onCart ? 'remove ' : 'add to cart'}
          handleSubmit={() => handleClicked(route?.params?.data)}
        />
      </ScrollView>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: colors.primaryBgColor,
  },
  box: {
    width: ms(342),
    backgroundColor: colors.cardBgColor,
    height: '100%',
    alignSelf: 'center',
    borderRadius: 10,
    marginVertical: ms(20),
  },
  lkeImage: {
    height: ms(25),
    width: ms(24),
  },
  likeContainer: {
    position: 'absolute',
    alignSelf: 'flex-end',
    padding: 15,
  },
  imageStyle: {
    height: ms(300),
    width: ms(300),
    alignSelf: 'center',
    marginTop: ms(50),
    borderRadius: 10,
  },
  text: {
    fontSize: ms(20),
    padding: 10,
    fontWeight: '700',
    color: colors.textColor,
  },
  descText: {
    textAlign: 'justify',
    padding: 10,
    color: colors.textColor,
  },
  textTitle: {
    color: colors.textColor,
    padding: 10,
    textAlign: 'justify',
    fontSize: ms(18),
  },
});
