import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CartContext } from "../../Context/CartContext";
import toast from "react-hot-toast";

export default function SpecificProduct() {
  const [productDetails, setProductDetails] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentProductId, setCurrentProductId] = useState(0);
  let { id, category } = useParams();

  const { addProductToCart, setCart } = useContext(CartContext);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

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

  function getProductDetails(id) {
    axios
      .get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
      .then(({ data }) => {
        setProductDetails(data.data);
      })
      .catch(() => {});
  }

  function getRelatedProducts(category) {
    axios
      .get(`https://ecommerce.routemisr.com/api/v1/products`)
      .then(({ data }) => {
        let allProducts = data.data;
        let filtered = allProducts.filter((product) => product.category.name === category);
        setRelatedProducts(filtered);
      })
      .catch(() => {});
  }

  useEffect(() => {
    getProductDetails(id);
    getRelatedProducts(category);
  }, [id, category]);

  return (
    <>
      <div className="row mb-10">
        <div className="w-1/4">
          <Slider {...settings}>
            {productDetails?.images.map((src, idx) => (
              <img key={idx} className="w-full" src={src} alt={productDetails?.title} />
            ))}
          </Slider>
        </div>

        <div className="w-3/4 p-6">
          <h1 className="text-lg font-normal text-gray-950">{productDetails?.title}</h1>
          <p className="text-gray-600 mt-4 font-light">{productDetails?.description}</p>
          <div className="flex my-4 justify-between items-center">
            <span>{productDetails?.price} EG</span>
            <span>
              {productDetails?.ratingsAverage} <i className="fas fa-star text-yellow-500"></i>
            </span>
          </div>
          <button
            onClick={() => addProduct(productDetails?.id)}
            className="btn bg-green-600 text-white py-2 px-6 rounded hover:bg-green-700 transition"
          >
            {currentProductId === productDetails?.id && loading ? (
              <i className="fas fa-spinner fa-spin"></i>
            ) : (
              "Add To Cart"
            )}
          </button>
        </div>
      </div>

      <h2 className="text-xl font-semibold text-gray-800 mb-4">Related Products</h2>
      <div className="row flex flex-wrap">
        {relatedProducts.map((product) => (
          <div key={product.id} className="w-1/6 p-2">
            <div className="product py-4">
              <Link to={`/productdetails/${product.id}/${product.category.name}`}>
                <img className="w-full" src={product.imageCover} alt={product.title} />
                <span className="block font-light text-green-600">{product.category.name}</span>
                <h3 className="text-lg font-normal text-gray-800 mb-4">
                  {product.title.split(" ").slice(0, 2).join(" ")}
                </h3>
                <div className="flex justify-between items-center">
                  <span>{product.price} EG</span>
                  <span>
                    {product.ratingsAverage}
                    <i className="fas fa-star text-yellow-500 ml-1"></i>
                  </span>
                </div>
              </Link>
              <button
                onClick={() => addProduct(product.id)}
                className="btn w-full bg-green-600 text-white py-2 mt-2 rounded hover:bg-green-700 transition"
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
    </>
  );
}
