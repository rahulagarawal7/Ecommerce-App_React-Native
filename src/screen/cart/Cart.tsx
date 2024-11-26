import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {BackButton, EmptyPage} from '../../component';
import {CartEmptyLogo} from '../../assets';
import {colors, ms} from '../../utils';
import {screenNames} from '../../utils/constants';
import {ProductTypes} from '../../utils/types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {t} from 'i18next';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigation/types';

type FinalPaymentScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'cart'
>;

interface CartProps {
  navigation: FinalPaymentScreenNavigationProp;
}

const Cart: React.FC<CartProps> = ({navigation}) => {
  const [cartProducts, setCartProducts] = useState<ProductTypes[]>([]);

  const getPayment = () => {
    const totalPrice = calculateTotal();
    if (totalPrice)
      navigation.navigate(screenNames.finalPayment, {price: totalPrice});
  };

  const loadCartProducts = async () => {
    try {
      const cartProducts = await AsyncStorage.getItem('cartProducts');
      if (cartProducts) {
        const parsedCartProducts = JSON.parse(cartProducts).map(
          (product: ProductTypes) => ({
            ...product,
            quantity: product.quantity || 1,
          }),
        );
        setCartProducts(parsedCartProducts);
      }
    } catch (error) {
      console.error('Failed to load cart products:', error);
    }
  };

  const updateCartStorage = async (updatedCart: ProductTypes[]) => {
    try {
      await AsyncStorage.setItem('cartProducts', JSON.stringify(updatedCart));
    } catch (error) {
      console.error('Failed to update cart storage:', error);
    }
  };

  const incrementQuantity = (productId: number | undefined) => {
    const updatedCart = cartProducts.map(product =>
      product.id === productId
        ? {...product, quantity: product.quantity + 1}
        : product,
    );
    setCartProducts(updatedCart);
    updateCartStorage(updatedCart);
  };

  const decrementQuantity = (productId: number | undefined) => {
    const updatedCart = cartProducts.map(product =>
      product.id === productId && product?.quantity > 1
        ? {...product, quantity: product?.quantity - 1}
        : product,
    );
    setCartProducts(updatedCart);
    updateCartStorage(updatedCart);
  };

  const removeFromCart = async (productId: number | undefined) => {
    const updatedCart = cartProducts.filter(item => item.id !== productId);
    setCartProducts(updatedCart);
    updateCartStorage(updatedCart);
  };

  const handleRemovePress = (productId: number | undefined) => {
    Alert.alert(
      'Remove from cart',
      'Are you sure you want to remove this product from your cart?',
      [
        {text: 'Cancel', style: 'cancel'},
        {text: 'Remove', onPress: () => removeFromCart(productId)},
      ],
    );
  };

  useEffect(() => {
    loadCartProducts();
  }, []);

  const calculateTotal = () => {
    return cartProducts.reduce(
      (total, product) => total + product.price * product.quantity,
      0,
    );
  };

  const renderProductItem = ({item}: {item: ProductTypes}) => (
    <View style={styles.box}>
      <Image source={{uri: item.image}} style={styles.productImage} />
      <View style={styles.productInfo}>
        <Text style={styles.brand}>{item?.brand}</Text>
        <Text style={styles.price}>
          {t('price')}: ${item?.price}
        </Text>

        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={() => incrementQuantity(item.id)}>
            <Text style={styles.plus}>+</Text>
          </TouchableOpacity>
          <View style={styles.quantityBox}>
            <Text style={styles.quantityText}>{item?.quantity}</Text>
          </View>
          <TouchableOpacity onPress={() => decrementQuantity(item.id)}>
            <Text style={styles.minus}>-</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() => handleRemovePress(item?.id)}
          style={styles.button}>
          <Text style={styles.buttonText}>{t('remove')}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <BackButton heading="back" />

      {cartProducts?.length > 0 ? (
        <>
          <FlatList
            data={cartProducts}
            keyExtractor={item =>
              item?.id?.toString() || item?.brand || 'default_key'
            }
            renderItem={renderProductItem}
          />
          <TouchableOpacity style={styles.totalBox} onPress={getPayment}>
            <Text style={styles.textTotal}>{t('total')}</Text>
            <Text style={styles.textTotal}>${calculateTotal()}</Text>
          </TouchableOpacity>
        </>
      ) : (
        <View style={styles.emptyBox}>
          <EmptyPage
            btnName="explore categories"
            image={CartEmptyLogo}
            title="no item added yet"
            btn={true}
            navigationScreeName={screenNames.seeAllCategories}
          />
        </View>
      )}
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: colors.primaryBgColor,
  },
  emptyBox: {
    marginTop: '50%',
  },
  productImage: {
    height: ms(160),
    width: '40%',
    objectFit: 'cover',
  },
  productInfo: {
    width: '60%',
    height: ms(200),
    marginLeft: 20,
    gap: 10,
  },
  box: {
    width: '90%',
    height: ms(180),
    backgroundColor: colors.cardBgColor,
    alignSelf: 'center',
    borderRadius: 10,
    padding: 10,
    borderWidth: 0.4,
    flexDirection: 'row',
    marginVertical: 5,
  },
  brand: {
    color: colors.textColor,
    fontSize: ms(18),
    fontWeight: '600',
  },
  button: {
    height: ms(40),
    width: '90%',
    backgroundColor: colors.tintColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  price: {
    color: colors.textColor,
    fontSize: ms(15),
    fontWeight: '600',
  },
  buttonText: {
    color: colors.primaryBgColor,
    fontSize: ms(18),
    fontWeight: '600',
  },
  quantityBox: {
    height: 35,
    width: 35,
    backgroundColor: colors.primaryBgColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  plus: {
    fontSize: 30,
    marginLeft: 10,
    color: colors.primaryBgColor,
  },
  minus: {
    fontSize: 30,
    marginRight: 10,
    color: colors.primaryBgColor,
  },
  quantityContainer: {
    backgroundColor: colors.tintColor,
    flexDirection: 'row',
    borderRadius: 10,
    width: '90%',
    height: ms(40),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  quantityText: {
    color: colors.textColor,
    fontSize: ms(22),
  },
  totalBox: {
    height: ms(50),
    width: ms(342),
    backgroundColor: colors.tintColor,
    alignSelf: 'center',
    borderRadius: 10,
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  textTotal: {
    fontSize: ms(20),
    color: colors.primaryBgColor,
  },
});
