'use client'
import React from 'react'

export default function CartDetails() {
  return (
    <div className='flex flex-col w-1/2 border border-slate-400 rounded-md p-4 items-center gap-4'>
        <span className='text-lg font-bold'>Resumo da Compra</span>

        <div className='flex flex-col items-center border border-slate-400 rounded-md w-full p-4'>
          <span className='text-md font-bold'>Endereço da Entrega</span>

          <span className='text-sm font-semibold'>Rua</span>
          <span>Rua das Flores</span>

        </div>

        <div className='flex flex-col items-center border border-slate-400 rounded-md w-full p-4'>
          <span className='text-lg font-bold'>Total</span>
          <span className='text-xl font-bold'>R$ 200,00</span>
        </div>

        <button className='w-64 p-4 bg-green-700 text-white font-semibold text-lg rounded-md'>Confirmar e Comprar!</button>
    </div>
  )
}