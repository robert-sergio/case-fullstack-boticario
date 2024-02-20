const fastify = require('fastify')
const rotas = require('./rotas')

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const app = fastify({
  logger: false
})

app.register(require('@fastify/cors'), {
  origin:'*',
  methods:['*'],
  
})

rotas(app, prisma)

app.listen({ port: 3001 }, function (err, address) {
    if (err) {
      app.log.error(err)
      process.exit(1)
    }
})