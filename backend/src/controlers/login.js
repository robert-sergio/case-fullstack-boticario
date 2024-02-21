const jwt = require('jsonwebtoken')

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

    const jwtToken = jwt.sign(
        {id: response.cliente_id, email:data.email}, 
        process.env.JWT_SECRET
    )

    return {message:"Welcome Back", token:jwtToken}
}


module.exports = Login