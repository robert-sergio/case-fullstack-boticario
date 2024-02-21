'use client'
import React, { useState } from 'react'
import { useContext } from 'react'
import { CartContext } from '@/contexts/cartcontext'
import { IconShoppingCart } from '@tabler/icons-react'

export default function Cart() {
  const { totalItens, totalCart, handleCartPreview} = useContext(CartContext)

  return (
    <div className='flex flex-col justify-center items-center gap-1'>
        <button 
          className='flex gap-8'
          onClick={()=> handleCartPreview()}
        >
          Ver Carrinho <IconShoppingCart />
        </button>
        <span>{totalItens} itens no valor de R$ {totalCart}</span>
    </div>
  )
}
