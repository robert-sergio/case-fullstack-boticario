const prisma = require('../middlewares/prisma')

class orders{
    async createOrder(request, reply){
        try{
            const data = request.body
            const products = await prisma.pedido.create({data})
            reply.status(201).send(products)
        } catch (err){
            reply.status(500).send(err)
        }
    }

    async getOrders(request, reply){
        try {
            const cliente_id = request.params.cliente_id
            const products = await prisma.pedido.findMany({
                where:{
                    cliente_id: Number(cliente_id)
                },
                include:{
                    produtos_pedidos:true
                },
            })
            reply.status(200).send(products)
        } catch (err){
            reply.status(500).send(err)
        }
    }

    async cancelOrder(request, reply){
        try {
            const pedido_id = request.params.pedido_id
            const data = request.body
            const result = await prisma.pedido.update({
                where:{
                    pedido_id: Number(pedido_id)
                },
                data:{
                    status: data.status
                }
            })
            reply.status(201).send(result)
        } catch {
            reply.status(500).send(err)
        }
    }

    async deleteOrder(request, reply){
        try{
            const pedido_id = request.params.pedido_id
            const result = await prisma.pedido.delete({
                where:{
                    pedido_id: Number(pedido_id)
                },
            })
            reply.status(201).send(result)
        } catch(err){
            reply.status(500).send(err)
        }
    }
}


module.exports = new orders()