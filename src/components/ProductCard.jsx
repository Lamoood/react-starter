import React from 'react'

function ProductCard(props){
  const {productItem : {id, category, description, title, image, price, rating}} = props
  return(
    <div><div className="card bg-base-100 w-96 shadow-sm">
  <figure className='h-40'>
    <img className='h-full'
      src={image}
      alt={title} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Card Title</h2>
    <p>{category}</p>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div></div>
  )
}

export default ProductCard