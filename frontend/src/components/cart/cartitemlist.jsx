'use client'
import React from 'react'
import Cartitem from './cartitem'
import { useContext } from 'react'
import { CartContext } from '@/contexts/cartcontext'


export default function CartItemList() {
  const { cartList } = useContext(CartContext)
  return (
    <div className='flex flex-col w-full gap-2 h-3/4 bg-white border-green-950 rounded-md border overflow-auto p-2'>
      {
        cartList.map((produto, index)=>{
          return(
          <Cartitem key={index} item={produto} />)
        })
      }
      
    </div>
  )
}
