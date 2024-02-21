'use client'
import React, { useEffect, useState } from 'react'
import Card from './card'
import {ProductService} from '../../services/products'
import { useContext } from 'react'
import { CartContext } from '@/contexts/cartcontext'

export default function Cardlist({key}) {
  const [ listProduct, setListProduct ] = useState([])
  const { cartList, setCartList, totalCart, handleCartList } = useContext(CartContext)

  useEffect( ()=>{
    const service = new ProductService()
    async function getProductList(){
      const {data} = await service.getProducts()
      setListProduct(data)
    }
    getProductList()
  },[])

  return (
    <div className='flex flex-wrap gap-8 w-full justify-evenly items-start'>
      {
        listProduct.map((productItem, index)=>{
          return(
            <Card key={index} product={productItem} handleCartList={handleCartList} />
          )})
      }
    </div>
  )
}
