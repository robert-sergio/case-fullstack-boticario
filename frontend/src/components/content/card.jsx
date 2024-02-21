import React from 'react'
import Image from 'next/image'

export default function card({product, handleCartList}) {
  return (
    <div className='flex-col items-center border-green-700 border w-64 h-96 p-2 rounded-sm shadow-md shadow-slate-600'>
        <div>
          <Image src={product.imagem} alt='' width={240} height={240}/>
        </div>
        <div className='h-1/3 flex flex-col items-center gap-2'>
            <span className='text-md font-semibold'>{product.nome_produto}</span>
            <span className='text-md font-semibold'>R$ {product.preco_produto}</span>
            <button 
              className='bg-green-700 rounded-md p-4 text-white shadow-slate-600 shadow-md'
              onClick={()=> handleCartList(product,'add')}
            >
              Adicionar ao Carrinho
            </button>
        </div>
    </div>
  )
}
