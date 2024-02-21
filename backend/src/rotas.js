const getProducts = require('./controlers/product')
const Login = require('./controlers/login')

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


}

module.exports = rotas