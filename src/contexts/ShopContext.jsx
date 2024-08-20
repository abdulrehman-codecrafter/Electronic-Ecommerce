import { collection, getDocs } from 'firebase/firestore';
import React, { createContext, useContext, useEffect, useState } from 'react'
import { firestore } from '../config/firebase';

export const ShopItemsContext=createContext()

export default function ShopContextProvider(props) {

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const q = collection(firestore, "products");
        const querySnapshot = await getDocs(q);

        let tempProducts = [];
        querySnapshot.forEach((doc) => {
          tempProducts.push(doc.data());
        });
        setShopItems(tempProducts);
        setIsAppLoading(false)
      } catch (error) {
        console.error("Error fetching products: ", error);
      }
    };

    fetchProducts();
  }, []);

  const [shopItems,setShopItems]=useState([])
  const [isAppLoading,setIsAppLoading]=useState(true)
  return (

    <ShopItemsContext.Provider value={{shopItems,isAppLoading}}>
      {props.children}
    </ShopItemsContext.Provider>
  )
}
