import React, { useContext, useState } from 'react';
import { cartContext, productContext } from './Header';
import DisplayProduct from './DisplayProduct';
import { addToDb, clearAllShoppingCart } from '../utilites/falkeDB';
import Swal from 'sweetalert2'


const ShopNow = () => {
  const products = useContext(productContext);
  const [cart, setCart] = useContext(cartContext);

  const handleAddToCart =(product)=>{
    let newCart = [];
    const exists = cart.find(prevCart => prevCart.id === product.id);
    if(!exists){
      product.quantity = 1;
      newCart=[...cart, product];
    }
    else{
      const remaining = cart.filter(prevCart => prevCart.id !== product.id);
      exists.quantity = exists.quantity + 1;
      newCart = [...remaining, exists]
    }
    setCart(newCart);
    addToDb(product.id)
    Swal.fire(
      'Good job!',
      'Product added successful',
      'success'
    )
    
  }

  return (
    <div>
      <div className='grid lg:grid-cols-3 px-4 lg:px-0 lg:container mx-auto'>
        {
          products?.map(product => 
          <DisplayProduct 
          key={product.id} 
          product={product}
          handleAddToCart={handleAddToCart}
          ></DisplayProduct>)
        }
      </div>
    </div>
  );
};

export default ShopNow;