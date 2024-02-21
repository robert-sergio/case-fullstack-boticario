'use client'
import React, { useState } from 'react'
import { useContext } from 'react'
import { CartContext } from '@/contexts/cartcontext'
import { IconShoppingCart } from '@tabler/icons-react'

export default function Cart() {
  const { totalItens, totalCart, handleCartPreview} = useContext(CartContext)

  return (
    <div className='flex justify-center items-center gap-4'>
        <span>{totalItens} itens no valor de R$ {totalCart}</span>
        <button 
          className='flex gap-8'
          onClick={()=> handleCartPreview()}
        >
          Ver Carrinho <IconShoppingCart />
        </button>
    </div>
  )
}
