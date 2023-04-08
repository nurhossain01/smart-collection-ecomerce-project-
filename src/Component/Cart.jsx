import React, { useContext } from 'react';
import { cartContext } from './Header';
import CartItems from './CartItems';
import { removeFromDb } from '../utilites/falkeDB';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const Cart = () => {
  const [cart, setCart] = useContext(cartContext);

  const handleDelete = (id) => {
    const remaining = cart.filter(product => product.id !== id);
    setCart(remaining);
    removeFromDb(id);
    Swal.fire(
      'Good job!',
      'Product remove successful',
      'error'
    )
  }

  let total = 0;
  for (const product of cart) {
    total = total + product.price * product.quantity;
  }

  return (
    <div>
      {
        cart.length ?
          <>
            <div>
              {
                cart?.map(product =>
                  <CartItems key={product.id}
                    product={product}
                    handleDelete={handleDelete}
                  ></CartItems>)
              }
            </div>
            <div className='mx-auto max-w-3xl flex justify-end pr-4'>
              <div>
                <div className="space-y-1 ">
                  <p>Total amount:
                    <span className="font-semibold pl-4">{total} $</span>
                  </p>
                  <p className="text-sm dark:text-gray-400 pb-4">Not including taxes and shipping costs</p>
                </div>
                <div className="flex space-x-4">
                  <Link to='/shop'>
                    <button type="button" className="px-4 py-2 border rounded-md dark:border-violet-400">
                      Back to shop
                    </button>
                  </Link>
                  <button type="button" className="px-4 py-2 border rounded-md dark:bg-violet-400 dark:text-gray-900 dark:border-violet-400">
                    Order
                  </button>
                </div>
              </div>
            </div>
          </>

          :
          <section className="flex items-center h-full sm:p-16 dark:bg-gray-900 dark:text-gray-100">
            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-40 h-40 dark:text-gray-600">
                <path fill="currentColor" d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z"></path>
                <rect width="176" height="32" x="168" y="320" fill="currentColor"></rect>
                <polygon fill="currentColor" points="210.63 228.042 186.588 206.671 207.958 182.63 184.042 161.37 162.671 185.412 138.63 164.042 117.37 187.958 141.412 209.329 120.042 233.37 143.958 254.63 165.329 230.588 189.37 251.958 210.63 228.042"></polygon>
                <polygon fill="currentColor" points="383.958 182.63 360.042 161.37 338.671 185.412 314.63 164.042 293.37 187.958 317.412 209.329 296.042 233.37 319.958 254.63 341.329 230.588 365.37 251.958 386.63 228.042 362.588 206.671 383.958 182.63"></polygon>
              </svg>
              <p className="text-3xl">Please add some products to cart </p>
              <Link to='/shop' rel="noopener noreferrer" href="#" className="px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Back to shop now</Link>
            </div>
          </section>
      }


    </div>
  );
};

export default Cart;