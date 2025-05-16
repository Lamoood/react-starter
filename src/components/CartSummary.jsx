import React from 'react'
import CartItem from './CartItem'

function CartSummary(props){
  const {carts} = props
  return(
    <div className='w-2/3 bg-purple-300'>
      <h2>Cart Items</h2>
      <CartItem />
    </div>
  )
}

export default CartSummary