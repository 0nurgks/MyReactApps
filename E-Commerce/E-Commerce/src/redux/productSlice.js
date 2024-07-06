import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {STATUS} from "../utils/Status.js";



export const getProduct = createAsyncThunk("response", async () => {
    try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching products:", error);
        throw error; // Hata durumunda hatayı fırlatın
    }
});
export const getProductDetail =  createAsyncThunk("responseDetail",async(id)=>{
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    return response.json();
});
const initialState={
    products:[],
    projectStatus: STATUS.IDLE,
    productDetail:[],
    productDetailStatus:STATUS.IDLE


};

export const productsSlice = createSlice({
name: "products",
initialState,
reducers:{},
extraReducers:
    (builder)=> {builder
        .addCase(getProduct.fulfilled, (state, action) => {
            state.products = action.payload;
            state.projectStatus = STATUS.SUCCESS;
        })
        .addCase(getProduct.pending, (state) => {
            state.projectStatus = STATUS.LOADING;
        })
        .addCase(getProduct.rejected, (state) => {
            state.projectStatus = STATUS.FAIL;
        })
        .addCase(getProductDetail.fulfilled, (state, action) => {
            state.productDetail = action.payload;
            state.productDetailStatus = STATUS.SUCCESS;
        })
        .addCase(getProductDetail.pending, (state) => {
            state.productDetailStatus = STATUS.LOADING;
        })
        .addCase(getProductDetail.rejected, (state) => {
            state.productDetailStatus = STATUS.FAIL;
        });
    }

});




export default productsSlice.reducer;