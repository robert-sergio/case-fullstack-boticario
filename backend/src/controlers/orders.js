
class orders{
    async createOrder(prisma, data){
        const products = await prisma.pedido.create({data})
        return products
    }

    async getOrders(prisma, cliente_id){
        const products = await prisma.pedido.findMany({
            where:{
                cliente_id: Number(cliente_id)
            }
        })
        return products
    }
}


module.exports = new orders()