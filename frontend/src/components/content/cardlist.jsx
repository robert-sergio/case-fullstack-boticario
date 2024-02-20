'use client'
import React, { useEffect, useState } from 'react'
import Card from './card'
import {ProductService} from '../../services/products'
import Product from '../product/product'

export default function Cardlist() {
  const [ listProduct, setListProduct ] = useState([])

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
            <Card key={index} product={productItem} />
          )})
      }
    </div>
  )
}
