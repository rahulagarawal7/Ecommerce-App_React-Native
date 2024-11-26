import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllProducts } from "../../../services/product.servies";
import { ApiResponse, PaginationTypes, SuccessResponse } from "../../../utils/types";



const isSuccessResponse = <T>(response: ApiResponse<T>): response is SuccessResponse<T> => {
    return response.isSuccessful === true;
}


export const getAllProductsActions=createAsyncThunk(
    "getAllProducts",
    async (payload:PaginationTypes,{rejectWithValue})=>{
        const response = await getAllProducts(payload)
        if(isSuccessResponse(response)) {
            return response.data.products
        }
        else{
            return rejectWithValue(response)
        }
    }
)

