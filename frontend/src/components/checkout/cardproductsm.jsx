'use client'
import React from 'react'
import Image from 'next/image'

export default function CardProductSm({item}) {
  const {produto, qtd_produto_pedido } = item
  return (
    <div className='border border-slate-400 w-48 rounded-md p-1 flex flex-col justify-evenly items-center gap-1 shadow-md'>
      <div className='flex justify-center items-center'>
        <Image src={produto.imagem} alt='' width={200} height={200}/>
      </div>
      <span>{produto.nome_produto}</span>
      <span>R$ {produto.preco_produto}</span>
      <span>Quantidade {qtd_produto_pedido}</span>
      <span>Total R$ {qtd_produto_pedido * produto.preco_produto}</span>
    </div>
  )
}
