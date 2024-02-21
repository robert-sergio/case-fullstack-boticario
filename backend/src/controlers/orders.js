
class orders{
    async createOrder(prisma, data){
        const products = await prisma.pedido.create({data})
        return products
    }

    async getOrders(prisma, cliente_id){
        const products = await prisma.pedido.findMany({
            where:{
                cliente_id: Number(cliente_id)
            },
            include:{
                produtos_pedidos:true
            },
        })
        return products
    }

    async cancelOrder(prisma, pedido_id, data){
        const status = data.status
        const result = await prisma.pedido.update({
            where:{
                pedido_id: Number(pedido_id)
            },
            data:{
                status: status
            }
        })
        return result
    }

    async deleteOrder(prisma, pedido_id){
        const result = await prisma.pedido.delete({
            where:{
                pedido_id: Number(pedido_id)
            }
        })
        return result
    }
}


module.exports = new orders()