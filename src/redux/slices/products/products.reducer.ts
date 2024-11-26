import {createSlice , SerializedError} from '@reduxjs/toolkit';
import { getAllProductsActions } from './products.actions';
import { ErrorResponse, InitialProductsStateTypes, ProductTypes } from '../../../utils/types';




const mapSerializedErrorToApiError=(error:SerializedError):ErrorResponse=>{
     return{
       isSuccessful:false,
       message:error.message || '',
       statusCode:500,
     }
}

const initialState :InitialProductsStateTypes={
   products:[],
   loading:false,
   error:null
}

const productsSlice = createSlice({
  name: 'products',
  initialState:initialState,
  reducers: {},
  extraReducers:(builder)=>{
   builder.addCase(getAllProductsActions.pending,(state)=>{
      state.loading=true
   })
   builder.addCase(getAllProductsActions.fulfilled,(state,action)=>{
    state.loading=false
    state.products=[...state.products,...action.payload]
 })
 builder.addCase(getAllProductsActions.rejected,(state,action)=>{
    state.loading=false,
    state.error=action.error ? mapSerializedErrorToApiError(action.error) : null
})
  }
});

export type {InitialProductsStateTypes}
export default productsSlice.reducer;
