require('dotenv').config()
const prisma = require('../middlewares/prisma')

const DadosUsuario = async (request, reply) =>{
    try {
        const response = await prisma.cliente.findMany(
            {
                where: {
                    cliente_id: Number(request.params.cliente_id)
                },
                include:{
                    endereco: true
                }
            }
        )
        reply.status(200).reply(response)
    } catch (err){
        reply.status(500).send(err)
    }

}


module.exports = DadosUsuario