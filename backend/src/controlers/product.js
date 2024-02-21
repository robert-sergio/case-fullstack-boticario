const prisma = require("../middlewares/prisma")

const getProducts = async (request, reply) =>{
  try {
    const id = request.params.id
    const products = await prisma.produto.findMany(id?
      {
          where: {
              produto_id: Number(id)
          },
          include: {
              categoria: true
          }
      }:
      {}
    )
    reply.status(200).send(products)
  } catch (err) {
    reply.status(500).send(err)
  }
}


module.exports = getProducts