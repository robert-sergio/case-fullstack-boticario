import React from 'react'
import Content from '@/components/content'
import Header from '@/components/header'
import User from '@/components/user/user'
import CartModal from '@/components/cart/cartmodal'

export default function page() {
  return (
    <div className="flex min-h-screen flex-col items-center">
        <Header />
        <CartModal />
        <Content>
            <User />
        </Content>

    </div>
  )
}
