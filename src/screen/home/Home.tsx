import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {
  AnimatedSearchBar,
  CategoriesCard,
  CategoriesHeading,
  CursorBox,
  Header,
  HeadingText,
  ProductCardList,
  SearchBar,
} from '../../component';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigation/types';
import {screenNames} from '../../utils/constants';
import {useAppSelector} from '../../redux/store/store';
import {ProductTypes} from '../../utils/types';
import {firebase} from '@react-native-firebase/auth';
import {useDispatch, useSelector} from 'react-redux';
import {
  addUserImage,
  addUserInfo,
} from '../../redux/slices/userSlice/userSlice';
import {styles} from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const Home: React.FC<Props> = ({navigation}) => {
  const [products, setProducts] = useState<ProductTypes[]>([]);
  const data = useAppSelector(store => store?.products?.products);
  const dispatch = useDispatch();
  const userInfo = useSelector(store => store?.user?.userInfo);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        dispatch(addUserInfo(user));
      }
    });

    setProducts(data);
  }, [data, userInfo]);

  useEffect(() => {
    getUserImage();
  }, []);

  const getUserImage = async () => {
    const data = await AsyncStorage.getItem('userImage');
    if (data) {
      const image = JSON.parse(data);
      dispatch(addUserImage(image));
    }
  };

  return (
    <ScrollView style={styles.container}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <View style={styles.containerBox}>
        <Header />
        <TouchableOpacity
          onPress={() => navigation.navigate(screenNames.search)}>
          <AnimatedSearchBar placeholder="search" />
        </TouchableOpacity>

        <View style={styles.box}>
          <CursorBox />
          <CategoriesHeading
            primaryText="categories"
            secondaryText="see all"
            screenName={screenNames.seeAllCategories}
          />
          <CategoriesCard />
        </View>
        <View style={styles.hederBox}>
          <HeadingText
            primaryText="top selling"
            secondaryText="see all"
            screenName={screenNames.categoryList}
            seeAllList={products}
          />
          {products.length > 0 ? (
            <ProductCardList productList={products} />
          ) : (
            <View style={styles.emptyBox}>
              <View style={styles.emptyContainer} />
              <View style={styles.emptyContainer} />
            </View>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
