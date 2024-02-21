import React from 'react'
import { IconUserCancel } from '@tabler/icons-react'

export default function Order({pedido, handleCancel, handleDelete}) {

  return (
    <div className='border border-slate-400 w-full rounded-md p-4 gap-2 flex flex-col justify-between shadow-md'>
        <div className='p-4 flex gap-6 w-full justify-around'>
            <span>Pedido: {pedido.numero_pedido}</span>
            <span>Valor: {pedido.valor_total_pedido}</span>
            <span>Data Pedido: {pedido.data_pedido}</span>
            <span>Status: {pedido.status?'Ativo':'Cancelado'}</span>

            <div 
                className='flex flex-col justify-center items-center'
                onClick={()=>handleCancel()}
            >
                <IconUserCancel />
                <span>Cancelar</span>
            </div>

            <div 
                className='flex flex-col justify-center items-center'
                onClick={()=>handleDelete()}
            >
                <IconUserCancel />
                <span>Deletar</span>
            </div>

        </div>
    </div>
  )
}
