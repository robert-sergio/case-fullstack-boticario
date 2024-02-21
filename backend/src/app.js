const fastify = require('fastify')()
const routes = require('./rotas')
const configSwagger = require('./swagger')
fastify.register(require('@fastify/cors'), {
  origin:'*',
  methods:['*'],
})

configSwagger(fastify)
fastify.register(routes)

fastify.listen({ port: 3001 }, function (err, address) {
    if (err) {
      fastify.log.error(err)
      fastify.swaggerOptions;
      process.exit(1)
    }
})