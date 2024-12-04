
import { ProductTypes } from "../utils/types";

export type RootStackParamList = {
  BottomTab: undefined;
  login: undefined;
  signUp: undefined;
  address: undefined;
  wishlist: undefined;
  payment: undefined;
  help: undefined;
  support: undefined;
  userProfile: undefined;
  addAddress: undefined;
  seeAllCategories: undefined;
  categoryList: { data: ProductTypes[]; name: string };
  addPayment: undefined;
  cart: undefined;
  productDetails: { data: ProductTypes };
  categoriesWiseList: { name: string  };
  search: undefined;
  explore:undefined;
  finalPayment:{price:number};
  [key: string]: undefined | { name: string } | { data: ProductTypes[] } | { data: ProductTypes } | {price :number} ;
  
};
