const rotas = (app, prisma) =>{

    app.get('/', function(request, reply){
        async function test(){
            const categoria1 = await prisma.categoria.create({
                data: {
                    nome_categoria: 'Pefumes',
                    descricao_categoria: 'variados'
                }
            })
        console.log(categoria1)
        }
        test()
        reply.send({'hello':'world 2'})
    })


}

module.exports = rotas