async function Login(prisma, data){

    const response = await prisma.cliente.findMany(
        {
            where: {
                email: data.email,
                senha: data.senha
            },
            include:{
                endereco:true
            }
        }
    )
    console.log(response)
    return response
}


module.exports = Login