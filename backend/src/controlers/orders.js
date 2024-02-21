
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

    async cancelOrder(prisma, cliente_id, data){
        const result = await prisma.pedido.update({
            where:{
                cliente_id: Number(cliente_id)
            },
            data:{
                data
            }
        })
        return result
    }

    async deleteOrder(prisma, cliente_id){
        const result = await prisma.pedido.delete({
            where:{
                cliente_id: Number(cliente_id)
            }
        })
        return result
    }
}


module.exports = new orders()