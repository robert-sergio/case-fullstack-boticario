import React from 'react'

export default function Product({id}) {
  return (
    <div className='flex w-full justify-evenly'>
        <div className='flex flex-col justify-center items-center'>
            <div>Imagem</div>
            <div className='flex flex-col'>
                <span>Categoria</span>
                <span>Descricao</span>
                <span>Estoque</span>
            </div>
        </div>
        <div className='flex flex-col'>
            <span>Nome {id}</span>
            <span>Preço</span>
            <button>Adicionar ao Carrinho</button>
        </div>

    </div>
  )
}
