'use client'
import React from 'react'

export default function OrderProduct({produto}) {
  return (
    <div className='border border-slate-400 w-32 rounded-md p-4 flex flex-col'>
      <span>imagem</span>
      <span>id: {produto.id}</span>
      <span>R$ {produto.preco}</span>
      <span>Qtd: {}</span>
    </div>
  )
}
