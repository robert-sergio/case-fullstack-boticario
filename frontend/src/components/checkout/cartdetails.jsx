'use client'
import React, { useState } from 'react'
import { useContext, useEffect } from 'react'
import { LoginContext } from '@/contexts/logincontext'
import { useRouter } from 'next/navigation'
import { UserService } from '@/services/user'
import { CartContext } from '@/contexts/cartcontext'
import { OrderService } from '@/services/order'

export default function CartDetails() {
  const [values, setValues] = useState({})
  const router = useRouter()

  const {cliente_id, token} = useContext(LoginContext)

  const {totalCart, cartList } = useContext(CartContext)

  useEffect(()=>{
    if(token===''){
      router.push('/login')
      return
    }

    const service = new UserService()
    async function getUserData(){
      const {data} = await service.userData(cliente_id, token)
      setValues(data[0])
    }
    getUserData()
  },[])

  async function handleOrder(){
    const service = new OrderService()
    const data  = {
      valor_total_pedido: totalCart,
      status: true,
      cliente_id,
      produtos_pedidos:{
        create: 
          cartList.map((item)=>{
            return {qtd_produto_pedido: item.qtd_produto_pedido, preco_produto_pedido: item.produto.preco_produto, produto_id:item.produto.produto_id}
          })
        
      }
    }
    service.createOrder(data, token)
    router.push('/orders')
  }

  return (
    <div className='flex flex-col w-1/2 border border-slate-400 rounded-md p-4 items-center gap-4'>
        <span className='text-lg font-bold'>Resumo da Compra</span>

        <div className='flex flex-col items-center border border-slate-400 rounded-md w-full p-4'>
          <span className='text-md font-bold'>Endereço da Entrega</span>

          <label className='text-sm font-semibold'>Rua</label>
          <span>{values.endereco?.rua}</span>

          <label className='text-sm font-semibold'>Numero</label>
          <span>{values.endereco?.numero}</span>

          <label className='text-sm font-semibold'>Cidade</label>
          <span>{values.endereco?.cidade}</span>

          <label className='text-sm font-semibold'>UF</label>
          <span>{values.endereco?.uf}</span>

        </div>

        <div className='flex flex-col items-center border border-slate-400 rounded-md w-full p-4'>
          <span className='text-lg font-bold'>Total</span>
          <span className='text-xl font-bold'>R$ {totalCart}</span>
        </div>

        <button 
          className='w-64 p-4 bg-green-700 text-white font-semibold text-lg rounded-md'
          onClick={()=>handleOrder()}
        >
          Confirmar e Comprar!
        </button>
    </div>
  )
}