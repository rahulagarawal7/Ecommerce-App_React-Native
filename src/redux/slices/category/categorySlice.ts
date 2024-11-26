

import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import { ProductTypes } from '../../../utils/types';

// Define the type for the slice state
interface CategoryState {
   loading: boolean;
   productList: ProductTypes[]
}
 
 // Initial state with the defined type
 const initialState: CategoryState = {
   loading: true,
   productList: [],
 };

const categorySlice = createSlice({
  name: 'languageSlice',
  initialState,
  reducers: {
     getProductsList:(state,action:PayloadAction<ProductTypes[]>)=>{
        state.loading = false;
        state.productList = action.payload;
     }
  },
});

export const {getProductsList} = categorySlice.actions;
export default categorySlice.reducer;
