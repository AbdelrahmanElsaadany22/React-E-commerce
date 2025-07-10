import React from 'react'
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
export default function useProducts() {
      function getRecent(){
      console.log("Fetching recent products...");
    return axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
  }
  let response= useQuery({
    queryKey:['recentProducts'],
     queryFn:getRecent,
    staleTime:8000
    })
  return response
}
