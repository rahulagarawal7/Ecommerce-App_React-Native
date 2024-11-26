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
};

export const API_ROUTES = {
  getAllProducts: '/products',
};
