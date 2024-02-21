'use client'
import React from 'react'
import Image from 'next/image'
import { useContext } from 'react'
import { CartContext } from '@/contexts/cartcontext'
import { IconPlus, IconMinus, IconTrash } from '@tabler/icons-react'

export default function Cartitem({item}) {
    const {qtd_produto_pedido, produto} = item
    const { handleCartList, handleDeleteCartItem } = useContext(CartContext)

    return (
    <div className='w-full p-1 border border-slate-400 rounded-md flex'>
        <div className='w-1/2 justify-center'>
            <Image src={produto.imagem} alt='' width={100} height={100}/>
        </div>
        <div className='w-1/2 flex flex-col justify-evenly items-center'>
            <span>{produto.nome_produto}</span>
            <span>R$ {produto.preco_produto}</span>
            <div className='flex p-1 gap-4'>
                <IconMinus onClick={()=> handleCartList(produto, 'dec')}/>
                {qtd_produto_pedido}
                <IconPlus onClick={()=> handleCartList(produto, 'add')}/>
            </div>
            <span className='text-center'>Total R$ {qtd_produto_pedido*produto.preco_produto}</span>
        </div>
        <div 
            className='flex items-center justify-center'
            onClick={()=> handleDeleteCartItem(produto.produto_id)}
        >
            <IconTrash />
        </div>
    </div>
  )
}
