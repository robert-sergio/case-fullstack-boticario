const swaggerOptions = {
  swagger: {
      info: {
          title: "Docs",
          description: "API GB",
          version: "1.0.0",
      },
      host: "localhost",
      schemes: ["http", "https"],
      consumes: ["application/json"],
      produces: ["application/json"],
      tags: [{ name: "Default", description: "Default" }],
  },
};

const swaggerUiOptions = {
  routePrefix: "/docs",
  exposeRoute: true,
};

async function configSwagger(fastify){
  fastify.register(require('@fastify/swagger'), swaggerOptions);
  fastify.register(require('@fastify/swagger-ui'), swaggerUiOptions);
}

module.exports = configSwagger