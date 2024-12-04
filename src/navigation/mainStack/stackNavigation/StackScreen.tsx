import {
  AddAddress,
  AddPayment,
  Address,
  Cart,
  CategoryList,
  Help,
  Payment,
  Search,
  SeeAllCategories,
  Support,
  UserProfile,
  Wishlist,
  Language,
  ProductDetails,
  CategoriesWiseList,
  FinalPayment,
  Explore,
} from '../../../screen';
import {screenNames} from '../../../utils/constants';

type StackScreenType = {
  id: number;
  name: string;
  component: React.ComponentType<any>;
};

const StackScreen: StackScreenType[] = [
  {id: 1, name: screenNames.address, component: Address},
  {id: 2, name: screenNames.wishlist, component: Wishlist},
  {id: 3, name: screenNames.payment, component: Payment},
  {id: 4, name: screenNames.help, component: Help},
  {id: 5, name: screenNames.support, component: Support},
  {id: 6, name: screenNames.userProfile, component: UserProfile},
  {id: 7, name: screenNames.addAddress, component: AddAddress},
  {id: 8, name: screenNames.seeAllCategories, component: SeeAllCategories},
  {id: 9, name: screenNames.categoryList, component: CategoryList},
  {id: 10, name: screenNames.addPayment, component: AddPayment},
  {id: 11, name: screenNames.cart, component: Cart},
  {id: 12, name: screenNames.search, component: Search},
  {id: 13, name: screenNames.language, component: Language},
  {id: 14, name: screenNames.productDetails, component: ProductDetails},
  {id: 15, name: screenNames.categoriesWiseList, component: CategoriesWiseList},
  {id: 16, name: screenNames.finalPayment, component: FinalPayment},
  {id:17,name:screenNames.explore,component:Explore},
];

export default StackScreen;
