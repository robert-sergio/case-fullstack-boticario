'use client'
import React, { useEffect } from 'react'
import Card from '../card'
import Profile from './profile'
import Adress from './adress'
import { useContext, useState } from 'react'
import { LoginContext } from '@/contexts/logincontext'
import { UserService } from '@/services/user'
import { useRouter } from 'next/navigation'

export default function User() {
  const {clientData} = useContext(LoginContext)
  const {cliente_id, token} = clientData
  const [values, setValues] = useState({})
  const router = useRouter()

  useEffect(()=>{
    if(cliente_id ===''){
      router.push('/login')
    }
  },[])

  useEffect(()=>{
    if(token ==='') return
    const service = new UserService()
    async function getUserData(){
      const {data} = await service.userData(cliente_id, token)
      setValues(data[0])
    }
    getUserData()
  },[])

  return (
    <div>
        <Card title={'Seus Dados'}>
          <Profile values={values} />
          <Adress values={values} />
        </Card>
    </div>
  )
}
