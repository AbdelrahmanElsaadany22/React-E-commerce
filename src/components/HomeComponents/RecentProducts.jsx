import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ClimbingBoxLoader } from "react-spinners";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { CartContext } from "../../Context/CartContext";
import useProducts from "../../Hooks/useProducts";

export default function RecentProducts() {
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

  const { data, isError, error, isLoading } = useProducts();



  if (isError) {
    return (
      <div className="py-8 w-full flex justify-center">
        <h3>{error.message || "Something went wrong"}</h3>
      </div>
    );
  }

  const products = data?.data?.data || [];

  return (
    <div className="row">
      {products.map((product) => (
        <div key={product.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 px-4 mb-6">
          <div className="product py-4">
            <Link to={`/productdetails/${product.id}/${product.category.name}`}>
              <img className="w-full rounded-3xl" src={product.imageCover} alt={product.title} />
              <span className="block font-light text-green-600">{product.category.name}</span>
              <h3 className="text-lg font-normal text-gray-800 mb-4">
                {product.title.split(" ").slice(0, 2).join(" ")}
              </h3>
              <div className="flex justify-between items-center">
                <span>{product.price}EG</span>
                <span>
                  {product.ratingsAverage} <i className="fas fa-star text-yellow-500"></i>
                </span>
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
      ))}
    </div>
  );
}