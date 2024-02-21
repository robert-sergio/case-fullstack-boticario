import React from 'react'

export default function Adress({values}) {
  return (
    <div className='flex flex-col w-full items-start p-6 border border-slate-400 rounded-md gap-2'>
        <span className='text-lg font-bold'>Endereço</span>

        <div className='flex gap-2'>
            <span className='font-semibold'>rua :</span>
            <span className=''>{values.endereco?.rua}</span>
        </div>

        <div className='flex gap-2'>
            <span className='font-semibold'>numero :</span>
            <span className=''>{values.endereco?.numero}</span>
        </div>

        <div className='flex gap-2'>
            <span className='font-semibold'>complemento :</span>
            <span className=''>{values.endereco?.complemento}</span>
        </div>

        <div className='flex gap-2'>
            <span className='font-semibold'>bairro :</span>
            <span className=''>{values.endereco?.bairro}</span>
        </div>
        
        <div className='flex gap-2'>
            <span className='font-semibold'>Cidade :</span>
            <span className=''>{values.endereco?.cidade}</span>
        </div>
        
        <div className='flex gap-2'>
            <span className='font-semibold'>Estado :</span>
            <span className=''>{values.endereco?.uf}</span>
        </div>

    </div>
  )
}
