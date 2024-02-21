import React from 'react'
import Header from '@/components/header'
import Content from '@/components/content'
import Orderlist from '@/components/orders/orderlist'
import CartModal from '@/components/cart/cartmodal'

export default function page() {
  return (
    <div className="flex min-h-screen flex-col items-center">
        <Header />
        <CartModal />
        <Content >
            <Orderlist />
        </Content>
    </div>
  )
}
