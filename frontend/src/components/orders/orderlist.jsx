'use client'
import React, { useEffect, useState } from 'react'
import Order from './order'
import Card from '../card'
import { OrderService } from '@/services/order'
import { useContext } from 'react'
import { LoginContext } from '@/contexts/logincontext'
import { useRouter } from 'next/navigation'

export default function Orderlist() {
    const {cliente_id, token} = useContext(LoginContext)
    const [changed, setChanged] = useState(false)
    const [orders, setOrders] = useState([])
    const router = useRouter()

    useEffect(()=>{
        if( cliente_id === ''){
            router.push('/login')
            return
        }
        const service = new OrderService()
        async function getOrders(){
            const {data} = await service.getOrders(cliente_id, token)
            setOrders(data)
        }
        getOrders()
        setChanged(false)
    },[changed])    

    async function handleCancel(pedido_id){
        const service = new OrderService()
        const {data} = await service.cancelOrder(pedido_id, token)
        setChanged(true)
    }

    async function handleDelete(pedido_id){
        const service = new OrderService()
        const {data} = await service.deleteOrder(pedido_id, token)
        setChanged(true)
    }


    return (
        <Card title={'Seus Pedidos'}>
            <div className='flex flex-col gap-4 p-4 w-full'>
                {
                    orders?.map((pedido, index) =>{
                        return(
                            <Order key={index} pedido={pedido} handleCancel={handleCancel} handleDelete={handleDelete} />
                        )
                    }
                )}
            </div>
        </Card>
  )
}
