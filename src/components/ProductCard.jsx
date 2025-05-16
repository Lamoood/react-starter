import React, {useState} from 'react'

function ProductCard(props){
  const [showDesc, setShowDesc] = useState(false)
  const {addToCart, productItem : {id, category, description, title, image, price, rating}} = props
  return(
    <div><div className="card bg-base-100 w-70 shadow-sm p-4">
  <figure className='h-40'>
    <img className='h-full'
      src={image}
      alt={title} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Card Title</h2>
    <p>{category}</p>
    <p className={showDesc ? '' : 'line-clamp-2'} onClick={() => setShowDesc(prv => !prv)}>{description}</p>
    <p>{price}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary" onClick={() => addToCart(id, title, price)}>Add to Cart</button>
    </div>
  </div>
</div></div>
  )
}

export default ProductCard