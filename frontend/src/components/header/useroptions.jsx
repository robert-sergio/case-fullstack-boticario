'use client'
import React from 'react'
import { useContext } from 'react'
import { LoginContext } from '@/contexts/logincontext'
import Link from 'next/link'

export default function UserOptions() {
  const {clientData} = useContext(LoginContext)
  return (
    <div className='flex flex-col'>
      {
        clientData.nome?
        <>
          <div>Olá, {clientData.nome}</div>
          <Link href={'/user'}>Minha Conta</Link>
        </>:
          <Link href={'/login'}>Realizar Login</Link>
      }
    </div>
  )
}
