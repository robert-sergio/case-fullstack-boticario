const getProducts = require('./controlers/product')

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


}

module.exports = rotas