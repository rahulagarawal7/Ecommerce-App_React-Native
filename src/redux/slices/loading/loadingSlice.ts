import { InitialState } from '@react-navigation/native';
import {createSlice} from '@reduxjs/toolkit';
import { LoadingState } from '../types';


const initialState:LoadingState ={
    loading :false
}

const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const {setLoading} = loadingSlice.actions;
export default loadingSlice.reducer;
