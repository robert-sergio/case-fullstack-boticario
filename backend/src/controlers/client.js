require('dotenv').config()

async function DadosUsuario(prisma, id){

    const response = await prisma.cliente.findMany(
        {
            where: {
                cliente_id: Number(id)
            },
            include:{
                endereco: true
            }
        }
    )
    return response
}


module.exports = DadosUsuario