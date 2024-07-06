import {configureStore} from '@reduxjs/toolkit';
import categorySlice from './categorySlice';
import  productsSlice  from './productSlice';


export const store =configureStore({
reducer:{
    category: categorySlice,
    MyProducts: productsSlice
}
})
