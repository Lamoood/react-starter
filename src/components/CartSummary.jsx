import React from 'react'
import CartItem from './CartItem'

function CartSummary(props){
  const {carts, decQuantity, addToCart} = props
  const total = carts.reduce((a,c) => a+=c.price*c.quantity, 0)
  const vat = total * 0.07
  const finalTotal = total + vat
  return(
    <div className='w-2/3 bg-purple-300'>
      <h2 className='text-2xl rounded py-2'>Cart Items</h2>
      <div className='flex flex-col gap-2'>
        {carts.map(el =>(
          <CartItem key={el.id} item={el} decQuantity={decQuantity} addToCart={addToCart}/>
        ))}
        <div>
          <div className='divider'>Total</div>
          <div className='flex justify-between px-2 flex-1'>
            <p className='font-bold'>Total</p>
            <p>฿{total.toFixed(2)}</p>
          </div>

          <div className='flex justify-between px-2 flex-1'>
            <p className='font-bold'>VAT</p>
            <p>฿{vat.toFixed(2)}</p>
          </div>

          <div className='flex justify-between px-2 flex-1'>
          <p className='font-bold'>Final Total</p>  
          <p>฿{finalTotal.toFixed(2)}</p>
          </div>
        </div>
      </div>
      {/* <pre>{JSON.stringify(carts)}</pre> */}
    </div>
  )
}

export default CartSummary