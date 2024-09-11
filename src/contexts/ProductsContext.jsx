import { collection, getDocs } from 'firebase/firestore';
import React, { createContext, useContext, useEffect, useState } from 'react'
import { firestore } from '../config/firebase';

export const ProductsContext=createContext()

export default function ProductsContextProvider(props) {

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const q = collection(firestore, "products");
        const querySnapshot = await getDocs(q);

        let tempProducts = [];
        querySnapshot.forEach((doc) => {
          tempProducts.push(doc.data());
        });
        setProducts(tempProducts);
        setIsAppLoading(false)
      } catch (error) {
        console.error("Error fetching products: ", error);
      }
    };

    fetchProducts();
  }, []);

  const [products,setProducts]=useState([])
  const [isAppLoading,setIsAppLoading]=useState(true)
  return (

    <ProductsContext.Provider value={{products,isAppLoading,setIsAppLoading}}>
      {props.children}
    </ProductsContext.Provider>
  )
}
