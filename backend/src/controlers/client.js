require('dotenv').config()

async function DadosUsuario(prisma, cliente_id){

    const response = await prisma.cliente.findMany(
        {
            where: {
                cliente_id: Number(cliente_id)
            },
            include:{
                endereco: true
            }
        }
    )
    return response
}


module.exports = DadosUsuario