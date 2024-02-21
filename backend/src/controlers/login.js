require('dotenv').config()
const prisma = require('../middlewares/prisma')

const Login = async (request, reply) =>{
    try {        
        const response = await prisma.cliente.findMany(
            {   
                where: {
                    email: request.body.email,
                    senha: request.body.senha
                }
            }
        )
        if(response.length === 0)
            reply.status(401).send({message:"Email or Password does not match"})

        reply.status(201).send({message: "Welcome Back", cliente_id:response[0].cliente_id, nome:response[0].nome, token:process.env.APIKEY})
    } catch (err){
        reply.status(500).send(err)
    }
}


module.exports = Login