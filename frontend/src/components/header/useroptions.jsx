'use client'
import React from 'react'
import { useContext } from 'react'
import { LoginContext } from '@/contexts/logincontext'
import Link from 'next/link'

export default function UserOptions() {
  const {clientData, handleLogout} = useContext(LoginContext)
  return (
    <div className='flex gap-4'>
      {
        clientData.nome?
        <>
          <div>Olá, {clientData.nome}</div>
          <Link href={'/user'}>Minha Conta</Link>
          <Link href={'/orders'}>Meus pedidos</Link>
          <button onClick={()=> handleLogout()}>Logout</button>
        </>:
          <Link href={'/login'}>Realizar Login</Link>
      }
    </div>
  )
}
