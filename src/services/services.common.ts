import axios, {   AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import axiosRetry from "axios-retry";
import { ApiResponse, ErrorResponseData, SuccessResponse } from "../utils/types";



const apiClient=axios.create({
    baseURL:"https://fakestoreapi.in/api",
    timeout:2000,
})

axiosRetry(apiClient,{
    retries:3,
    retryDelay:axiosRetry.exponentialDelay,
    retryCondition:(error: AxiosError)=>{
        return(
            axiosRetry.isNetworkOrIdempotentRequestError(error) || 
            error?.response?.status===500
        )
    }
})



const handleError=(e:AxiosError<ErrorResponseData>,url:string)=>{

     const statusCode = e?.response?.status || "unknown"
     const errorMessage=e?.response?.data?.error || e.message || "An unknown error occurred"

     return{
        isSuccessful:false,
        message:errorMessage,
        statusCode:statusCode
     }
}

const handleSuccess=<T>(data: T,statusCode:number):SuccessResponse<T>=>{
    return{
        isSuccessful:true,
        statusCode:statusCode,
        data:data,
    }
}

export const get= async <T>(url:string,params:AxiosRequestConfig['params']={}):Promise<ApiResponse<T>>=>{
    try {
        const response:AxiosResponse<T> = await apiClient.get(url,{
            params,
        })
    return handleSuccess(response.data,response.status)
    } catch (error) {
        return handleError(error as AxiosError<ErrorResponseData>,url)
    }
}






export const post= async <T>(url:string,data:T):Promise<ApiResponse<T>>=>{
    try {
        const response:AxiosResponse<T> = await apiClient.post(url,data)
    return handleSuccess(response.data,response.status)
    } catch (error) {
        return handleError(error as AxiosError<ErrorResponseData>,url)
    }

}
export const remove= async <T>(url:string,data:T):Promise<ApiResponse<T>>=>{
     try {
        const response:AxiosResponse<T> =await apiClient.delete(url,{data})
        return handleSuccess(response.data,response.status)
     } catch (error) {
        return handleError(error as AxiosError<ErrorResponseData>,url)
     }
}
export const update= async <T>(url:string,data:T):Promise<ApiResponse<T>>=>{
    try {
        const response:AxiosResponse<T> =await apiClient.put(url,data)
        return handleSuccess(response.data,response.status)
    } catch (error) {
        return handleError(error as  AxiosError<ErrorResponseData>,url)
    }
}