import { Link, useParams } from "react-router-dom";
import useProducts from "../../Hooks/useProducts";
import {ClimbingBoxLoader} from 'react-spinners'
import { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import NoItem from "../Categories/NoItem";
export default function SpecificBrand() {
  const { id } = useParams();
  const { data, isLoading, isError, error } =useProducts();
   let {addProductToCart,setCart}=useContext(CartContext)
    const [loading,setLoading]=useState(false)
    const[currentProductId,setCurrentProductId]=useState(0)
    async function addProduct(productId){
      setCurrentProductId(productId)
      setLoading(true)
      let response=await addProductToCart(productId)
      if(response.data.status==='success'){
        setCart(response.data)
        setLoading(false)
        toast.success(response.data.message,{
          duration:1000,

        })
      }
      else{
        setLoading(false)
        toast.error(response.data.message,{
          duration:1000,
        })
      }
    }
  const products = Array.isArray(data?.data?.data) ? data.data.data : [];
  const filteredProducts = products.filter(
    (product) => product.brand?._id === id
  );
  if(filteredProducts.length===0){
    return <NoItem from='brand'/>;
  }
   return <>
    <div className="row">
{filteredProducts.map((product) => {
  return (
    <div key={product.id} className="w-1/6 px-4">
      <div className="product py-4">
        <Link to={`/productdetails/${product.id}/${product.category.name}`}>
        <img className='w-full' src={product.imageCover} alt={product.title} />
        <span className="block font-light text-green-600">{product.category.name}</span>
        <h3 className="text-lg font-normal text-gray-800 mb-4">{product.title.split(' ').slice(0,2).join(' ')}</h3>

        <div className="flex justify-between items-center">
            <span>{product.price}EG</span>
            <span>{product.ratingsAverae} <i className="fas fa-star text-yellow-500"></i></span>
        </div>
         </Link>
            <button onClick={()=>addProduct(product.id)} className="btn w-full bg-green-600 text-white">
            {currentProductId===product.id && loading?<i className="fas fa-spinner fa-spin"></i>: 'Add To Cart'}
           </button>
      </div>

    </div>
  );
})}
    </div>
    </>
}
