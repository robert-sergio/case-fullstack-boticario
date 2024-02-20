'use client'
import { createContext, useState, useEffect } from "react";

export const CartContext = createContext([])

export function CartProvider(props){
    const [ listProduct, setListProduct ] = useState([])
    
    useEffect(() => {
        const data = window.localStorage.getItem('PRODUCT_LIST');
        if ( data !== null ) setListProduct(JSON.parse(data));
    }, []);

    useEffect(() => {
        window.localStorage.setItem('PRODUCT_LIST', JSON.stringify(listProduct));
    }, [listProduct]);

    return(
        <CartContext.Provider value={{ listProduct, setListProduct }}>
            {props.children}
        </CartContext.Provider>
    )
}