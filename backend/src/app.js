const fastify = require('fastify')()
const routes = require('./rotas')
const configSwagger = require('./swagger')
fastify.register(require('@fastify/cors'), {
  origin:'*',
  methods:['*'],
})

routes(fastify)
configSwagger(fastify)

fastify.listen({ port: 3001 }, function (err, address) {
    if (err) {
      fastify.log.error(err)
      process.exit(1)
    }
})