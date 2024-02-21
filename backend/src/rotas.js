const getProducts = require('./controlers/product')
const Login = require('./controlers/login')
const DadosUsuario = require('./controlers/client')
const orders = require('./controlers/orders')
const auth = require('./middlewares/auth')

const rotas = (app, prisma) =>{

    app.get('/products', async function(request, reply){
        const values = await getProducts(prisma)
        reply.send(values)
    })

    app.get('/products/:id', async function(request, reply){
        const id = request.params.id
        const values = await getProducts(prisma, id)
        reply.send(values)
    })

    app.post('/login', async function(request, reply){
        const data = request.body
        const values = await Login(prisma, data)
        reply.send(values)
    })

    app.get('/user/:cliente_id', {'preHandler':auth}, async function(request, reply){
        const cliente_id = request.params.cliente_id
        const values = await DadosUsuario(prisma, cliente_id)
        reply.send(values)
    })

    app.post('/order', {'preHandler':auth}, async function(request, reply){
        const data = request.body
        const values = await orders.createOrder(prisma, data)
        reply.send(values)
    })

    app.get('/order/:cliente_id', {'preHandler':auth}, async function(request, reply){
        const cliente_id = request.params.cliente_id
        const values = await orders.getOrders(prisma, cliente_id)
        reply.send(values)
    })

    app.put('/order/:pedido_id', {'preHandler':auth}, async function(request, reply){
        const pedido_id = request.params.pedido_id
        const data = request.body
        const values = await orders.cancelOrder(prisma, pedido_id, data)
        reply.send(values)
    })

    app.delete('/order/:pedido_id', {'preHandler':auth}, async function(request, reply){
        const pedido_id = request.params.pedido_id
        const values = await orders.deleteOrder(prisma, pedido_id)
        reply.send(values)
    })


}

module.exports = rotas