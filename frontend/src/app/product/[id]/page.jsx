'use client'
import React from 'react'
import { useParams } from "next/navigation"
import Header from '@/components/header'
import Content from '@/components/content'
import Product from '@/components/product/product'

export default function ProductPage(props) {
  const { id } = useParams()
  return (
    <div>
      <Header />
      <Content >
        <Product id={id}></Product>
      </Content>
    </div>
  )
}
