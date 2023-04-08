import React, { createContext, useState } from 'react';
import NavLink from './NavLink';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from './Footer';

export const productContext = createContext([]);
export const cartContext = createContext([]);

const Header = () => {
  const {products, initialCart} = useLoaderData();
  const [cart, setCart] = useState(initialCart);
  
  return (
    <productContext.Provider value={products}>
      <cartContext.Provider value={[cart, setCart]}>
        <NavLink></NavLink>
        <Outlet></Outlet>
        <Footer></Footer>
      </cartContext.Provider>
    </productContext.Provider>
  );
};

export default Header;