import {createSlice} from '@reduxjs/toolkit';

const languageSlice = createSlice({
  name: 'languageSlice',
  initialState: {
    language: 'english',
  },
  reducers: {
    changeLang: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const {changeLang} = languageSlice.actions;
export default languageSlice.reducer;
