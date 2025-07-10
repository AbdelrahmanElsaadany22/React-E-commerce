import React, { useState, useEffect, useContext } from 'react';
import style from './Brands.module.css';
import { ClimbingBoxLoader } from 'react-spinners';
import { BrandsContext } from "../../Context/BrandsContext";
import { Link } from "react-router-dom";

export default function Brands() {
  const getBrands = useContext(BrandsContext);
  const [Brands, setBrands] = useState(null);
  const [loading, setLoading] = useState(false);

  async function getBrandsData() {
    setLoading(true); // ✅ Start loading
    let res = await getBrands();
    setBrands(res.data.data);
    setLoading(false); // ✅ End loading
  }

  useEffect(() => {
    getBrandsData();
  }, []);

  if (loading) {
    return (
      <div className="py-8 w-full flex justify-center">
        <ClimbingBoxLoader color="green" />
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 mt-4">
        {Brands?.map((brand) => (
          <Link key={brand._id} to={`/brands/${brand._id}`} state={{ from: "brand"}}>
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
              <img
                className="rounded-t-lg w-full object-contain h-40 p-4"
                src={brand.image}
                alt={brand.name}
              />
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {brand.name}
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {brand.slug}
                </p>
                <span className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Read more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
