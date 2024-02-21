import React from 'react'
import Content from '@/components/content'
import Header from '@/components/header'
import User from '@/components/user/user'
import CartModal from '@/components/cart/cartmodal'

export default function page() {
  return (
    <div>
        <Header />
        <CartModal />
        <Content>
            <User />
        </Content>

    </div>
  )
}
