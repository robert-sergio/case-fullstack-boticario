import React from 'react'

export default function Profile({values}) {
  return (
    <div className='flex flex-col w-full items-start p-6 border border-slate-400 rounded-md gap-2'>
        <span className='text-lg font-bold'>Dados Pessoais</span>

        <div className='flex gap-2'>
            <span className='font-semibold'>nome :</span>
            <span className=''>{values.nome}</span>
        </div>

        <div className='flex gap-2'>
            <span className='font-semibold'>CPF :</span>
            <span className=''>{values.cpf}</span>
        </div>

        <div className='flex gap-2'>
            <span className='font-semibold'>email :</span>
            <span className=''>{values.email}</span>
        </div>

        <div className='flex gap-2'>
            <span className='font-semibold'>Telefone :</span>
            <span className=''>{values.telefone}</span>
        </div>
        
        <div className='flex gap-2'>
            <span className='font-semibold'>Data Nascimento :</span>
            <span className=''>{values.data_nascimento}</span>
        </div>

    </div>
  )
}
