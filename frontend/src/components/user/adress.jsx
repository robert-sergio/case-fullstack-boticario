import React from 'react'

export default function Adress() {
  return (
    <div className='flex flex-col w-full items-start p-6 border border-slate-400 rounded-md gap-2'>
        <span className='text-lg font-bold'>Endereço</span>

        <div className='flex gap-2'>
            <span className='font-semibold'>rua :</span>
            <span className=''>Das flores</span>
        </div>

        <div className='flex gap-2'>
            <span className='font-semibold'>numero :</span>
            <span className=''>121</span>
        </div>

        <div className='flex gap-2'>
            <span className='font-semibold'>complemento :</span>
            <span className=''>lote 1 quadra 2</span>
        </div>

        <div className='flex gap-2'>
            <span className='font-semibold'>bairro :</span>
            <span className=''>Centro</span>
        </div>
        
        <div className='flex gap-2'>
            <span className='font-semibold'>Cidade :</span>
            <span className=''>Maceió</span>
        </div>
        
        <div className='flex gap-2'>
            <span className='font-semibold'>Estado :</span>
            <span className=''>Alagoas</span>
        </div>

    </div>
  )
}
