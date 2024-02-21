'use client'
import React, { useState } from 'react'
import { UserService } from '@/services/user'
import { useContext } from 'react'
import { LoginContext } from '@/contexts/logincontext'
import { useRouter } from 'next/navigation'

export default function Login() {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const { setClientData } = useContext(LoginContext)
  const router = useRouter()

  async function handleLogin(event){
    event.preventDefault()
    const service = new UserService()
    const response = await service.loginRequest(email, pass)
    if (response.data.message ==='"Email or Password does not match"'){
      // colocar mensagem de erro
      return
    }
    setClientData(response.data)
    router.push('/')
  }

  return (
    <>
        <form onSubmit={handleLogin} className='flex flex-col gap-8 justify-center items-center p-8 bg-green-700 rounded-md'>
            <h1 className='text-white text-xl'>Faça Login</h1>

            <input 
              type='email' placeholder='email'
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input 
              type='password' placeholder='senha' 
              required
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
            
            <button type='submit' className='p-2 bg-green-300 rounded-md w-32'>Login</button>
        </form>
    </>
  )
}
