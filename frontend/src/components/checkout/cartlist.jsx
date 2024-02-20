'use client'
import React from 'react'
import Card from '../card'
import CardProductSm from './cardproductsm'
import CartDetails from './cartdetails'

export default function Cartlist() {
  const cartProducts = [
                      {id: 1, nome_produto:'camisa', preco_produto: 100, qtd: 2},
                      {id: 1, nome_produto:'bermuda', preco_produto: 150, qtd: 2},
                    ]

  return (
    <Card title={'Carrinho'}>
      <div className='flex w-full p-4 gap-8 justify-between'>
        <div className='flex gap-4 w-1/2 border border-slate-400 rounded-md p-4'>
          {
            cartProducts.map((product, index)=>{
              return(
                <CardProductSm key={index} produto={product}/>
              )
            })
          }
        </div>
        <CartDetails />
      </div>
    </Card>
  )
}
