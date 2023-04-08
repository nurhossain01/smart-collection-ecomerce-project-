import { createBrowserRouter } from "react-router-dom";
import Header from "../Component/Header";
import ErrorPage from "../Component/ErrorPage";
import Home from "../Component/Home";
import ShopNow from "../Component/ShopNow";
import Cart from "../Component/Cart";
import AboutUs from "../Component/AboutUs";
import productAndCartData from "../productAndCartData/productAndCartData";

export const rootes = createBrowserRouter([
  {
    path: '/',
    element: <Header></Header>,
    errorElement: <ErrorPage></ErrorPage>,
    loader: productAndCartData,
    children: [
      {
        index: true,
        element: <Home></Home>
      },
      {
        path: '/home',
        element: <Home></Home>
      },
      {
        path: '/shop',
        element: <ShopNow></ShopNow>
      },
      {
        path: '/cart',
        element: <Cart></Cart>
      },
      {
        path: '/about',
        element: <AboutUs></AboutUs>
      }
    ]
  }
])