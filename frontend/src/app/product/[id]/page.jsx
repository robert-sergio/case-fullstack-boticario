'use client'
import React, { useEffect, useState } from 'react'
import { useParams } from "next/navigation"
import Header from '@/components/header'
import Content from '@/components/content'
import Product from '@/components/product/product'
import { ProductService } from '@/services/products'
import CartModal from '@/components/cart/cartmodal'

export default function ProductPage(props) {
  const { id } = useParams()
  const [product, setProduct] = useState({})

  useEffect(()=>{
    const service = new ProductService()

    async function getProduct(){
      const {data} = await service.getProductById(id)
      setProduct(data[0])
    }
    getProduct()
  
  },[])


  return (
    <div className="flex min-h-screen flex-col items-center">
      <Header />
      <CartModal />
      <Content >
        <Product item={product}></Product>
      </Content>
    </div>
  )
}
