import React ,{useState,useEffect, useContext}from 'react'
import style from './Products.module.css'
import { useQuery } from '@tanstack/react-query';
import { Link } from "react-router-dom";
import useProducts from "../../Hooks/useProducts";
import { CartContext } from "../../Context/CartContext";
import toast from "react-hot-toast";
export default function Products() {
  let {data,isError,error,isLoading,isFetching}=useProducts()
   const { addProductToCart, setCart } = useContext(CartContext);
  const [loading, setLoading] = useState(false);
  const [currentProductId, setCurrentProductId] = useState(0);

  async function addProduct(productId) {
    try {
      setCurrentProductId(productId);
      setLoading(true);
      const response = await addProductToCart(productId);

      if (response.data.status === "success") {
        setCart(response.data);
        toast.success(response.data.message, { duration: 1000 });
      } else {
        toast.error(response.data.message, { duration: 1000 });
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.", { duration: 1000 });
    } finally {
      setLoading(false);
    }

    console.log(productId);
  }
     return <>
    <div className="row">
{data?.data.data.map((product) => {
  return (
    <div key={product.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 px-4 mb-6">
      <div className="product py-4">
        <Link to={`/productdetails/${product.id}/${product.category.name}`}>
        <img className='w-full rounded-3xl' src={product.imageCover} alt={product.title} />
        <span className="block font-light text-green-600">{product.category.name}</span>
        <h3 className="text-lg font-normal text-gray-800 mb-4">{product.title.split(' ').slice(0,2).join(' ')}</h3>

        <div className="flex justify-between items-center">
            <span>{product.price}EG</span>
            <span>{product.ratingsAverae} <i className="fas fa-star text-yellow-500"></i></span>
        </div>

         </Link>
             <button
            onClick={() => addProduct(product.id)}
            className="btn w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition duration-200"
          >
            {currentProductId === product.id && loading ? (
              <i className="fas fa-spinner fa-spin"></i>
            ) : (
              "Add To Cart"
            )}
          </button>
      </div>

    </div>
  );
})}
    </div>
    </>
}
