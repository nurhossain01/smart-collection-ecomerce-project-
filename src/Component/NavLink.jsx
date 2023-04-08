import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../public/bolt.png'
import { cartContext } from './Header';
import { FaChevronLeft, FaChevronDown } from "react-icons/fa";

const NavNavLink = () => {
  const [cart, setCart] = useContext(cartContext);
  const [toggle, setToggle] = useState(false)

  return (
    <div className={`bg-slate-700 py-4 ${toggle&& 'h-56'} sticky top-0 z-10 `}>
      <div className="container mx-auto lg:flex items-center text-yellow-50">
        <div className='flex justify-between items-center pr-8'>
          <div className='pl-8 lg:pl-0'>
            <img className=' animate-pulse w-9 ' src={Logo} alt="" />
            <span className='text-amber-600 text-lg font-extrabold'>Smart <span className='text-emerald-300'>Collection</span></span>
          </div>
          <div onClick={() => setToggle(!toggle)} className='lg:hidden  text-3xl'>
            {
              toggle ? 
              <FaChevronDown className='text-black'></FaChevronDown>
              :
              <FaChevronLeft></FaChevronLeft>
            }

          </div>
        </div>
        <ul className={`lg:flex pl-8 lg:static absolute pt-2  ${toggle ? 'top-20 duration-300 bg-slate-700 w-full' : '-top-48'}`}>
          <li className='py-2 lg:px-4 lg:py-0'>
            <NavLink to='/home' className={({ isActive }) => isActive ? "text-lg bg-lime-500 p-2 rounded-lg" : "text-lg"}>Home</NavLink>
          </li>
          <li className='py-2 lg:px-4 lg:py-0'>
            <NavLink to='/shop' className={({ isActive }) => isActive ? "text-sm bg-lime-500 p-2 rounded-lg" : "text-sm"}>Shop Now</NavLink>
          </li>
          <li className='py-2 lg:px-4 lg:py-0'>
            <NavLink to='/cart' className={({ isActive }) => isActive ? "text-lg bg-lime-500 p-2 rounded-lg" : "text-lg"}>Cart <sup className='text-red-500'>{cart.length}</sup></NavLink>
          </li>
          <li className='py-2 lg:px-4 lg:py-0'>
            <NavLink to='/about' className={({ isActive }) => isActive ? "text-lg bg-lime-500 p-2 rounded-lg" : "text-lg"}>About Us</NavLink>
          </li>
        </ul>

      </div>
    </div>
  );
};

export default NavNavLink;