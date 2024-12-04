import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import {createSlice} from '@reduxjs/toolkit';
import { UserLogo } from '../../../assets';

interface UserInfo {
    userInfo:FirebaseAuthTypes.User | null
    userImage:object
}

const initialState:UserInfo={
    userInfo:null,
    userImage:{},
}

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
     addUserInfo:(state,action)=>{
       state.userInfo = action.payload;
     },
     removeUser:(state)=>{
     state.userInfo = null;
     },
     addUserImage:(state,action)=>{
       state.userImage = action.payload;
     },
     removeUserImage:(state)=>{
        state.userImage = {};
     }
    }
})

export const {addUserInfo,removeUser,addUserImage,removeUserImage} = userSlice.actions;
export default userSlice.reducer;
