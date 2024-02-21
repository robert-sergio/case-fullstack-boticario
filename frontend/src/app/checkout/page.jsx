'use client'
import React from 'react'
import Header from '@/components/header'
import Content from '@/components/content'
import Cartlist from '@/components/checkout/cartlist'
import CartModal from '@/components/cart/cartmodal'

export default function page() {
  return (
    <div>
        <Header />
        <CartModal />
        <Content >
            <Cartlist />
        </Content>
        
    </div>
  )
}
