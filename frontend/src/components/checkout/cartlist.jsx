'use client'
import React from 'react'
import Card from '../card'
import CardProductSm from './cardproductsm'
import CartDetails from './cartdetails'
import { useContext } from 'react'
import { CartContext } from '@/contexts/cartcontext'

export default function Cartlist() {
  const { cartList } = useContext(CartContext)
  
  return (
    <Card title={'Checkout'}>
      <div className='flex w-full p-4 gap-8 justify-between'>
        <div className='flex flex-wrap justify-center gap-4 w-1/2 border border-slate-400 rounded-md p-4'>
          {
            cartList.map((product, index)=>{
              return(
                <CardProductSm key={index} item={product}/>
              )
            })
          }
        </div>
        <CartDetails />
      </div>
    </Card>
  )
}
