'use client'
import React from 'react'
import OrderProduct from './orderproduct'

export default function Order({pedido}) {
  return (
    <div className='border border-slate-400 rounded-md p-4 gap-2 flex flex-col justify-between shadow-md'>
        <div className='p-4 flex gap-6'>
            <span>Pedido: {pedido.numero_pedido}</span>
            <span>Valor: {pedido.valor_total_pedido}</span>
            <span>Data Pedido: {pedido.data_pedido}</span>
        </div>
        <div className='w-full flex p-4 border border-slate-400 rounded-md gap-2'>
            {
                pedido.produtos_pedidos.map((produto, index)=>{
                return(
                    <OrderProduct key={index} produto={produto} />
                )})
            }
        </div>
    </div>
  )
}
