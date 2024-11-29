import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {
  CategoriesCard,
  CategoriesHeading,
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
import {addUserInfo} from '../../redux/slices/userSlice/userSlice';

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

  return (
    <ScrollView style={styles.container}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <View style={styles.containerBox}>
        <Header />
        <TouchableOpacity
          onPress={() => navigation.navigate(screenNames.search)}>
          <SearchBar placeholder="search" />
        </TouchableOpacity>

        <View style={styles.box}>
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
          <ProductCardList productList={products} />
        </View>
        <View style={styles.hederBox}>
          <HeadingText
            primaryText="new in"
            secondaryText="see all"
            screenName={screenNames.categoryList}
            seeAllList={products}
          />
          <ProductCardList productList={products} />
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
  },
  containerBox: {
    gap: 20,
  },
  box: {
    gap: 10,
  },
  hederBox: {
    gap: 30,
  },
});
