import React from 'react'

export default function Profile() {
  return (
    <div className='flex flex-col w-full items-start p-6 border border-slate-400 rounded-md gap-2'>
        <span className='text-lg font-bold'>Dados Pessoais</span>

        <div className='flex gap-2'>
            <span className='font-semibold'>nome :</span>
            <span className=''>Robert</span>
        </div>

        <div className='flex gap-2'>
            <span className='font-semibold'>CPF :</span>
            <span className=''>12121323</span>
        </div>

        <div className='flex gap-2'>
            <span className='font-semibold'>email :</span>
            <span className=''>oi@oi.com</span>
        </div>

        <div className='flex gap-2'>
            <span className='font-semibold'>Telefone :</span>
            <span className=''>+559989898</span>
        </div>
        
        <div className='flex gap-2'>
            <span className='font-semibold'>Data Nascimento :</span>
            <span className=''>01/01/1987</span>
        </div>

    </div>
  )
}
