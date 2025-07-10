import axios from "axios";
import { useEffect, useState } from "react";
import { createContext } from 'react';
export let CartContext = createContext();

export default function CartContextProvider(props) {

    let headers = {
       token: localStorage.getItem('userToken')
        };
    let [cart,setCart]=useState(null)
    function getLoggedUserCart() {
        return axios.get(`https://ecommerce.routemisr.com/api/v1/cart`, {
          headers: {
        token: localStorage.getItem("userToken")
      }
        })
        .then(res => res)
        .catch(error =>error);
    }
    function addProductToCart(productId){
        return axios.post(`https://ecommerce.routemisr.com/api/v1/cart`,{
            productId:productId
        },{
           headers: {
        token: localStorage.getItem("userToken")
      }
        }) .then(res => res)
        .catch(error =>error);
    }
    function updateCartItemCount(productId,count){
        return axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,{
            count:count
        },{
           headers: {
        token: localStorage.getItem("userToken")
      }
        }) .then(res => res)
        .catch(error =>error);
    }

function deleteProductItem(productId) {
    return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`, {
        headers: {
        token: localStorage.getItem("userToken")
      },
        data: {
            productId: productId
        }
    })
    .then(res => res)
    .catch(error => error);
}



function checkOut(cartid,url,formValues) {
    return axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartid}?url=${url}`, {
        shippingAddress:formValues
    },{
        headers: {
        token: localStorage.getItem("userToken")
      },
    })
    .then(res => res)
    .catch(error => error);
}
async function getCart(){
    let res=await getLoggedUserCart()
    setCart(res.data)
}
  useEffect(() => {
    getCart();
  }, []);

    return (
        <CartContext.Provider value={{cart,setCart,checkOut , getLoggedUserCart,addProductToCart,updateCartItemCount,deleteProductItem}}>
            {props.children}
        </CartContext.Provider>
    );
}
