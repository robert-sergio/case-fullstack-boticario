import React from 'react'

export default function Login() {
  return (
    <>
        <form className='flex flex-col gap-8 justify-center items-center p-8 bg-green-700 rounded-md'>
            <h1 className='text-white text-xl'>Faça Login</h1>
            <input type='email' placeholder='email'></input>
            <input type='password' placeholder='senha'></input>
            <button type='submit' className='p-2 bg-green-300 rounded-md w-32'>Login</button>
        </form>
    </>
  )
}
