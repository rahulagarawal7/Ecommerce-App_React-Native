import Snackbar from 'react-native-snackbar';
import {
  CategoriesImage1,
  CategoriesImage2,
  CategoriesImage3,
  CategoriesImage4,
  CategoriesImage5,
} from '../assets';

export const colors: {[key: string]: string} = {
  tintColor: '#8e6cef',
  textColor: '#000000',
  secondaryBgColor: '#f4f4f4',
  cardBgColor: '#f3f3f3',
  primaryBgColor: '#ffffff',
  radioButtonBgColor: '#ada8a8',
  error: 'red',
};

export const languages = [
  {name: 'english', code: 'en'},
  {name: 'hindi', code: 'hi'},
  {name: 'french', code: 'fr'},
];

export const categoriesList = [
  {
    id: 1,
    categoriesImage: CategoriesImage1,
    categoriesName: 'tv',
  },
  {
    id: 2,
    categoriesImage: CategoriesImage2,
    categoriesName: 'audio',
  },
  {
    id: 3,
    categoriesImage: CategoriesImage3,
    categoriesName: 'laptop',
  },
  {
    id: 4,
    categoriesImage: CategoriesImage4,
    categoriesName: 'mobile',
  },
  {
    id: 5,
    categoriesImage: CategoriesImage5,
    categoriesName: 'gaming',
  },
];

export const screenNames = {
  login: 'Login',
  signUp: 'SignUp',
  bottomTab: 'BottomTab',
  address: 'Address',
  wishlist: 'Wishlist',
  payment: 'Payment',
  help: 'Help',
  support: 'Support',
  userProfile: 'UserProfile',
  addAddress: 'AddAddress',
  seeAllCategories: 'SeeAllCategories',
  categoryList: 'CategoryList',
  addPayment: 'AddPayment',
  cart: 'Cart',
  search: 'Search',
  home: 'Home',
  notification: 'Notification',
  profile: 'Profile',
  order: 'Order',
  homeStack: 'HomeStack',
  language: 'Language',
  categoriesWiseList: 'CategoriesWiseList',
  productDetails: 'ProductDetails',
  finalPayment: 'FinalPayment',
  explore:'Explore',
};

export const API_ROUTES = {
  getAllProducts: '/products',
};

export const profileButtonNames = [
  {id: 1, name: 'address', screenName: screenNames.address},
  {id: 2, name: 'wishlist', screenName: screenNames.wishlist},
  {id: 3, name: 'payment', screenName: screenNames.payment},
  {id: 4, name: 'language', screenName: screenNames.language},
  {id:5,  name:'explore store' , screenName:screenNames.explore},
  {id: 6, name: 'help', screenName: screenNames.help},
  {id: 7, name: 'support', screenName: screenNames.support},
];

export const showShankBar = (title: string, error?: string) => {
  Snackbar.show({
    text: title,
    textColor: error && 'red',
    duration: Snackbar.LENGTH_SHORT,
  });
};
