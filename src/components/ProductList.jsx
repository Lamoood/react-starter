import React, { useState } from 'react'
import ProductCard from './ProductCard'

function ProductList(props){
  const {products} = props
  return(
    <div className='w-2/3 bg-blue-400'>
      <h2>Product List</h2>
      <div className='flex flex-col gap-3'>
      {products.map(el => (
      <ProductCard key={el.id} productItem={el}/>
      ))}
      <pre>{JSON.stringify(products, null, 2)}</pre>
      </div>
    </div>
  )
}

export default ProductList