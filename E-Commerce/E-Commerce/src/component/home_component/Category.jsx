import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {store} from '../../redux/store'
import { getCategories } from '../../redux/categorySlice'
import { useEffect } from 'react'




const Category = () => {
  const categories =   useSelector((state)=> state.category.categories);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getCategories())}
 , [dispatch] );

  return (
    <div className='!bg-gray-300 w-1/6 h-1/6  p-2 font-bold text-xl'>
      <div className='!border-5'>Category</div>
   <div>
    {
      categories?.map((categoryElement,i)=>(
        <div className='!text-sm mt-2 cursor-pointer hover:bg-gray-400 font-light' key={i}> {categoryElement} </div>
      ))
      
    }
    </div>
    </div>
  )
}

export default Category