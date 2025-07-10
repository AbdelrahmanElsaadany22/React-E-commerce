import { useEffect, useState } from 'react'
import './index.css'
import './app.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from './components/Layout/Layout';
import Categories from './components/Categories/Categories';
import Home from './components/Home/Home';
import Brands from './components/Brands/Brands';
import Cart from './components/Cart/Cart';
import Products from './components/Products/Products';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Notfound from './components/Notfound/Notfound';
import { UserContextProvider } from "./Context/UserContext";
import ProtectedRoute from "./components/ProtectedRoute";
import SpecificProduct from "./components/HomeComponents/SpecificProduct";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import CartContextProvider from "./Context/CartContext";
import toast, { Toaster } from 'react-hot-toast';
import Checkout from "./components/CheckOut/Checkout";
import Allorders from "./components/Allorders/Allorders";
import BrandsContextProvider from "./Context/BrandsContext";
import SpecificBrand from "./components/Brands/SpecificBrand";
import SpecificCategory from "./components/Categories/specificCategory";

let query = new QueryClient()

let x = createBrowserRouter(
  [
    {
      path: '',
      element: <Layout />,
      children: [
        { index: true, element: <ProtectedRoute><Home /></ProtectedRoute> },
        { path: 'categories', element: <ProtectedRoute><Categories /></ProtectedRoute> },
        { path: 'category/:id', element: <ProtectedRoute><SpecificCategory /></ProtectedRoute> },
        { path: 'brands', element: <ProtectedRoute><Brands /></ProtectedRoute> },
        { path: 'brands/:id', element: <ProtectedRoute><SpecificBrand /></ProtectedRoute> },
        { path: 'cart', element: <ProtectedRoute><Cart /></ProtectedRoute> },
        { path: 'products', element: <ProtectedRoute><Products /></ProtectedRoute> },
        { path: 'productdetails/:id/:category', element: <ProtectedRoute><SpecificProduct /></ProtectedRoute> },
        { path: 'checkout', element: <ProtectedRoute><Checkout /></ProtectedRoute> },
        { path: 'allorders', element: <ProtectedRoute><Allorders /></ProtectedRoute> },
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: '*', element: <Notfound /> },
      ]
    }
  ],
  {
    basename: '/React-E-commerce/' // ✅ أهم تعديل عشان GitHub Pages
  }
)

function App() {
  return (
    <QueryClientProvider client={query}>
      <UserContextProvider>
        <CartContextProvider>
          <BrandsContextProvider>
            <RouterProvider router={x}></RouterProvider>
            <ReactQueryDevtools />
            <Toaster />
          </BrandsContextProvider>
        </CartContextProvider>
      </UserContextProvider>
    </QueryClientProvider>
  )
}

export default App
