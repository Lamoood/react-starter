import React, { useState } from 'react'
import ProductCard from './ProductCard'

function ProductList(props){
  const {products, addToCart} = props
  return(
    <div className='w-3/4 bg-pink-200 ps-2'>
      <h2 className='text-2xl rounded py-2'>Product List</h2>
      <div className='flex gap-3 flex-wrap'>
      {products.map(el => (
      <ProductCard key={el.id} productItem={el} addToCart={addToCart}/>
      ))}
      {/* <pre>{JSON.stringify(products, null, 2)}</pre> */}
      </div>
    </div>
  )
}

export default ProductList