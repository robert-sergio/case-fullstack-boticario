'use client'
import React from 'react'
import { useContext } from 'react'
import { CartContext } from '@/contexts/cartcontext'
import CartItemList from './cartitemlist'
import Link from 'next/link'

export default function CartModal() {
  const { cartPreview, handleCartPreview, totalCart, totalItens } = useContext(CartContext)
  return (
    <>
      <div 
        onClick={()=>handleCartPreview()}
        className={`${cartPreview?'w-full h-screen absolute left-0 bg-slate-200 bg-opacity-25':''}`} >
      </div>

      <div className={`${cartPreview?'':'scale-x-0'} duration-1000 w-1/4 origin-right bg-green-700 absolute h-screen right-0`}>
        <div className='w-full flex flex-col h-screen justify-around items-center p-4 gap-4'>
          <span className='text-white font-semibold text-xl'>Itens do Carrinho</span>
          <CartItemList />
          <div className='flex flex-col items-center text-white font-semibold text-xl'>
            <span>{totalItens} Itens</span>
            <span>R$ {totalCart}</span>
          </div>
          <Link href='/checkout' className='bg-white border rounded-md border-green-950 p-4 font-semibold text-xl'>
            Seguir para a Compra
          </Link>
        </div>
      </div>
    </>
  )
}
