import { createContext, useState } from "react";
import axios from "axios";
export let BrandsContext=createContext()
export default function BrandsContextProvider(props){
    function getBrands(){
        return axios.get(`https://ecommerce.routemisr.com/api/v1/brands`)
        .then(res=>res).catch(error=>error)
    }

    return (
        <BrandsContext.Provider value={getBrands}>
          {props.children}
        </BrandsContext.Provider>
    )
}
