
async function getProducts(prisma, id){

    const products = await prisma.produto.findMany(id?
        {
            where: {
                produto_id: Number(id)
            }
        }:
        {}
        )
    return products
}


module.exports = getProducts