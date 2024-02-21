'use client'
import React from 'react'
import Login from '../../components/login'
import Link from 'next/link'

export default function page() {
  return (
    <div className='flex justify-center items-center h-screen'>
        <Link 
          href={'/'} 
          className='absolute right-12 top-12 pl-6 pt-8 text-white font-semibold h-32 w-32 bg-green-700 border rounded-full'>
          Voltar aos produtos
        </Link>
        <Login />
    </div>
  )
}
