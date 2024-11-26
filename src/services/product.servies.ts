import { API_ROUTES } from "../utils/constants";
import { CategoryType, GetProductsResponseTypes, PaginationTypes } from "../utils/types";
import {  get } from "./services.common";

export const getAllProducts= async  (value:PaginationTypes)=>{
 
   const response = await get<GetProductsResponseTypes>(
    `${API_ROUTES.getAllProducts}?page=${value.page}&limit=${value.limit}`
   )
   return response
}


export const getProductsByCategory= async  (value:CategoryType)=>{
 
   const response = await get<GetProductsResponseTypes>(
    `${API_ROUTES.getAllProducts}/category?type=${value.categoryName}`
   )
   return response
}
