import React from 'react'
import Header from '@/components/header'
import Content from '@/components/content'
import Orderlist from '@/components/orders/orderlist'

export default function page() {
  return (
    <div>
        <Header />
        <Content >
            <Orderlist />
        </Content>
    </div>
  )
}
