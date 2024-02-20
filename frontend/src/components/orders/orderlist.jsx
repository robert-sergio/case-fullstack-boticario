'use client'
import React from 'react'
import Order from './order'
import Card from '../card'

export default function Orderlist() {
    const pedidos = [
        {numero_pedido:1, valor_total_pedido:199, data_pedido: '01/01/2024', status:true, produtos_pedidos: [{id:1, imagem:'', preco:''},{id:1, imagem:'', preco:''}]},
        {numero_pedido:2, valor_total_pedido:145, data_pedido: '01/02/2024', status:true, produtos_pedidos: [{id:1, imagem:'', preco:''},{id:1, imagem:'', preco:''}]}
    ]

    return (
        <Card title={'Seus Pedidos'}>
            <div className='flex flex-col gap-4 p-4'>
                {
                    pedidos.map((pedido, index) =>{
                        return(
                            <Order key={index} pedido={pedido}/>
                        )
                    }
                )}
            </div>
        </Card>
  )
}
