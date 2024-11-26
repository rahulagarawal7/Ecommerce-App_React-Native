import {createSlice} from '@reduxjs/toolkit';

const wishListSlice = createSlice({
  name: 'languageSlice',
  initialState: {
    change:false
  },
  reducers: {
     removeWishList:(state)=>{
        state.change = !state.change;
       
     }
  },
});

export const {removeWishList} = wishListSlice.actions;
export default wishListSlice.reducer;
