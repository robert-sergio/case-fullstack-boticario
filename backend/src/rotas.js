const getProducts = require('./controlers/product')
const Login = require('./controlers/login')
const DadosUsuario = require('./controlers/client')
const orders = require('./controlers/orders')
const auth = require('./middlewares/auth')

function routes(fastify){
    fastify.get('/products', getProducts)
    fastify.get('/products/:id', getProducts)
    fastify.post('/login', Login)
    fastify.get('/user/:cliente_id', {'preHandler':auth}, DadosUsuario)
    fastify.post('/order', {'preHandler':auth}, orders.createOrder)
    fastify.get('/order/:cliente_id', {'preHandler':auth}, orders.getOrders)
    fastify.put('/order/:pedido_id', {'preHandler':auth}, orders.cancelOrder)
    fastify.delete('/order/:pedido_id', {'preHandler':auth}, orders.deleteOrder)
}

module.exports = routes