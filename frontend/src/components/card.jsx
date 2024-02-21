import React from 'react'

export default function Card({title, children}) {
  return (
    <div className='w-full flex flex-col border border-slate-500 p-4 rounded-md gap-2'>
        <span className='text-xl font-bold self-center p-2'>{title}</span>
        {
            children
        }
    </div>
  )
}
