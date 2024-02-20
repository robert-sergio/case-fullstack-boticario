'use client'
import React from 'react'
import Header from '@/components/header'
import Content from '@/components/content'
import Cartlist from '@/components/checkout/cartlist'

export default function page() {
  return (
    <div>
        <Header />
        <Content >
            <Cartlist />
        </Content>
        
    </div>
  )
}
