'use client'
import React from 'react'

export default function CardProductSm({produto}) {
  return (
    <div className='border border-slate-400 w-48 rounded-md p-4 flex flex-col'>
      <span>imagem</span>
      <span>{produto.nome_produto}</span>
      <span>R$ {produto.preco}</span>
      <div className='flex gap-2 items-center justify-center'>
        <span>Menos</span>
        <span>Qtd: {}</span>
        <span>Mais</span>
      </div>
      <span>Total R$ {produto.preco}</span>
      <button>Remover do Carrinho</button>
    </div>
  )
}
