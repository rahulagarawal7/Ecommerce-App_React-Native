import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import {createSlice} from '@reduxjs/toolkit';

interface UserInfo {
    userInfo:FirebaseAuthTypes.User | null
}

const initialState:UserInfo={
    userInfo:null
}

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
     addUserInfo:(state,action)=>{
       state.userInfo=action.payload
     },
     removeUser:(state)=>{
     state.userInfo=null
     }
    }
})

export const {addUserInfo,removeUser} = userSlice.actions;
export default userSlice.reducer;
