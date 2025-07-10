import React from 'react'
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
export default function useCategories() {
      function getCategories(){
      console.log("Fetching recent products...");
    return axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
  }
  let response= useQuery({
    queryKey:['categories'],
     queryFn:getCategories,
    staleTime:8000
    })
  return response
}
