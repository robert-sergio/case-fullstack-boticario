import React from 'react'

export default function card() {
  return (
    <div className='flex-col border-green-700 border w-64 h-96 p-2 rounded-sm shadow-md shadow-slate-600'>
        <div className='h-2/3'>Imagem</div>
        <div className='h-1/3 flex flex-col items-center gap-4'>
            <span>Nome Produto</span>
            <span>Preço Produto</span>
            <button>Adicionar ao Carrinho</button>
        </div>
    </div>
  )
}
