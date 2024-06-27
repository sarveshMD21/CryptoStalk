import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseURL=import.meta.env.VITE_API_BASE_URL;

const header={
    'x-rapidapi-key': import.meta.env.VITE_API_KEY,
    'x-rapidapi-host': import.meta.env.VITE_API_HOST
}

const createRequest=(url)=>{
    
    return {
        url,
        headers:header
    }
};

export const cryptoApiSlice=createApi({
    reducerPath:"crypto",
    baseQuery:fetchBaseQuery({baseURL}),
    tagTypes:["cryptos"],
    endpoints: (builder)=>({
        getCryptos: builder.query({
            query: ()=>createRequest("/coins")
            
        })
    })
})

export const{
    useGetCryptosQuery,
}=cryptoApiSlice;

