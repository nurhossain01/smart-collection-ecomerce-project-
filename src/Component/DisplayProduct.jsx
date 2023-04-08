import React from 'react';

const DisplayProduct = ({ product, handleAddToCart }) => {
  const { name, category, price, picture } = product
  return (
    <div className="card card-compact lg:w-3/4 my-8 mx-auto bg-base-100 shadow-xl">
      <figure><img className='h-80 w-full' src={picture} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{category}</p>
        <p>Price: ${price}</p>
        <div className="card-actions">
          <button onClick={ () => handleAddToCart(product)} className="btn btn-primary w-full mx-auto">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default DisplayProduct;