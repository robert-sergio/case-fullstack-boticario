require('dotenv').config()

async function Login(prisma, data){

    const response = await prisma.cliente.findMany(
        {   
            where: {
                email: data.email,
                senha: data.senha
            }
        }
    )
    if(response.length === 0)
        return {message:"Email or Password does not match"}

    return {message: "Welcome Back", cliente_id:response[0].cliente_id, nome:response[0].nome, token:process.env.APIKEY}
}


module.exports = Login