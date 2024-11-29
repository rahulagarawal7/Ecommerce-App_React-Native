import {configureStore} from '@reduxjs/toolkit';
import productsReducer from '../slices/products/products.reducer';
import categorySlice from '../slices/category/categorySlice';
import wishListSlice from '../slices/wishList/wishList';
export const store = configureStore({
  reducer: {
    products: productsReducer,
    category: categorySlice,
    wishList: wishListSlice,
    user: userSlice,
    loading: loadingSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import userSlice from '../slices/userSlice/userSlice';
import loadingSlice from '../slices/loading/loadingSlice';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
