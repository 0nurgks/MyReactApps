import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../../utils/Loading';
import Product from "./WriteProduct";
import { getProduct } from '../../redux/productSlice';

const Products = () => {



const {products, projectStatus} = useSelector((state)=> state.MyProducts);
const dispatch = useDispatch();

useEffect(() => {
  dispatch(getProduct());

}, [dispatch]);


  return (
    <div>
       {projectStatus === 'LOADING' ? (
        <Loading />
      ) : (
        products.map((product, i) => <Product key={i} product={product} />)
      )}
       
    </div>
  )
}

export default Products;