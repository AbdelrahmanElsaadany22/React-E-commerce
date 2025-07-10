import React, { useEffect } from 'react';
import style from './Categories.module.css';
import useCategories from "../../Hooks/useCategories";
import { Link } from "react-router-dom";
import { ClimbingBoxLoader } from "react-spinners";
export default function Categories() {
  const { data, isLoading } = useCategories();

  const categories =data?.data?.data || [];

  if (isLoading) {
    return (
      <div className="py-8 w-full flex justify-center">
        <ClimbingBoxLoader color="green" />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 mt-4">
      {categories.map((category) => (
        <Link key={category._id} to={`/category/${category._id}`}>
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <img
              className="rounded-t-lg w-full h-80 object-cover p-4"
              src={category.image}
              alt={category.name}
            />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {category.name}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {category.slug}
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
  );
}
