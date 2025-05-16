import React from 'react'

function CartItem(props){
  const {addToCart, decQuantity, item : {id, title, price, quantity}} = props
  return(
    <div className='flex justify-between px-2 flex-1'>
      <p>{title.split(' ')[0] + ' ' + title.split(' ')[1]}</p>
      <div className='flex gap-2'>
        <p className='border w-5 h-5 flex justify-center items-center cursor-pointer' onClick={() => decQuantity(id)}>-</p>
        <p className='border w-5 h-5 flex justify-center items-center cursor-pointer' onClick={() => addToCart(id)}>+</p>
      </div>
      <p>{quantity} * ฿{price}</p>
    </div>
  )
}

export default CartItem