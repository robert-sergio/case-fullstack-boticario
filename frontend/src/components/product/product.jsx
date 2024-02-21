import React from 'react'
import Card from '../card'
import Image from 'next/image'
import { CartContext } from '@/contexts/cartcontext'
import { useContext } from 'react'

export default function Product({item}) {
  const {handleCartList} = useContext(CartContext)
  return (
    <Card title={'Produto'}>
      <div className='flex w-full justify-evenly'>
          <div className='flex w-2/3 flex-col justify-center items-center gap-8'>
              <Image src={item.imagem} alt='' width={400} height={400} />
              <div className='flex flex-col'>
                  <span>{item.categoria}</span>
                  <span>{item.descricao_produto}</span>
                  <span>{item.qtd_estoque}</span>
              </div>
          </div>

          <div className='flex w-1/3 flex-col justify-center items-center gap-8'>
              <span className='text-2xl font-bold'>{item.nome_produto}</span>
              <span className='text-xl font-bold'>R$ {item.preco_produto}</span>
              
              <button 
                className='bg-green-700 p-4 rounded-md text-white text-xl font-semibold'
                onClick={()=>handleCartList(item, 'add')}
              >
                Adicionar ao Carrinho
              </button>
          </div>

      </div>
    </Card>

  )
}
